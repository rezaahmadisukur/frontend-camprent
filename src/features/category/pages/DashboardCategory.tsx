import UserLayout from "~/components/layout/user/UserLayout";
import DashboardCategoryContent from "../components/DashboardCategoryContent";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const DashboardCategory = async () => {
  const cookieStore = await cookies();
  const token = cookieStore.get("auth_token");

  if (!token) {
    redirect("/auth");
  }

  return (
    <UserLayout>
      <DashboardCategoryContent />
    </UserLayout>
  );
};

export default DashboardCategory;
