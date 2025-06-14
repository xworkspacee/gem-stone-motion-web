
import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { MapPin } from 'lucide-react';

interface AddressData {
  fullName: string;
  mobile: string;
  pincode: string;
  locality: string;
  address: string;
  city: string;
  state: string;
  landmark: string;
  alternatePhone: string;
}

interface AddressFormProps {
  address: AddressData;
  onAddressChange: (field: string, value: string) => void;
}

const AddressForm: React.FC<AddressFormProps> = ({ address, onAddressChange }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border">
      <h2 className="text-xl font-semibold mb-4 flex items-center text-gray-900">
        <MapPin size={20} className="mr-2" />
        Delivery Address
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="fullName" className="text-gray-700 font-medium">Full Name *</Label>
          <Input
            id="fullName"
            placeholder="Enter full name"
            value={address.fullName}
            onChange={(e) => onAddressChange('fullName', e.target.value)}
            className="mt-1"
          />
        </div>
        
        <div>
          <Label htmlFor="mobile" className="text-gray-700 font-medium">Mobile Number *</Label>
          <Input
            id="mobile"
            placeholder="10-digit mobile number"
            value={address.mobile}
            onChange={(e) => onAddressChange('mobile', e.target.value)}
            className="mt-1"
          />
        </div>
        
        <div>
          <Label htmlFor="pincode" className="text-gray-700 font-medium">Pincode *</Label>
          <Input
            id="pincode"
            placeholder="6 digits [0-9] PIN code"
            value={address.pincode}
            onChange={(e) => onAddressChange('pincode', e.target.value)}
            className="mt-1"
          />
        </div>
        
        <div>
          <Label htmlFor="locality" className="text-gray-700 font-medium">Locality</Label>
          <Input
            id="locality"
            placeholder="Locality"
            value={address.locality}
            onChange={(e) => onAddressChange('locality', e.target.value)}
            className="mt-1"
          />
        </div>
        
        <div className="md:col-span-2">
          <Label htmlFor="address" className="text-gray-700 font-medium">Address (Area and Street) *</Label>
          <Input
            id="address"
            placeholder="Flat, House no, Building, Company, Apartment"
            value={address.address}
            onChange={(e) => onAddressChange('address', e.target.value)}
            className="mt-1"
          />
        </div>
        
        <div>
          <Label htmlFor="city" className="text-gray-700 font-medium">City/District/Town *</Label>
          <Input
            id="city"
            placeholder="City/District/Town"
            value={address.city}
            onChange={(e) => onAddressChange('city', e.target.value)}
            className="mt-1"
          />
        </div>
        
        <div>
          <Label htmlFor="state" className="text-gray-700 font-medium">State *</Label>
          <Input
            id="state"
            placeholder="State"
            value={address.state}
            onChange={(e) => onAddressChange('state', e.target.value)}
            className="mt-1"
          />
        </div>
        
        <div>
          <Label htmlFor="landmark" className="text-gray-700 font-medium">Landmark (Optional)</Label>
          <Input
            id="landmark"
            placeholder="Near"
            value={address.landmark}
            onChange={(e) => onAddressChange('landmark', e.target.value)}
            className="mt-1"
          />
        </div>
        
        <div>
          <Label htmlFor="alternatePhone" className="text-gray-700 font-medium">Alternate Phone (Optional)</Label>
          <Input
            id="alternatePhone"
            placeholder="Alternate phone number"
            value={address.alternatePhone}
            onChange={(e) => onAddressChange('alternatePhone', e.target.value)}
            className="mt-1"
          />
        </div>
      </div>
      
      <div className="mt-4 p-3 bg-blue-50 rounded border border-blue-200">
        <p className="text-sm text-blue-700">
          📍 Make this my default address for faster checkout
        </p>
      </div>
    </div>
  );
};

export default AddressForm;
