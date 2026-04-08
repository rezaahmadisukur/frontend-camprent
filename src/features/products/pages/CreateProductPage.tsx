import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import CreateProductContent from "../components/CreateProductContent";

const CreateProductPage = async () => {
  const cookieStore = await cookies();
  const token = cookieStore.get("auth_token");

  if (!token) {
    redirect("/auth");
  }

  return <CreateProductContent />;
};

export default CreateProductPage;
