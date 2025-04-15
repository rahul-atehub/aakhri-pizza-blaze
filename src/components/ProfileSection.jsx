
import React, { useState } from 'react';
import { User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

const ProfileSection = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="text-pizza-brown">
          <User size={24} />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Your Profile</SheetTitle>
          <SheetDescription>
            {isAuthenticated ? (
              'Welcome back! Manage your orders and preferences here.'
            ) : (
              'Sign in to access your profile and order history.'
            )}
          </SheetDescription>
        </SheetHeader>
        <div className="mt-6 space-y-4">
          {!isAuthenticated && (
            <>
              <Button 
                className="w-full"
                onClick={() => setIsAuthenticated(true)}
              >
                Sign In
              </Button>
              <Button 
                variant="outline" 
                className="w-full"
              >
                Create Account
              </Button>
            </>
          )}
          {isAuthenticated && (
            <>
              <Button variant="outline" className="w-full">
                Order History
              </Button>
              <Button variant="outline" className="w-full">
                My Addresses
              </Button>
              <Button variant="outline" className="w-full">
                Saved Payments
              </Button>
              <Button 
                variant="destructive" 
                className="w-full"
                onClick={() => setIsAuthenticated(false)}
              >
                Sign Out
              </Button>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default ProfileSection;
