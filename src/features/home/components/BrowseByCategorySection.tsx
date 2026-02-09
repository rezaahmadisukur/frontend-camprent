import Link from "next/link";
import { ComponentType } from "react";
import { cn } from "~/lib/utils";
import { CATEGORY_LIST } from "../constants/home.contant";

type TypeProps = {
  id: number;
  icon: ComponentType<{
    className: string;
  }>;
  label: string;
  items: number;
};

const BrowseByCategoryCard = (props: TypeProps) => {
  const Icon = props.icon;
  return (
    <Link
      href="#"
      className={cn(
        "bg-background border shadow-2xs p-8 rounded-xl flex flex-col justify-center items-center gap-1 w-full h-42 transition-all duration-300 group hover:-translate-y-2 hover:shadow-lg"
      )}
    >
      <div
        className={cn(
          "w-14 h-14 flex justify-center items-center rounded-xl group-hover:scale-110 transition-all duration-300 bg-secondary/90",
          { "bg-primary/90": props.id % 2 === 0 },
          { "bg-muted-foreground/90": props.id % 3 === 0 }
        )}
      >
        <Icon className="size-6 text-primary-foreground" />
      </div>
      <h3 className="text-xs md:text-sm font-bold text-foreground/90">
        {props.label}
      </h3>
      <p className="text-muted-foreground text-sm font-semibold/90">
        {props.items} items
      </p>
    </Link>
  );
};

const BrowseByCategorySection = () => {
  return (
    <section className={cn("p-6", "md:p-4", "lg:p-0")}>
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-foreground">
          Browse by Category
        </h1>
        <p className="text-muted-foreground text-xl font-normal">
          Find Exactly what you need for your outdoor adventure
        </p>
      </div>

      <div
        className={cn(
          "grid grid-cols-2  mt-12 gap-2",
          "md:grid-cols-3",
          "xl:grid-cols-6 lg:gap-2"
        )}
      >
        {CATEGORY_LIST.map((category, index) => (
          <BrowseByCategoryCard
            key={`${category.label}-${index}`}
            {...category}
          />
        ))}
      </div>
    </section>
  );
};

export default BrowseByCategorySection;
