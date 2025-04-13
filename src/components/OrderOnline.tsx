
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/use-toast';
import { Home, MapPin, CreditCard, Phone } from 'lucide-react';

const OrderOnline: React.FC = () => {
  const [orderType, setOrderType] = useState('delivery');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('cash');
  const [specialInstructions, setSpecialInstructions] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!name || !phone || (orderType === 'delivery' && !address)) {
      toast({
        title: "Error",
        description: "Please fill all required fields",
        variant: "destructive"
      });
      return;
    }
    
    // Submit order
    toast({
      title: "Order Placed Successfully!",
      description: `Thank you for your order, ${name}. Your ${orderType} order will be processed shortly.`,
    });
    
    // Reset form
    setName('');
    setPhone('');
    setAddress('');
    setSpecialInstructions('');
  };

  return (
    <div className="py-16 bg-pizza-off-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-pizza-brown mb-4">Order Online</h2>
            <p className="text-gray-600">
              Place your order for delivery or takeaway. Our fresh, hot pizza will be with you in no time!
            </p>
          </div>
          
          <div className="bg-white shadow-lg rounded-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Order Type Selection */}
              <div className="space-y-4">
                <Label className="text-lg font-medium text-pizza-brown">Choose Order Type</Label>
                <div className="grid grid-cols-2 gap-4">
                  <Button
                    type="button"
                    variant={orderType === 'delivery' ? 'default' : 'outline'}
                    className={`p-6 text-lg ${
                      orderType === 'delivery' 
                        ? 'bg-pizza-orange-dark hover:bg-pizza-brown text-white' 
                        : 'border-pizza-orange-dark text-pizza-brown hover:bg-pizza-orange/30'
                    }`}
                    onClick={() => setOrderType('delivery')}
                  >
                    <Home className="mr-2" /> Delivery
                  </Button>
                  <Button
                    type="button"
                    variant={orderType === 'takeaway' ? 'default' : 'outline'}
                    className={`p-6 text-lg ${
                      orderType === 'takeaway' 
                        ? 'bg-pizza-orange-dark hover:bg-pizza-brown text-white' 
                        : 'border-pizza-orange-dark text-pizza-brown hover:bg-pizza-orange/30'
                    }`}
                    onClick={() => setOrderType('takeaway')}
                  >
                    <MapPin className="mr-2" /> Takeaway
                  </Button>
                </div>
              </div>
              
              {/* Customer Information */}
              <div className="space-y-4">
                <Label className="text-lg font-medium text-pizza-brown">Your Information</Label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input 
                      id="name" 
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input 
                      id="phone" 
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Your phone number"
                      required
                    />
                  </div>
                </div>
              </div>
              
              {/* Delivery Address */}
              {orderType === 'delivery' && (
                <div className="space-y-4">
                  <Label className="text-lg font-medium text-pizza-brown">Delivery Address *</Label>
                  <Textarea 
                    id="address" 
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Your full address"
                    className="min-h-[100px]"
                    required
                  />
                </div>
              )}
              
              {/* Payment Method */}
              <div className="space-y-4">
                <Label className="text-lg font-medium text-pizza-brown">Payment Method</Label>
                <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2 bg-gray-50 p-4 rounded-md border">
                      <RadioGroupItem value="cash" id="cash" />
                      <Label htmlFor="cash" className="flex items-center cursor-pointer">
                        <CreditCard className="mr-2" size={20} />
                        Cash on Delivery
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 bg-gray-50 p-4 rounded-md border">
                      <RadioGroupItem value="online" id="online" />
                      <Label htmlFor="online" className="flex items-center cursor-pointer">
                        <Phone className="mr-2" size={20} />
                        Online Payment
                      </Label>
                    </div>
                  </div>
                </RadioGroup>
              </div>
              
              {/* Special Instructions */}
              <div className="space-y-4">
                <Label htmlFor="instructions" className="text-lg font-medium text-pizza-brown">Special Instructions</Label>
                <Textarea 
                  id="instructions" 
                  value={specialInstructions}
                  onChange={(e) => setSpecialInstructions(e.target.value)}
                  placeholder="Any special requests for your order?"
                  className="min-h-[80px]"
                />
              </div>
              
              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full py-6 text-lg bg-pizza-orange-dark hover:bg-pizza-brown text-white"
              >
                Place Order
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderOnline;
