import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";

const FooterAuth = () => {
  return (
    <div className="w-fit">
      <Link
        href="/"
        className="flex gap-2 items-center text-foreground/60 hover:text-secondary duration-300 transition-all "
      >
        <ArrowLeftIcon className="size-4 font-normal" />
        <p className="text-sm font-medium">Back to Home</p>
      </Link>
    </div>
  );
};

export default FooterAuth;
