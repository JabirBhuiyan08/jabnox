import React, { useState } from 'react';

const PaymentMethod = () => {
  const [selectedMethod, setSelectedMethod] = useState('paypal');

  const paymentMethods = [
    {
      id: 'paypal',
      name: 'PayPal',
      description: 'Pay securely with your PayPal account',
      fee: 'No fees',
      icon: 'fab fa-paypal',
      color: 'bg-blue-600'
    },
    {
      id: 'bkash',
      name: 'bKash',
      description: 'Bangladesh\'s most popular mobile payment',
      fee: '1.5% fee',
      icon: 'fas fa-mobile-alt',
      color: 'bg-pink-600'
    },
    {
      id: 'wise',
      name: 'Wise',
      description: 'International money transfer',
      fee: 'Low fees',
      icon: 'fas fa-globe',
      color: 'bg-purple-600'
    }
  ];

  const handleContinue = () => {
    const selected = paymentMethods.find(method => method.id === selectedMethod);
    alert(`Redirecting to ${selected.name} payment...`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="container max-w-4xl bg-violet-500/10 rounded-xl shadow-2xl overflow-hidden">
        {/* Header */}
        <header className="bg-violet-600 text-white py-8 px-6 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Payment Methods</h1>
          <p className="text-blue-100">Choose your preferred payment option</p>
        </header>
        
        <div className="md:flex">
          {/* Payment Methods Section */}
          <div className="md:w-2/3 p-6">
            <h2 className="text-2xl font-semibold text-gray-200 mb-6 pb-2 border-b border-gray-200">Select Payment Method</h2>
            
            {paymentMethods.map((method) => (
              <div 
                key={method.id}
                className={`method-card bg-white rounded-lg border-2 p-5 mb-5 shadow-sm hover:shadow-md cursor-pointer transition-all duration-300 ${
                  selectedMethod === method.id 
                    ? 'border-blue-500 bg-blue-50' 
                    : 'border-gray-200 hover:border-' + method.color.split('-')[1]
                }`}
                onClick={() => setSelectedMethod(method.id)}
              >
                <div className="flex items-center">
                  <div className={`${method.color} w-14 h-14 rounded-lg flex items-center justify-center mr-4`}>
                    <i className={`${method.icon} text-white text-2xl`}></i>
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-semibold text-lg text-gray-800">{method.name}</h3>
                    <p className="text-gray-600 text-sm">{method.description}</p>
                  </div>
                  <div className="text-green-600 font-medium">{method.fee}</div>
                </div>
              </div>
            ))}
            
            <button 
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition duration-300 mt-2"
              onClick={handleContinue}
            >
              Continue to Payment
            </button>
          </div>
          
          {/* Payment Information Section */}
          <div className="md:w-1/3 bg-gray-50 p-6 border-l border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 pb-2 border-b border-gray-200">Payment Information</h2>
            
            <div className="mb-6">
              <div className="flex items-center text-gray-700 font-medium mb-2">
                <i className="fas fa-lock text-blue-600 mr-2"></i>
                <span>Secure Payment</span>
              </div>
              <p className="text-gray-600 text-sm">All transactions are encrypted and secure. We don't store your payment details.</p>
            </div>
            
            <div className="mb-6">
              <div className="flex items-center text-gray-700 font-medium mb-2">
                <i className="fas fa-clock text-blue-600 mr-2"></i>
                <span>Processing Time</span>
              </div>
              <p className="text-gray-600 text-sm">PayPal and bKash payments are instant. Wise transfers may take 1-2 business days.</p>
            </div>
            
            <div className="mb-6">
              <div className="flex items-center text-gray-700 font-medium mb-2">
                <i className="fas fa-sync-alt text-blue-600 mr-2"></i>
                <span>Refund Policy</span>
              </div>
              <p className="text-gray-600 text-sm">Full refunds available within 30 days of purchase. Contact support for assistance.</p>
            </div>
            
            {/* Security Badge */}
            <div className="bg-gray-100 rounded-lg p-5 text-center mt-8">
              <i className="fas fa-shield-alt text-green-500 text-4xl mb-3"></i>
              <p className="text-gray-700 font-medium">256-bit SSL Encryption</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethod;