"use client";

import { TextAlignJustifyIcon, XIcon } from "lucide-react";
import { Button } from "../ui/button";
import { useHambMenuStore } from "./useHambmenu";
// import { useState } from "react";

const HambmenuMobile = () => {
  // const [isOpen, setIsOpen] = useState<boolean>(false);
  const { isOpen, toogle } = useHambMenuStore();
  return (
    <Button
      onClick={toogle}
      variant="outline"
      className="text-foreground border-0 inline-block md:hidden bg-transparent cursor-pointer hover:bg-transparent hover:text-secondary"
    >
      {isOpen ? (
        <XIcon className="size-6" />
      ) : (
        <TextAlignJustifyIcon className="size-6" />
      )}
    </Button>
  );
};

export default HambmenuMobile;
