import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  MapPin,
  Clock,
  Users,
  CheckCircle2,
  Heart,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  Calendar,
} from "lucide-react";

const ProjectDetail = () => {
  // Mock project data
  const project = {
    title: "Solar-Powered Water Purification System for Rural Ethiopia",
    category: "Tech",
    location: "Addis Ababa, Ethiopia",
    creator: {
      name: "Amanuel Desta",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Amanuel",
      bio: "Engineer passionate about sustainable solutions for rural communities",
      projects: 3,
      verified: true,
    },
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200&q=80",
    goal: 500000,
    raised: 387500,
    backers: 234,
    daysLeft: 12,
    verified: true,
  };

  const percentage = (project.raised / project.goal) * 100;

  const rewards = [
    {
      amount: 1000,
      title: "Digital Thank You",
      description: "Personalized thank you email and project updates",
      backers: 45,
      delivery: "Immediately",
    },
    {
      amount: 5000,
      title: "Early Bird Supporter",
      description: "Everything above plus exclusive project sticker and digital wallpaper",
      backers: 89,
      delivery: "March 2024",
      limited: 50,
      claimed: 39,
    },
    {
      amount: 15000,
      title: "Community Champion",
      description: "All previous rewards plus project t-shirt and your name on our supporters wall",
      backers: 67,
      delivery: "April 2024",
    },
    {
      amount: 50000,
      title: "Innovation Partner",
      description: "All rewards plus site visit opportunity and quarterly impact reports",
      backers: 12,
      delivery: "May 2024",
      limited: 20,
      claimed: 12,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 pb-16">
        {/* Hero Section */}
        <div className="aspect-video w-full bg-muted overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container mx-auto px-4 -mt-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Title Card */}
              <Card className="shadow-lg">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 flex-wrap">
                        <Badge>{project.category}</Badge>
                        {project.verified && (
                          <Badge variant="outline" className="bg-trust-badge/10 text-trust-badge border-trust-badge">
                            <CheckCircle2 className="h-3 w-3 mr-1" />
                            Verified
                          </Badge>
                        )}
                      </div>
                      <h1 className="text-3xl font-bold">{project.title}</h1>
                      <p className="text-muted-foreground flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {project.location}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="icon">
                        <Heart className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="icon">
                        <Share2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  {/* Creator Info */}
                  <div className="flex items-center gap-3 pt-4 border-t">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={project.creator.avatar} />
                      <AvatarFallback>{project.creator.name[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="font-medium flex items-center gap-2">
                        by {project.creator.name}
                        {project.creator.verified && (
                          <CheckCircle2 className="h-4 w-4 text-trust-badge" />
                        )}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {project.creator.projects} projects created
                      </p>
                    </div>
                    <Button variant="outline" size="sm">
                      Follow
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Tabs */}
              <Tabs defaultValue="story" className="w-full">
                <TabsList className="w-full justify-start">
                  <TabsTrigger value="story">Story</TabsTrigger>
                  <TabsTrigger value="rewards">Rewards</TabsTrigger>
                  <TabsTrigger value="updates">Updates (3)</TabsTrigger>
                  <TabsTrigger value="comments">Comments (45)</TabsTrigger>
                  <TabsTrigger value="faq">FAQ</TabsTrigger>
                </TabsList>

                <TabsContent value="story" className="mt-6">
                  <Card>
                    <CardContent className="p-6 prose prose-slate max-w-none">
                      <h2>About This Project</h2>
                      <p>
                        Access to clean drinking water remains a critical challenge in many rural areas of Ethiopia. Our solar-powered water purification system offers a sustainable, cost-effective solution that harnesses the abundant solar energy available in the region.
                      </p>
                      
                      <h3>The Problem</h3>
                      <p>
                        Over 60% of rural communities in Ethiopia lack access to safe drinking water. Traditional purification methods are expensive, require electricity, and are difficult to maintain in remote areas. This leads to waterborne diseases and economic hardship for families who must travel long distances for clean water.
                      </p>

                      <h3>Our Solution</h3>
                      <p>
                        We've developed a compact, solar-powered purification unit that:
                      </p>
                      <ul>
                        <li>Operates entirely on solar energy - no grid connection needed</li>
                        <li>Purifies up to 500 liters of water daily</li>
                        <li>Uses UV and filtration technology to remove 99.9% of contaminants</li>
                        <li>Requires minimal maintenance with locally available parts</li>
                        <li>Costs 70% less than traditional systems over 5 years</li>
                      </ul>

                      <h3>Project Timeline</h3>
                      <p>
                        With your support, we'll deploy our first 10 units in the Amhara region by June 2024. Each unit will serve approximately 200 people, bringing clean water to 2,000+ individuals.
                      </p>

                      <h3>Impact & Sustainability</h3>
                      <p>
                        Beyond providing clean water, this project will:
                      </p>
                      <ul>
                        <li>Reduce waterborne illness by an estimated 80%</li>
                        <li>Save families 2-3 hours daily previously spent collecting water</li>
                        <li>Create 5 local jobs for installation and maintenance</li>
                        <li>Demonstrate a replicable model for other communities</li>
                      </ul>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="rewards" className="mt-6">
                  <div className="space-y-4">
                    {rewards.map((reward, index) => (
                      <Card key={index} className="card-hover">
                        <CardContent className="p-6">
                          <div className="flex flex-col sm:flex-row gap-4 justify-between">
                            <div className="space-y-2 flex-1">
                              <div className="flex items-center gap-3">
                                <p className="text-2xl font-bold text-primary">
                                  {new Intl.NumberFormat("en-US", {
                                    style: "currency",
                                    currency: "ETB",
                                    minimumFractionDigits: 0,
                                  }).format(reward.amount)}
                                </p>
                                {reward.limited && (
                                  <Badge variant="secondary">
                                    {reward.limited - reward.claimed!} / {reward.limited} left
                                  </Badge>
                                )}
                              </div>
                              <h3 className="font-semibold text-lg">{reward.title}</h3>
                              <p className="text-muted-foreground">{reward.description}</p>
                              <div className="flex items-center gap-4 text-sm text-muted-foreground pt-2">
                                <span className="flex items-center gap-1">
                                  <Users className="h-4 w-4" />
                                  {reward.backers} backers
                                </span>
                                <span className="flex items-center gap-1">
                                  <Calendar className="h-4 w-4" />
                                  Delivery: {reward.delivery}
                                </span>
                              </div>
                            </div>
                            <Button className="sm:self-start">
                              Select Reward
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="updates" className="mt-6">
                  <Card>
                    <CardContent className="p-6">
                      <p className="text-muted-foreground">Project updates will appear here</p>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="comments" className="mt-6">
                  <Card>
                    <CardContent className="p-6">
                      <p className="text-muted-foreground">Comments section coming soon</p>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="faq" className="mt-6">
                  <Card>
                    <CardContent className="p-6">
                      <p className="text-muted-foreground">FAQ section coming soon</p>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>

            {/* Sidebar - Funding Box */}
            <div className="lg:col-span-1">
              <Card className="sticky top-20 shadow-lg">
                <CardContent className="p-6 space-y-6">
                  {/* Funding Stats */}
                  <div className="space-y-4">
                    <div>
                      <p className="text-3xl font-bold text-primary">
                        {new Intl.NumberFormat("en-US", {
                          style: "currency",
                          currency: "ETB",
                          minimumFractionDigits: 0,
                        }).format(project.raised)}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        raised of{" "}
                        {new Intl.NumberFormat("en-US", {
                          style: "currency",
                          currency: "ETB",
                          minimumFractionDigits: 0,
                        }).format(project.goal)}{" "}
                        goal
                      </p>
                    </div>

                    <Progress value={percentage} className="h-3" />

                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <p className="text-2xl font-bold">{project.backers}</p>
                        <p className="text-sm text-muted-foreground">backers</p>
                      </div>
                      <div>
                        <p className="text-2xl font-bold">{project.daysLeft}</p>
                        <p className="text-sm text-muted-foreground">days left</p>
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Button size="lg" className="w-full">
                    Back This Project
                  </Button>

                  {/* Trust Indicators */}
                  <div className="pt-4 border-t space-y-3">
                    <div className="flex items-start gap-3 text-sm">
                      <CheckCircle2 className="h-5 w-5 text-trust-badge flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Secure Escrow Protection</p>
                        <p className="text-muted-foreground text-xs">
                          Funds held safely until project milestones
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 text-sm">
                      <CheckCircle2 className="h-5 w-5 text-trust-badge flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Verified Creator</p>
                        <p className="text-muted-foreground text-xs">
                          Identity and credentials confirmed
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 text-sm">
                      <CheckCircle2 className="h-5 w-5 text-trust-badge flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Mobile Money Supported</p>
                        <p className="text-muted-foreground text-xs">
                          Telebirr, CBE Birr, M-Pesa accepted
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Share */}
                  <div className="pt-4 border-t">
                    <p className="text-sm font-medium mb-3">Share this project</p>
                    <div className="flex gap-2">
                      <Button variant="outline" size="icon" className="flex-1">
                        <Facebook className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="icon" className="flex-1">
                        <Twitter className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="icon" className="flex-1">
                        <Linkedin className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
