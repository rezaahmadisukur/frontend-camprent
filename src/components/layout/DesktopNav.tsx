"use client";

import Link from "next/link";
import { NAV_LIST } from "../constans/layout.contant";
import { cn } from "~/lib/utils";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import { ShoppingCartIcon, UserIcon } from "lucide-react";

const DesktopNav = () => {
  const pathname = usePathname();
  return (
    <div className="hidden md:flex justify-between col-span-2">
      {/* List Page */}
      <div className="flex items-center gap-8">
        {NAV_LIST.map((nav, index) => (
          <Link
            key={index}
            href={nav.href}
            className={cn("font-semibold text-sm text-foreground/60", {
              "text-secondary": nav.href === pathname
            })}
          >
            {nav.label}
          </Link>
        ))}
      </div>
      {/* Cart & CTA */}
      <div className="flex items-center gap-4">
        <Button
          variant="outline"
          className="border-0 text-foreground transition-all duration-300 hover:bg-primary hover:text-primary-foreground relative bg-transparent cursor-pointer"
        >
          <ShoppingCartIcon />
          <div className="w-4 h-4 bg-primary text-primary-foreground rounded-full absolute -top-1 -right-1 grid place-content-center text-[10px]">
            1
          </div>
        </Button>
        <Link href="/auth">
          <Button
            variant="outline"
            className="border-2 border-secondary text-secondary relative overflow-hidden group z-10 hover:text-secondary-foreground bg-transparent cursor-pointer"
          >
            <UserIcon />
            Sign In
            <div className="absolute w-full h-full bg-secondary -translate-y-full group-hover:translate-y-0 transition-all duration-300 -z-20 inset-0"></div>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default DesktopNav;
