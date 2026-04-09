import { cookies } from "next/headers";
import CreateCategoryProductContent from "../components/CreateCategoryProductContent";
import { redirect } from "next/navigation";

const CreateCategoryProduct = async () => {
  const cookieStore = await cookies();
  const token = cookieStore.get("auth_token");

  if (!token) {
    redirect("/auth");
  }

  return <CreateCategoryProductContent />;
};

export default CreateCategoryProduct;
