import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const MyRentalPage = async () => {
  const cookieStore = await cookies();
  const token = cookieStore.get("auth_token");

  if (!token) {
    redirect("/auth");
  }

  return (
    <div>
      <h1>My Rental Page</h1>
    </div>
  );
};

export default MyRentalPage;
