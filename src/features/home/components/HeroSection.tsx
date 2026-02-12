import { ArrowRight, StarIcon } from "lucide-react";
import Image from "next/image";
import heroImage from "~/assets/hero-camping.webp";
import { Button } from "~/components/ui/button";
import { cn } from "~/lib/utils";

const HeroImage = () => {
  return (
    <div className="w-full min-h-full -z-10 inset-0 absolute">
      <Image
        src={heroImage}
        alt="Hero Image"
        unoptimized
        fill
        className="object-cover"
      />
      <div className="absolute w-full h-full inset-0 bg-linear-to-r from-secondary/70 from-40% o-transparent"></div>
    </div>
  );
};

const HeroSection = () => {
  return (
    <section className="w-full min-h-[90vh] flex flex-col justify-center relative">
      <HeroImage />

      <div
        className={cn(
          "max-w-5xl 5xl:container",
          "w-full mx-auto space-y-4 p-4"
        )}
      >
        <div className="py-2 px-4 w-fit rounded-full bg-primary-foreground/20 backdrop-blur-2xl">
          <p
            className={cn(
              "font-semibold text-accent flex gap-2 items-center text-sm",
              "md:text-md"
            )}
          >
            <StarIcon className="text-primary fill-primary size-5" /> Rated
            4.9/5 by 2,000+ adventurers
          </p>
        </div>

        <div className={cn("font-bold text-4xl", "md:text-6xl")}>
          <h1 className="text-primary-foreground/90">Gear Up for Your Next</h1>
          <h1 className="text-primary/90">Adventure</h1>
        </div>

        <div className="max-w-2xl">
          <p
            className={cn(
              "text-primary-foreground/90 font-medium text-lg",
              "md:text-xl"
            )}
          >
            Premium camping equipment rentals at affordable prices. Everything
            you need for the perfect outdoor experience, without the storage
            hassle.
          </p>
        </div>

        <div className={cn("flex flex-col gap-4", "md:flex-row")}>
          <Button
            variant="default"
            size="lg"
            className="text-[16px] cursor-pointer"
          >
            Browse Gear <ArrowRight />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="text-[16px] bg-transparent border-2 text-secondary-foreground hover:bg-background/5 hover:text-secondary-foreground cursor-pointer"
          >
            How It Works
          </Button>
        </div>

        <hr className="max-w-2xl mt-8 border-primary-foreground/20" />

        <div className="flex gap-8 items-center">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-2xl font-bold text-primary-foreground">500+</h1>
            <p className="text-sm font-semibold text-primary-foreground/80">
              Gear Items
            </p>
          </div>

          <div className="flex flex-col justify-center items-center">
            <h1 className="text-2xl font-bold text-primary-foreground">24hr</h1>
            <p className="text-sm font-semibold text-primary-foreground/80">
              Delivery
            </p>
          </div>

          <div className="flex flex-col justify-center items-center">
            <h1 className="text-2xl font-bold text-primary-foreground">Free</h1>
            <p className="text-sm font-semibold text-primary-foreground/80">
              Returns
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
