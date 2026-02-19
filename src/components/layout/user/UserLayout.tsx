import { ReactNode } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { cn } from "~/lib/utils";

type TProps = {
  children: ReactNode;
  className?: string;
};

const UserLayout = (props: TProps) => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className={props.className}>{props.children}</div>
      <Footer />
    </div>
  );
};

export default UserLayout;
