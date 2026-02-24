"use client";

import { useState } from "react";
import AuthForm from "../components/AuthForm";
import HeaderAuth from "../components/HeaderAuth";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const AuthPage = () => {
  const [headDesc, setHeadDesc] = useState<string>("Welcome back, adventurer!");

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-foreground/5 gap-8 py-10">
      <HeaderAuth headDesc={headDesc} />
      <AuthForm setHeadDesc={setHeadDesc} />
      <div className="w-fit">
        <Link
          href="/"
          className="flex gap-2 items-center text-foreground/60 hover:text-secondary duration-300 transition-all "
        >
          <ArrowLeft className="size-4 font-normal" />
          <p className="text-sm font-medium">Back to Home</p>
        </Link>
      </div>
    </div>
  );
};

export default AuthPage;
