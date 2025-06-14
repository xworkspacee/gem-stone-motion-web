
import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Search, Plus, Trash2, Shield, UserCheck, UserX } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const SecuritySettings = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [newAdminEmail, setNewAdminEmail] = useState('');
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { data: adminUsers, isLoading } = useQuery({
    queryKey: ['admin-users'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('admin_users')
        .select(`
          *,
          profiles!admin_users_user_id_fkey(email, first_name, last_name),
          granted_by_profile:profiles!admin_users_granted_by_fkey(email, first_name, last_name)
        `)
        .order('granted_at', { ascending: false });
      
      if (error) throw error;
      return data;
    }
  });

  const { data: allUsers } = useQuery({
    queryKey: ['all-users'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data;
    }
  });

  const addAdminMutation = useMutation({
    mutationFn: async (email: string) => {
      // First find the user by email
      const { data: profile, error: profileError } = await supabase
        .from('profiles')
        .select('id')
        .eq('email', email)
        .single();
      
      if (profileError) throw new Error('User not found');
      
      // Get current admin user ID
      const { data: currentAdmin } = await supabase
        .from('admin_users')
        .select('user_id')
        .eq('user_id', (await supabase.auth.getUser()).data.user?.id)
        .single();
      
      // Add as admin
      const { error } = await supabase
        .from('admin_users')
        .insert({
          user_id: profile.id,
          granted_by: currentAdmin?.user_id,
          permissions: ['basic_access']
        });
      
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-users'] });
      setNewAdminEmail('');
      setIsAddDialogOpen(false);
      toast({
        title: "Success",
        description: "Admin access granted successfully",
      });
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to grant admin access",
        variant: "destructive",
      });
    }
  });

  const removeAdminMutation = useMutation({
    mutationFn: async (adminId: string) => {
      const { error } = await supabase
        .from('admin_users')
        .delete()
        .eq('id', adminId);
      
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-users'] });
      toast({
        title: "Success",
        description: "Admin access removed successfully",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to remove admin access",
        variant: "destructive",
      });
    }
  });

  const toggleAdminStatusMutation = useMutation({
    mutationFn: async ({ adminId, isActive }: { adminId: string; isActive: boolean }) => {
      const { error } = await supabase
        .from('admin_users')
        .update({ is_active: isActive })
        .eq('id', adminId);
      
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-users'] });
      toast({
        title: "Success",
        description: "Admin status updated successfully",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to update admin status",
        variant: "destructive",
      });
    }
  });

  const filteredAdmins = adminUsers?.filter(admin =>
    admin.profiles?.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    admin.profiles?.first_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    admin.profiles?.last_name?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Admins</CardTitle>
            <Shield className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{adminUsers?.length || 0}</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Admins</CardTitle>
            <UserCheck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">
              {adminUsers?.filter(admin => admin.is_active).length || 0}
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <UserCheck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{allUsers?.length || 0}</div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Admin Access Management</span>
            <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
              <DialogTrigger asChild>
                <Button className="bg-gray-900 hover:bg-gray-800">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Admin
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Grant Admin Access</DialogTitle>
                  <DialogDescription>
                    Enter the email address of the user you want to grant admin access to.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="email" className="text-right">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={newAdminEmail}
                      onChange={(e) => setNewAdminEmail(e.target.value)}
                      className="col-span-3"
                      placeholder="user@example.com"
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button 
                    onClick={() => addAdminMutation.mutate(newAdminEmail)}
                    disabled={!newAdminEmail || addAdminMutation.isPending}
                  >
                    Grant Access
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search admin users..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Admin User</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Granted By</TableHead>
                  <TableHead>Granted Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredAdmins?.map((admin) => (
                  <TableRow key={admin.id}>
                    <TableCell>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center">
                          <span className="text-white text-sm font-semibold">
                            {admin.profiles?.first_name?.charAt(0) || admin.profiles?.email?.charAt(0) || 'A'}
                          </span>
                        </div>
                        <div>
                          <div className="font-medium">
                            {admin.profiles?.first_name && admin.profiles?.last_name 
                              ? `${admin.profiles.first_name} ${admin.profiles.last_name}`
                              : 'No Name'
                            }
                          </div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>{admin.profiles?.email}</TableCell>
                    <TableCell>
                      {admin.granted_by_profile?.email || 'System'}
                    </TableCell>
                    <TableCell>
                      {new Date(admin.granted_at).toLocaleDateString()}
                    </TableCell>
                    <TableCell>
                      <Badge variant={admin.is_active ? "secondary" : "destructive"} className={admin.is_active ? "bg-green-100 text-green-800" : ""}>
                        {admin.is_active ? 'Active' : 'Inactive'}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end space-x-2">
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => toggleAdminStatusMutation.mutate({ 
                            adminId: admin.id, 
                            isActive: !admin.is_active 
                          })}
                          disabled={toggleAdminStatusMutation.isPending}
                        >
                          {admin.is_active ? <UserX className="h-4 w-4" /> : <UserCheck className="h-4 w-4" />}
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => removeAdminMutation.mutate(admin.id)}
                          disabled={removeAdminMutation.isPending}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SecuritySettings;
