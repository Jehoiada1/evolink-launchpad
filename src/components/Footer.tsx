import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";
import logo from "@/assets/evolink-logo.png";

const Footer = () => {
  return (
    <footer className="border-t bg-card">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <img src={logo} alt="EvoLink" className="h-10 w-auto" />
            </Link>
            <p className="text-sm text-muted-foreground max-w-sm">
              Community-Powered Innovation for Africa. Turn your ideas into reality with the support of your community.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <a href="#" className="p-2 hover:bg-muted rounded-full transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 hover:bg-muted rounded-full transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 hover:bg-muted rounded-full transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 hover:bg-muted rounded-full transition-colors">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 hover:bg-muted rounded-full transition-colors">
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Discover */}
          <div>
            <h4 className="font-semibold mb-4">Discover</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/explore" className="text-muted-foreground hover:text-foreground transition-colors">
                  Explore Projects
                </Link>
              </li>
              <li>
                <Link to="/trending" className="text-muted-foreground hover:text-foreground transition-colors">
                  Trending
                </Link>
              </li>
              <li>
                <Link to="/success-stories" className="text-muted-foreground hover:text-foreground transition-colors">
                  Success Stories
                </Link>
              </li>
              <li>
                <Link to="/categories" className="text-muted-foreground hover:text-foreground transition-colors">
                  Categories
                </Link>
              </li>
            </ul>
          </div>

          {/* Create */}
          <div>
            <h4 className="font-semibold mb-4">Create</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/create" className="text-muted-foreground hover:text-foreground transition-colors">
                  Start a Project
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/creator-handbook" className="text-muted-foreground hover:text-foreground transition-colors">
                  Creator Handbook
                </Link>
              </li>
              <li>
                <Link to="/trust-safety" className="text-muted-foreground hover:text-foreground transition-colors">
                  Trust & Safety
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-muted-foreground hover:text-foreground transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
                  Terms of Use
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© 2024 EvoLink. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link to="/cookies" className="hover:text-foreground transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
