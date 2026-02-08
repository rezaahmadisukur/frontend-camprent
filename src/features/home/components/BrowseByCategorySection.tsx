import { CookieIcon, Package, TentIcon } from "lucide-react";
import Link from "next/link";
import { cn } from "~/lib/utils";

const mokeup_category = [
  {
    logo: <TentIcon />,
    color: "bg-accent-foreground",
    title: "Tents",
    items: 24
  },
  {
    logo: <CookieIcon />,
    color: "bg-primary",
    title: "Cooking Gear",
    items: 18
  },
  {
    logo: <Package />,
    color: "bg-secondary",
    title: "Backpacks",
    items: 15
  },
  {
    logo: <Package />,
    color: "bg-secondary",
    title: "Backpacks",
    items: 15
  },
  {
    logo: <Package />,
    color: "bg-secondary",
    title: "Backpacks",
    items: 15
  },
  {
    logo: <Package />,
    color: "bg-secondary",
    title: "Backpacks",
    items: 15
  }
];

const BrowseByCategoryCard = () => {
  return (
    <Link
      href=""
      className="bg-background border shadow-2xs p-8 rounded-xl flex flex-col justify-center items-center gap-1 w-42 h-42 transition-all duration-300 group hover:-translate-y-2 hover:shadow-lg"
    >
      <div className="w-14 h-14 bg-accent-foreground flex justify-center items-center rounded-xl group-hover:scale-110 transition-all duration-300">
        <TentIcon className="size-6 text-primary-foreground" />
      </div>
      <h3 className="text-lg font-bold text-foreground/90">Tents</h3>
      <p className="text-muted-foreground text-sm font-semibold/90">24 items</p>
    </Link>
  );
};

const BrowseByCategorySection = () => {
  return (
    <div className="">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-foreground">
          Browse by Category
        </h1>
        <p className="text-muted-foreground text-xl font-normal">
          Find Exactly what you need for your outdoor adventure
        </p>
      </div>

      <div className={cn("grid mt-12 gap-4", "lg:grid-cols-6")}>
        {mokeup_category.map((category, index) => (
          <BrowseByCategoryCard key={`${category.title}-${index}`} />
        ))}
      </div>
    </div>
  );
};

export default BrowseByCategorySection;
