"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import HeaderAuth from "../components/HeaderAuth";
import Login from "../components/Login";
import Register from "../components/Register";
import { useState } from "react";

const AuthPage = () => {
  const [headDesc, setHeadDesc] = useState<string>("Welcome back, adventurer!");
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-foreground/5 gap-8 py-10">
      <HeaderAuth headDesc={headDesc} />
      <div className="w-1/3 h-fit bg-background rounded-2xl shadow flex justify-center p-10">
        <Tabs
          defaultValue="login"
          className="flex justify-center items-center w-full"
        >
          <TabsList className="w-full">
            <TabsTrigger
              value="login"
              className="font-medium cursor-pointer"
              onClick={() => setHeadDesc("Welcome back, adventurer!")}
            >
              Sign In
            </TabsTrigger>
            <TabsTrigger
              value="register"
              className="font-medium cursor-pointer"
              onClick={() => setHeadDesc("Start your outdoor journey")}
            >
              Sign Up
            </TabsTrigger>
          </TabsList>
          <TabsContent value="login" className="w-full">
            <Login />
          </TabsContent>
          <TabsContent value="register" className="w-full">
            <Register />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AuthPage;
