import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface CategoryCardProps {
  name: string;
  icon: LucideIcon;
  projectCount: number;
  color: string;
}

const CategoryCard = ({ name, icon: Icon, projectCount, color }: CategoryCardProps) => {
  return (
    <Link to={`/explore?category=${name.toLowerCase()}`}>
      <Card className="p-6 card-hover cursor-pointer group">
        <div className="flex flex-col items-center text-center space-y-3">
          <div
            className={`p-4 rounded-full ${color} transition-transform duration-300 group-hover:scale-110`}
          >
            <Icon className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="font-semibold text-base">{name}</h3>
            <p className="text-sm text-muted-foreground mt-1">
              {projectCount} {projectCount === 1 ? 'project' : 'projects'}
            </p>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default CategoryCard;
