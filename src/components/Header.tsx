import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold text-primary">Mohsin Foods</h1>
            <span className="text-sm text-muted-foreground">Premium Dehydrated Products</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
            <a href="#products" className="text-foreground hover:text-primary transition-colors">Products</a>
            <a href="#quality" className="text-foreground hover:text-primary transition-colors">Quality</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-1">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-1">
                <Mail className="h-4 w-4" />
                <span>info@mohsinfoods.com</span>
              </div>
            </div>
            <Button variant="default" className="bg-gradient-primary shadow-elegant">
              Get Quote
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;