import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, SlidersHorizontal, X } from "lucide-react";

const Explore = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedLocation, setSelectedLocation] = useState("all");

  // Mock projects data
  const projects = [
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
    {
      id: "5",
      title: "Documentary: Stories of Ethiopian Diaspora",
      category: "Film",
      location: "Addis Ababa, Ethiopia",
      creator: "Michael Tesfaye",
      image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&q=80",
      goal: 400000,
      raised: 234000,
      backers: 178,
      daysLeft: 15,
      verified: true,
    },
    {
      id: "6",
      title: "Community Library for Underserved Areas",
      category: "Community",
      location: "Kampala, Uganda",
      creator: "Grace Nakato",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&q=80",
      goal: 250000,
      raised: 189000,
      backers: 267,
      daysLeft: 20,
      verified: true,
    },
  ];

  const categories = ["All", "Tech", "Art", "Film", "Music", "Community", "Business", "Education"];
  const locations = ["All Locations", "Ethiopia", "Kenya", "Uganda", "Tanzania"];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Header */}
      <section className="bg-muted/30 py-12 border-b">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Explore Projects</h1>
          <p className="text-lg text-muted-foreground">
            Discover innovative projects from creators across East Africa
          </p>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="sticky top-16 z-40 bg-card border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search projects..."
                className="pl-10"
              />
            </div>

            {/* Sort */}
            <Select defaultValue="trending">
              <SelectTrigger className="w-full md:w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="trending">Trending</SelectItem>
                <SelectItem value="latest">Latest</SelectItem>
                <SelectItem value="most-funded">Most Funded</SelectItem>
                <SelectItem value="ending-soon">Ending Soon</SelectItem>
              </SelectContent>
            </Select>

            {/* Filter Toggle (Mobile) */}
            <Button
              variant="outline"
              className="md:hidden"
              onClick={() => setShowFilters(!showFilters)}
            >
              <SlidersHorizontal className="h-4 w-4 mr-2" />
              Filters
            </Button>
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap gap-2 mt-4">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={selectedCategory === category.toLowerCase() ? "default" : "outline"}
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                onClick={() => setSelectedCategory(category.toLowerCase())}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="flex gap-8">
            {/* Sidebar Filters (Desktop) */}
            <aside className={`${showFilters ? 'block' : 'hidden'} md:block w-full md:w-64 space-y-6`}>
              <div className="bg-card border rounded-lg p-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold">Filters</h3>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="md:hidden"
                    onClick={() => setShowFilters(false)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
                
                <div className="space-y-4">
                  {/* Location Filter */}
                  <div>
                    <label className="text-sm font-medium mb-2 block">Location</label>
                    <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {locations.map((location) => (
                          <SelectItem key={location} value={location.toLowerCase().replace(' ', '-')}>
                            {location}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Status Filter */}
                  <div>
                    <label className="text-sm font-medium mb-2 block">Status</label>
                    <div className="space-y-2">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm">Active</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm">Almost Funded</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm">Verified Only</span>
                      </label>
                    </div>
                  </div>

                  <Button variant="outline" className="w-full" size="sm">
                    Clear Filters
                  </Button>
                </div>
              </div>
            </aside>

            {/* Projects Grid */}
            <main className="flex-1">
              <div className="mb-6 flex items-center justify-between">
                <p className="text-muted-foreground">
                  Showing <span className="font-semibold text-foreground">{projects.length}</span> projects
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => (
                  <ProjectCard key={project.id} {...project} />
                ))}
              </div>

              {/* Load More */}
              <div className="text-center mt-12">
                <Button variant="outline" size="lg">
                  Load More Projects
                </Button>
              </div>
            </main>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Explore;
