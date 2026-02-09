import { ShoppingCartIcon, TentIcon, UserIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-background/50 w-full border-b backdrop-blur-md">
      <nav className="max-w-7xl 7xl:container mx-auto flex justify-between items-center h-16 px-4 sm:px-6 lg:px-8">
        {/* Logo Navbar */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-secondary text-secondary-foreground grid place-content-center">
            <TentIcon className="size-5" />
          </div>
          <span className="text-xl font-bold text-foreground">CampRent</span>
        </Link>
        {/* List Page */}
        <div className="flex items-center gap-8">
          <Link href="" className="font-semibold text-sm text-foreground/60">
            Home
          </Link>
          <Link href="" className="font-semibold text-sm text-foreground/60">
            Browse Gear
          </Link>
          <Link href="" className="font-semibold text-sm text-foreground/60">
            My Rentals
          </Link>
        </div>
        {/* Cart & CTA */}
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            className="border-0 text-foreground transition-all duration-300 hover:bg-primary hover:text-primary-foreground relative"
          >
            <ShoppingCartIcon />
            <div className="w-4 h-4 bg-primary text-primary-foreground rounded-full absolute -top-1 -right-1 grid place-content-center text-[10px]">
              1
            </div>
          </Button>
          <Button
            variant="outline"
            className="border-2 border-secondary text-secondary relative overflow-hidden group z-10 hover:text-secondary-foreground"
          >
            <UserIcon />
            Sign In
            <div className="absolute w-full h-full bg-secondary -translate-y-full group-hover:translate-y-0 transition-all duration-300 -z-20 inset-0"></div>
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
