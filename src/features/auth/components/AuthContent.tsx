"use client";

import useAuth from "../hooks/useAuth";
import AuthForm from "./AuthForm";
import FooterAuth from "./FooterAuth";
import HeaderAuth from "./HeaderAuth";

const AuthContent = () => {
  const { headDesc, setHeadDesc } = useAuth();
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-foreground/5 gap-8 py-10">
      <HeaderAuth headDesc={headDesc} />
      <AuthForm setHeadDesc={setHeadDesc} />
      <FooterAuth />
    </div>
  );
};

export default AuthContent;
