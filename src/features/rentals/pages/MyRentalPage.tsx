import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import UserLayout from "~/components/layout/user/UserLayout";

const MyRentalPage = async () => {
  const cookieStore = await cookies();
  const token = cookieStore.get("auth_token");

  if (!token) {
    redirect("/auth");
  }

  return (
    <UserLayout>
      <div className="min-h-screen mt-20">
        <h1>My Rental Page</h1>
      </div>
    </UserLayout>
  );
};

export default MyRentalPage;
