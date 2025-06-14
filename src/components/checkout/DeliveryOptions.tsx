
import React from 'react';
import { Truck, Clock, Zap } from 'lucide-react';

interface DeliveryOptionsProps {
  selectedOption: string;
  onOptionChange: (option: string) => void;
}

const DeliveryOptions: React.FC<DeliveryOptionsProps> = ({ selectedOption, onOptionChange }) => {
  const deliveryOptions = [
    {
      id: 'standard',
      name: 'Standard Delivery',
      icon: <Truck size={20} />,
      time: '5-7 business days',
      price: 'FREE',
      description: 'Free delivery on orders above ₹500'
    },
    {
      id: 'express',
      name: 'Express Delivery',
      icon: <Zap size={20} />,
      time: '2-3 business days',
      price: '₹99',
      description: 'Get your order faster'
    },
    {
      id: 'same-day',
      name: 'Same Day Delivery',
      icon: <Clock size={20} />,
      time: 'Within 24 hours',
      price: '₹199',
      description: 'Available in select cities'
    }
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border">
      <h2 className="text-xl font-semibold mb-4 flex items-center text-gray-900">
        <Truck size={20} className="mr-2" />
        Delivery Options
      </h2>
      
      <div className="space-y-3">
        {deliveryOptions.map((option) => (
          <label
            key={option.id}
            className={`flex items-center p-4 border rounded-lg cursor-pointer transition-colors ${
              selectedOption === option.id
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            <input
              type="radio"
              name="delivery"
              value={option.id}
              checked={selectedOption === option.id}
              onChange={(e) => onOptionChange(e.target.value)}
              className="sr-only"
            />
            <div className="flex items-center space-x-3 flex-1">
              <div className={`p-2 rounded ${selectedOption === option.id ? 'text-blue-600' : 'text-gray-600'}`}>
                {option.icon}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-gray-900">{option.name}</span>
                  <span className="font-semibold text-gray-900">{option.price}</span>
                </div>
                <p className="text-sm text-gray-600">{option.time}</p>
                <p className="text-xs text-gray-500">{option.description}</p>
              </div>
            </div>
            <div className={`w-4 h-4 border-2 rounded-full ${
              selectedOption === option.id ? 'border-blue-500 bg-blue-500' : 'border-gray-300'
            }`}>
              {selectedOption === option.id && (
                <div className="w-2 h-2 bg-white rounded-full m-0.5"></div>
              )}
            </div>
          </label>
        ))}
      </div>
    </div>
  );
};

export default DeliveryOptions;
