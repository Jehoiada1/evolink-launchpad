import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import CategoryCard from "@/components/CategoryCard";
import { ArrowRight, Shield, TrendingUp, Users, Smartphone } from "lucide-react";
import { Cpu, Palette, Film, Music, Heart, Briefcase, GraduationCap, Calendar, Scissors } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  // Mock trending projects data
  const trendingProjects = [
    {
      id: "1",
      title: "Solar-Powered Water Purification System for Rural Ethiopia",
      category: "Tech",
      location: "Addis Ababa, Ethiopia",
      creator: "Amanuel Desta",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80",
      goal: 500000,
      raised: 387500,
      backers: 234,
      daysLeft: 12,
      verified: true,
      featured: true,
    },
    {
      id: "2",
      title: "Ethiopian Coffee Table Book: From Farm to Cup",
      category: "Art",
      location: "Jimma, Ethiopia",
      creator: "Sara Bekele",
      image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800&q=80",
      goal: 150000,
      raised: 142800,
      backers: 89,
      daysLeft: 18,
      verified: true,
    },
    {
      id: "3",
      title: "Afrobeat Music Festival 2024 - Nairobi",
      category: "Music",
      location: "Nairobi, Kenya",
      creator: "David Omondi",
      image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80",
      goal: 800000,
      raised: 524000,
      backers: 412,
      daysLeft: 25,
      verified: true,
      featured: true,
    },
    {
      id: "4",
      title: "Mobile App for Traditional Ethiopian Recipe Sharing",
      category: "Tech",
      location: "Bahir Dar, Ethiopia",
      creator: "Hana Girma",
      image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800&q=80",
      goal: 300000,
      raised: 198000,
      backers: 156,
      daysLeft: 8,
      verified: false,
    },
  ];

  // Categories data
  const categories = [
    { name: "Tech", icon: Cpu, projectCount: 342, color: "bg-primary" },
    { name: "Art", icon: Palette, projectCount: 189, color: "bg-accent" },
    { name: "Film", icon: Film, projectCount: 76, color: "bg-secondary" },
    { name: "Music", icon: Music, projectCount: 234, color: "bg-primary" },
    { name: "Community", icon: Heart, projectCount: 421, color: "bg-trust-badge" },
    { name: "Business", icon: Briefcase, projectCount: 298, color: "bg-accent" },
    { name: "Education", icon: GraduationCap, projectCount: 156, color: "bg-secondary" },
    { name: "Events", icon: Calendar, projectCount: 98, color: "bg-primary" },
    { name: "Crafts", icon: Scissors, projectCount: 203, color: "bg-accent" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="hero-gradient text-white py-20 md:py-32 animate-fade-in">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge className="bg-accent text-accent-foreground font-semibold px-4 py-1.5">
              Community-Powered Innovation for Africa
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Turn Ideas Into Reality — Powered by Your Community
            </h1>
            
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              Join thousands of creators and backers across Ethiopia and East Africa building the future together. From tech innovations to creative projects.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-base px-8">
                Start a Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-base px-8">
                Explore Projects
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-12 max-w-3xl mx-auto">
              <div className="flex flex-col items-center gap-2 p-4 rounded-lg bg-white/10 backdrop-blur">
                <Shield className="h-8 w-8 text-accent" />
                <p className="text-sm font-medium">Secure Escrow</p>
              </div>
              <div className="flex flex-col items-center gap-2 p-4 rounded-lg bg-white/10 backdrop-blur">
                <Smartphone className="h-8 w-8 text-accent" />
                <p className="text-sm font-medium">Mobile Money Ready</p>
              </div>
              <div className="flex flex-col items-center gap-2 p-4 rounded-lg bg-white/10 backdrop-blur">
                <Users className="h-8 w-8 text-accent" />
                <p className="text-sm font-medium">10,000+ Backers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Projects */}
      <section className="py-16 md:py-24 animate-slide-up">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold flex items-center gap-2">
                <TrendingUp className="h-7 w-7 text-primary" />
                Trending Projects
              </h2>
              <p className="text-muted-foreground mt-2">
                Popular projects making waves across East Africa
              </p>
            </div>
            <Link to="/explore">
              <Button variant="outline">
                View All
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trendingProjects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Explore Categories</h2>
            <p className="text-muted-foreground mt-2">
              Find projects in the categories you care about
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {categories.map((category) => (
              <CategoryCard key={category.name} {...category} />
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories CTA */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Join 500+ Successfully Funded Projects
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              From tech startups to community initiatives, creators across East Africa are turning their dreams into reality with EvoLink.
            </p>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              Read Success Stories
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
