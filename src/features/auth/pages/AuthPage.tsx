import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import HeaderAuth from "../components/HeaderAuth";
import Login from "../components/Login";
import Register from "../components/Register";

const AuthPage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-foreground/5 gap-8">
      <HeaderAuth />
      <div className="w-1/3 h-fit bg-background rounded-2xl shadow flex justify-center p-10">
        <Tabs
          defaultValue="login"
          className="flex justify-center items-center w-full"
        >
          <TabsList className="w-full">
            <TabsTrigger value="login" className="font-medium">
              Sign In
            </TabsTrigger>
            <TabsTrigger value="register" className="font-medium">
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
