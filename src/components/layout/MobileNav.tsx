"use client";

import { Fragment } from "react/jsx-runtime";
import { NAV_LIST } from "../constans/layout.contant";
import { Button } from "../ui/button";
import { cn } from "~/lib/utils";
import Link from "next/link";
import { ShoppingCartIcon, UserIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { useHambMenuStore } from "./useHambmenu";

const MobileNav = () => {
  const pathname = usePathname();
  const { isOpen } = useHambMenuStore();
  return (
    <Fragment>
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
                    "w-full text-start bg-transparent text-foreground/80 font-semibold border-0 hover:bg-foreground/8",
                    {
                      "bg-secondary border-secondary hover:bg-secondary text-secondary-foreground hover:text-secondary-foreground":
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
                  className="border-2 border-secondary text-secondary relative overflow-hidden group z-10 hover:text-secondary-foreground w-full bg-transparent cursor-pointer"
                >
                  <UserIcon />
                  Sign In
                  <div className="absolute w-full h-full bg-secondary -translate-y-full group-hover:translate-y-0 transition-all duration-300 -z-20 inset-0"></div>
                </Button>
              </div>
              <div>
                <Button
                  variant="outline"
                  className="border-0 text-foreground transition-all duration-300 hover:bg-primary hover:text-primary-foreground relative w-full bg-transparent cursor-pointer"
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
    </Fragment>
  );
};

export default MobileNav;
