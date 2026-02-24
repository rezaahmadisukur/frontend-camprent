import { Dispatch, SetStateAction } from "react";
import Login from "../components/Login";
import Register from "../components/Register";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";

type TProps = {
  setHeadDesc: Dispatch<SetStateAction<string>>;
};

const AuthForm = (props: TProps) => {
  return (
    <div className="w-1/3 h-fit bg-background rounded-2xl shadow flex justify-center p-10">
      <Tabs
        defaultValue="login"
        className="flex justify-center items-center w-full"
      >
        <TabsList className="w-full">
          <TabsTrigger
            value="login"
            className="font-medium cursor-pointer"
            onClick={() => props.setHeadDesc("Welcome back, adventurer!")}
          >
            Sign In
          </TabsTrigger>
          <TabsTrigger
            value="register"
            className="font-medium cursor-pointer"
            onClick={() => props.setHeadDesc("Start your outdoor journey")}
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
  );
};

export default AuthForm;
