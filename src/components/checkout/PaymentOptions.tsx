
import React from 'react';
import { CreditCard, Smartphone, Building, Banknote, Gift } from 'lucide-react';

interface PaymentOptionsProps {
  selectedMethod: string;
  onMethodChange: (method: string) => void;
}

const PaymentOptions: React.FC<PaymentOptionsProps> = ({ selectedMethod, onMethodChange }) => {
  const paymentMethods = [
    {
      id: 'upi',
      name: 'UPI',
      icon: <Smartphone size={20} />,
      description: 'Pay by any UPI app',
      recommended: true
    },
    {
      id: 'card',
      name: 'Credit / Debit Card',
      icon: <CreditCard size={20} />,
      description: 'Add and secure cards as per RBI guidelines'
    },
    {
      id: 'netbanking',
      name: 'Net Banking',
      icon: <Building size={20} />,
      description: 'Select from 58+ banks'
    },
    {
      id: 'wallet',
      name: 'Wallets',
      icon: <Gift size={20} />,
      description: 'Paytm, Amazon Pay, PhonePe & more'
    },
    {
      id: 'cod',
      name: 'Cash on Delivery',
      icon: <Banknote size={20} />,
      description: 'Pay when product is delivered'
    }
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border">
      <h2 className="text-xl font-semibold mb-4 flex items-center text-gray-900">
        <CreditCard size={20} className="mr-2" />
        Payment Options
      </h2>
      
      <div className="space-y-3">
        {paymentMethods.map((method) => (
          <label
            key={method.id}
            className={`flex items-center p-4 border rounded-lg cursor-pointer transition-colors ${
              selectedMethod === method.id
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            <input
              type="radio"
              name="payment"
              value={method.id}
              checked={selectedMethod === method.id}
              onChange={(e) => onMethodChange(e.target.value)}
              className="sr-only"
            />
            <div className="flex items-center space-x-3 flex-1">
              <div className={`p-2 rounded ${selectedMethod === method.id ? 'text-blue-600' : 'text-gray-600'}`}>
                {method.icon}
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-2">
                  <span className="font-medium text-gray-900">{method.name}</span>
                  {method.recommended && (
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                      RECOMMENDED
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-600">{method.description}</p>
              </div>
            </div>
            <div className={`w-4 h-4 border-2 rounded-full ${
              selectedMethod === method.id ? 'border-blue-500 bg-blue-500' : 'border-gray-300'
            }`}>
              {selectedMethod === method.id && (
                <div className="w-2 h-2 bg-white rounded-full m-0.5"></div>
              )}
            </div>
          </label>
        ))}
      </div>
      
      <div className="mt-4 p-3 bg-green-50 rounded border border-green-200">
        <p className="text-sm text-green-700">
          🔒 Your payment information is secure and encrypted
        </p>
      </div>
    </div>
  );
};

export default PaymentOptions;
