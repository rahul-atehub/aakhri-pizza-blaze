
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

const OrderOnline = () => {
  const [address, setAddress] = useState('');
  const { toast } = useToast();

  const handleAddressSubmit = (e) => {
    e.preventDefault();
    if (address.trim()) {
      toast({
        title: "Delivery Address Set",
        description: `We'll deliver to: ${address}`,
      });
    } else {
      toast({
        title: "Address Required",
        description: "Please enter a delivery address",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-pizza-brown mb-6">Order Online</h1>
      <Card>
        <CardContent className="p-6">
          <form onSubmit={handleAddressSubmit} className="space-y-4">
            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                Delivery Address
              </label>
              <Input
                id="address"
                type="text"
                placeholder="Enter your delivery address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <Button type="submit">
              Set Delivery Location
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default OrderOnline;
