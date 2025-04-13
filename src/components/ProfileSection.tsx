
import React, { useState } from 'react';
import { User, LogIn, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { toast } from '@/components/ui/use-toast';

const ProfileSection: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [registerConfirm, setRegisterConfirm] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would validate credentials
    setIsLoggedIn(true);
    setUsername(loginEmail.split('@')[0]);
    setIsDialogOpen(false);
    toast({
      title: "Successfully logged in!",
      description: `Welcome back, ${loginEmail.split('@')[0]}!`,
    });
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (registerPassword !== registerConfirm) {
      toast({
        title: "Error",
        description: "Passwords don't match",
        variant: "destructive"
      });
      return;
    }
    // Here you would create a new account
    setIsLoggedIn(true);
    setUsername(registerEmail.split('@')[0]);
    setIsDialogOpen(false);
    toast({
      title: "Account created!",
      description: `Welcome to AAKHRI PIZZA, ${registerEmail.split('@')[0]}!`,
    });
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    toast({
      title: "Logged out",
      description: "You have been logged out successfully",
    });
  };

  return (
    <div>
      {isLoggedIn ? (
        <div className="flex items-center gap-2">
          <div className="hidden md:block font-medium">Hello, {username}</div>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleLogout}
            className="rounded-full bg-pizza-orange/50 hover:bg-pizza-orange-dark text-pizza-brown"
          >
            <LogOut size={18} />
          </Button>
        </div>
      ) : (
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full bg-pizza-orange/50 hover:bg-pizza-orange-dark text-pizza-brown"
            >
              <User size={18} />
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Account</DialogTitle>
            </DialogHeader>
            
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid grid-cols-2 w-full">
                <TabsTrigger value="login">Login</TabsTrigger>
                <TabsTrigger value="register">Register</TabsTrigger>
              </TabsList>
              
              <TabsContent value="login">
                <form onSubmit={handleLogin} className="space-y-4 py-4">
                  <div className="space-y-2">
                    <Label htmlFor="login-email">Email</Label>
                    <Input 
                      id="login-email" 
                      type="email" 
                      value={loginEmail}
                      onChange={(e) => setLoginEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="login-password">Password</Label>
                    <Input 
                      id="login-password" 
                      type="password" 
                      value={loginPassword}
                      onChange={(e) => setLoginPassword(e.target.value)}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-pizza-orange-dark hover:bg-pizza-brown text-white">
                    Login
                  </Button>
                </form>
              </TabsContent>
              
              <TabsContent value="register">
                <form onSubmit={handleRegister} className="space-y-4 py-4">
                  <div className="space-y-2">
                    <Label htmlFor="register-email">Email</Label>
                    <Input 
                      id="register-email" 
                      type="email" 
                      value={registerEmail}
                      onChange={(e) => setRegisterEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="register-password">Password</Label>
                    <Input 
                      id="register-password" 
                      type="password" 
                      value={registerPassword}
                      onChange={(e) => setRegisterPassword(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="register-confirm">Confirm Password</Label>
                    <Input 
                      id="register-confirm" 
                      type="password" 
                      value={registerConfirm}
                      onChange={(e) => setRegisterConfirm(e.target.value)}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-pizza-orange-dark hover:bg-pizza-brown text-white">
                    Register
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default ProfileSection;
