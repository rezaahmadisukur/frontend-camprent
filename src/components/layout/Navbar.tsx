import { TentIcon } from "lucide-react";
import Link from "next/link";
import { cn } from "~/lib/utils";
import DesktopNav from "./DesktopNav";
import HambmenuMobile from "./HambmenuMobile";
import MobileNav from "./MobileNav";
import { cookies } from "next/headers";

const Navbar = async () => {
  const cookieStore = await cookies();
  const token = cookieStore.get("auth_token");

  // console.log(typeof token?.value);

  return (
    <header className="sticky top-0 z-50 bg-background/50 w-full border-b backdrop-blur-md">
      <nav
        className={cn(
          "max-w-7xl 7xl:container mx-auto flex justify-between items-center h-16 px-4",
          "md:grid md:grid-cols-3",
          "lg:px-8"
        )}
      >
        {/* Logo Navbar */}
        <Link href="/" className="flex items-center gap-2 col-span-1">
          <div className="w-10 h-10 rounded-xl bg-secondary text-secondary-foreground grid place-content-center">
            <TentIcon className="size-5" />
          </div>
          <span className="text-xl font-bold text-foreground">CampRent</span>
        </Link>
        {/* Desktop  */}
        <DesktopNav token={token} />

        {/*  Mobile Hambmenu */}
        <HambmenuMobile />
      </nav>

      {/* Mobile List */}
      <MobileNav />
    </header>
  );
};

export default Navbar;
