"use client";

import AuthForm from "../components/AuthForm";
import HeaderAuth from "../components/HeaderAuth";
import FooterAuth from "../components/FooterAuth";
import useAuth from "../hooks/useAuth";
const AuthPage = () => {
  const { headDesc, setHeadDesc } = useAuth();

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-foreground/5 gap-8 py-10">
      <HeaderAuth headDesc={headDesc} />
      <AuthForm setHeadDesc={setHeadDesc} />
      <FooterAuth />
    </div>
  );
};

export default AuthPage;
