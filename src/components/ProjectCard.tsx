import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { MapPin, Clock, Users, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  id: string;
  title: string;
  category: string;
  location: string;
  creator: string;
  image: string;
  goal: number;
  raised: number;
  backers: number;
  daysLeft: number;
  verified?: boolean;
  featured?: boolean;
}

const ProjectCard = ({
  id,
  title,
  category,
  location,
  creator,
  image,
  goal,
  raised,
  backers,
  daysLeft,
  verified = false,
  featured = false,
}: ProjectCardProps) => {
  const percentage = Math.min((raised / goal) * 100, 100);
  const formattedRaised = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "ETB",
    minimumFractionDigits: 0,
  }).format(raised);
  
  const formattedGoal = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "ETB",
    minimumFractionDigits: 0,
  }).format(goal);

  return (
    <Link to={`/project/${id}`}>
      <Card className="overflow-hidden card-hover group cursor-pointer">
        <div className="relative aspect-video overflow-hidden bg-muted">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {featured && (
            <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground font-semibold">
              Featured
            </Badge>
          )}
          <Badge variant="secondary" className="absolute top-3 right-3">
            {category}
          </Badge>
        </div>
        
        <CardContent className="p-5 space-y-3">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-semibold text-lg line-clamp-2 group-hover:text-primary transition-colors">
              {title}
            </h3>
            {verified && (
              <CheckCircle2 className="h-5 w-5 text-trust-badge flex-shrink-0" />
            )}
          </div>
          
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            <MapPin className="h-3.5 w-3.5" />
            {location} · by {creator}
          </p>
          
          <div className="space-y-2">
            <Progress value={percentage} className="h-2" />
            <div className="flex items-center justify-between text-sm">
              <div>
                <span className="font-bold text-primary">{formattedRaised}</span>
                <span className="text-muted-foreground"> raised of {formattedGoal}</span>
              </div>
              <span className="font-semibold">{Math.round(percentage)}%</span>
            </div>
          </div>
        </CardContent>
        
        <CardFooter className="px-5 py-4 bg-muted/30 border-t flex items-center justify-between text-sm">
          <div className="flex items-center gap-1 text-muted-foreground">
            <Users className="h-4 w-4" />
            <span className="font-medium">{backers}</span> backers
          </div>
          <div className="flex items-center gap-1 text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span className="font-medium">{daysLeft}</span> days left
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default ProjectCard;
