import {
  ArrowRightIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  RotateCcwIcon,
  ShieldIcon,
  TentIcon,
  TruckIcon
} from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import { cn } from "~/lib/utils";
import { PROFIT_LIST } from "../constans/layout.contant";

const Footer = () => {
  return (
    <footer className="bg-secondary/90 pt-30 pb-10 px-6">
      <div className="max-w-7xl 7xl:container mx-auto lg:p-8">
        {/* Header */}
        <div className="flex flex-col justify-center items-center max-w-lg mx-auto gap-8">
          {/* Icon Slogan */}
          <div className="flex items-center flex-wrap justify-center gap-6">
            {PROFIT_LIST.map((profit, index) => (
              <div
                key={index}
                className={cn(
                  {
                    "max-md:basis-full max-md:flex max-md:justify-center":
                      index === 0
                  },
                  "flex items-center gap-2 text-sm text-primary-foreground font-medium"
                )}
              >
                <profit.icon className="size-5 text-primary font-normal" />
                {profit.label}
              </div>
            ))}
          </div>
          <h1
            className={cn(
              "font-bold text-primary-foreground text-center text-4xl",
              "md:text-5xl"
            )}
          >
            Ready for Your Next Adventure?
          </h1>
          <p className="text-lg font-medium text-primary-foreground/60 text-center">
            Join thousands of happy campers who rent their gear from us. Start
            exploring today!
          </p>
          <Button variant="default" size="xl" className="text-md">
            Start Renting Now
            <ArrowRightIcon />
          </Button>
        </div>
        {/* Content */}
        <div
          className={cn(
            "grid grid-cols-1 mt-40 gap-8",
            "md:grid-cols-2",
            "xl:grid-cols-4"
          )}
        >
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-background/30 text-secondary-foreground grid place-content-center">
                <TentIcon className="size-5" />
              </div>
              <h1 className="text-2xl font-bold text-primary-foreground">
                CampRent
              </h1>
            </div>
            <p className="text-primary-foreground/80 text-sm">
              Premium camping gear rentals for your next outdoor adventure.
              Quality equipment without the commitment.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg text-primary-foreground">
              Quick Links
            </h3>
            <div className="text-primary-foreground/80 flex flex-col mt-4 text-sm gap-4 font-medium">
              <Link href="" className="hover:text-primary-foreground">
                Browse Gear
              </Link>
              <Link href="">How It Works</Link>
              <Link href="">Pricing</Link>
              <Link href="">FAQs</Link>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-lg text-primary-foreground">
              Categories
            </h3>
            <div className="text-primary-foreground/80 flex flex-col mt-4 text-sm gap-4 font-medium">
              <Link href="" className="hover:text-primary-foreground">
                Tenst
              </Link>
              <Link href="">Sleeping Gear</Link>
              <Link href="">Backpacks</Link>
              <Link href="">Cooking Gear</Link>
              <Link href="">Lighting</Link>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-lg text-primary-foreground">
              Contact Us
            </h3>
            <div className="text-primary-foreground/80 flex flex-col mt-4 text-sm gap-4 font-medium">
              <Link
                href=""
                className="hover:text-primary-foreground flex items-center gap-2"
              >
                <MailIcon className="size-4" />
                hello@camprent.com
              </Link>
              <Link
                href=""
                className="hover:text-primary-foreground flex items-center gap-2"
              >
                <PhoneIcon className="size-4" />
                (021) 123-4567
              </Link>
              <Link
                href=""
                className="hover:text-primary-foreground flex items-center gap-2"
              >
                <MapPinIcon className="size-4" />
                Jawa Barat, Indonesia
              </Link>
            </div>
          </div>
        </div>

        <hr className="mt-20 mb-10 border-primary-foreground/20" />

        <p className="text-center text-sm font-normal text-primary-foreground/50">
          &copy; 2026 CampRent. All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
