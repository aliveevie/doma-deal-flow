import { useState } from "react";
import { Link } from "react-router-dom";
import { Wallet, Menu, X, MessageCircle, TrendingUp, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Navigation = () => {
  const [isConnected, setIsConnected] = useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/deals", label: "Deals", icon: TrendingUp },
    { href: "/messages", label: "Messages", icon: MessageCircle },
  ];

  return (
    <nav className="border-b border-border bg-background/80 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">DD</span>
            </div>
            <span className="text-xl font-bold gradient-primary bg-clip-text text-transparent">
              Doma Deals
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="flex items-center space-x-1 text-foreground hover:text-primary transition-smooth"
              >
                {item.icon && <item.icon className="h-4 w-4" />}
                <span>{item.label}</span>
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {isConnected ? (
              <div className="flex items-center space-x-3">
                <Button variant="ghost" size="sm" asChild>
                  <Link to="/u/0x123...">
                    <User className="h-4 w-4 mr-1" />
                    Profile
                  </Link>
                </Button>
                <Button variant="outline" size="sm">
                  0x123...abc
                </Button>
              </div>
            ) : (
              <Button 
                variant="wallet" 
                onClick={() => setIsConnected(true)}
                className="shadow-soft"
              >
                <Wallet className="h-4 w-4 mr-2" />
                Connect Wallet
              </Button>
            )}
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      className="flex items-center space-x-2 text-foreground hover:text-primary transition-smooth py-2"
                    >
                      {item.icon && <item.icon className="h-4 w-4" />}
                      <span>{item.label}</span>
                    </Link>
                  ))}
                  <div className="pt-4 border-t border-border">
                    {isConnected ? (
                      <div className="space-y-3">
                        <Button variant="ghost" size="sm" className="w-full justify-start" asChild>
                          <Link to="/u/0x123...">
                            <User className="h-4 w-4 mr-2" />
                            Profile
                          </Link>
                        </Button>
                        <Button variant="outline" size="sm" className="w-full">
                          0x123...abc
                        </Button>
                      </div>
                    ) : (
                      <Button 
                        variant="wallet" 
                        onClick={() => setIsConnected(true)}
                        className="w-full"
                      >
                        <Wallet className="h-4 w-4 mr-2" />
                        Connect Wallet
                      </Button>
                    )}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;