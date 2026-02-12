"use client";

import {
  ShoppingCartIcon,
  TentIcon,
  TextAlignJustifyIcon,
  UserIcon,
  XIcon
} from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { NAV_LIST } from "../constans/layout.contant";
import { usePathname } from "next/navigation";
import { cn } from "~/lib/utils";
import { useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState<boolean>(false);
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
            <Button
              variant="outline"
              className="border-2 border-secondary text-secondary relative overflow-hidden group z-10 hover:text-secondary-foreground bg-transparent cursor-pointer"
            >
              <UserIcon />
              Sign In
              <div className="absolute w-full h-full bg-secondary -translate-y-full group-hover:translate-y-0 transition-all duration-300 -z-20 inset-0"></div>
            </Button>
          </div>
        </div>

        {/*  Mobile Hambmenu */}
        <Button
          onClick={() => setIsOpen((prev) => !prev)}
          variant="outline"
          className="text-foreground border-0 inline-block md:hidden"
        >
          {isOpen ? (
            <XIcon className="size-6" />
          ) : (
            <TextAlignJustifyIcon className="size-6" />
          )}
        </Button>
      </nav>

      {/* Mobile List */}
      {isOpen && (
        <>
          <hr className="mx-4 border-foreground/10" />
          <div className="w-full sticky top-0 z-50 pb-8 pt-4">
            <div className="px-4 w-full flex flex-col gap-4">
              {NAV_LIST.map((nav, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className={cn(
                    "w-full text-start text-foreground/80 font-semibold border-0 hover:bg-foreground/8",
                    {
                      "bg-secondary border-secondary hover:bg-secondary text-secondary-foreground":
                        nav.href === pathname
                    }
                  )}
                >
                  <Link href={nav.href} className="w-full">
                    {nav.label}
                  </Link>
                </Button>
              ))}
            </div>

            <hr className="mx-4 border-foreground/10 mt-4" />

            {/* CTA Mobile */}
            <div className="flex items-center gap-4 mt-10 mx-4">
              <div className="w-full">
                <Button
                  variant="outline"
                  className="border-2 border-secondary text-secondary relative overflow-hidden group z-10 hover:text-secondary-foreground w-full"
                >
                  <UserIcon />
                  Sign In
                  <div className="absolute w-full h-full bg-secondary -translate-y-full group-hover:translate-y-0 transition-all duration-300 -z-20 inset-0"></div>
                </Button>
              </div>
              <div>
                <Button
                  variant="outline"
                  className="border-0 text-foreground transition-all duration-300 hover:bg-primary hover:text-primary-foreground relative w-full"
                >
                  <ShoppingCartIcon />
                  <div className="w-4 h-4 bg-primary text-primary-foreground rounded-full absolute -top-1 -right-1 grid place-content-center text-[10px]">
                    1
                  </div>
                </Button>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
};

export default Navbar;
