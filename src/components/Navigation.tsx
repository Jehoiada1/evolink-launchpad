import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search, Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/evolink-logo.png";

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-secondary-foreground/10 bg-secondary backdrop-blur supports-[backdrop-filter]:bg-secondary/95">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
          <img src={logo} alt="EvoLink" className="h-10 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/explore" className="text-sm font-medium text-secondary-foreground hover:text-accent transition-colors">
            Explore Projects
          </Link>
          <Link to="/create" className="text-sm font-medium text-secondary-foreground hover:text-accent transition-colors">
            Start a Project
          </Link>
          <Link to="/how-it-works" className="text-sm font-medium text-secondary-foreground hover:text-accent transition-colors">
            How It Works
          </Link>
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" size="icon" className="text-secondary-foreground hover:text-accent">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="outline" className="text-secondary-foreground border-secondary-foreground/30 hover:bg-secondary-foreground/10">Sign In</Button>
          <Button className="bg-accent text-accent-foreground hover:bg-accent/90">Start a Project</Button>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-secondary-foreground hover:text-accent"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-secondary-foreground/10 bg-secondary animate-slide-up">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <Link
              to="/explore"
              className="block py-2 text-sm font-medium text-secondary-foreground hover:text-accent transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Explore Projects
            </Link>
            <Link
              to="/create"
              className="block py-2 text-sm font-medium text-secondary-foreground hover:text-accent transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Start a Project
            </Link>
            <Link
              to="/how-it-works"
              className="block py-2 text-sm font-medium text-secondary-foreground hover:text-accent transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              How It Works
            </Link>
            <div className="pt-4 space-y-2">
              <Button variant="outline" className="w-full text-secondary-foreground border-secondary-foreground/30 hover:bg-secondary-foreground/10">
                Sign In
              </Button>
              <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">Start a Project</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;
