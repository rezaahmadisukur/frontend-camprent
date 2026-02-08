"use client";

import { ArrowRightIcon } from "lucide-react";
import ProductCard from "~/components/shared/ProductCard";
import { Button } from "~/components/ui/button";

const PopularRentalsSection = () => {
  return (
    <div className="mt-40">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-foreground">Popular Rentals</h1>

        <div className="flex justify-between items-center">
          <p className="text-xl font-normal text-muted-foreground/80">
            Top-rated gear loved by our community of adventurers
          </p>
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-accent-foreground text-accent-foreground transition-all duration-500 hover:text-primary-foreground relative group z-10 overflow-hidden"
          >
            View All Gear <ArrowRightIcon />
            <div className="w-full h-full bg-accent-foreground absolute inset-0 -translate-x-full transition-all duration-300 group-hover:translate-x-0 -z-10"></div>
          </Button>
        </div>
      </div>

      {/* Product Card Grid */}
      <div className="grid grid-cols-4 mt-12 gap-4">
        {[1, 2, 3, 4].map((_) => (
          <ProductCard key={_} />
        ))}
      </div>
    </div>
  );
};

export default PopularRentalsSection;
