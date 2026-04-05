import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import AuthContent from "../components/AuthContent";
const AuthPage = async () => {
  const cookieStore = await cookies();
  const token = cookieStore.get("auth_token");

  if (token) {
    redirect("/dashboard");
  }

  return <AuthContent />;
};

export default AuthPage;
