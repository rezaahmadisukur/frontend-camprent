import { useRouter } from "next/navigation";
import { useLogoutUser } from "../api/logoutUser";
import { toast } from "sonner";
import { useQueryClient } from "@tanstack/react-query";

const useLogout = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { mutate, isPending } = useLogoutUser({
    mutationConfig: {
      onError: (error) =>
        toast.error("Logout Failed", {
          description: error?.response?.data?.message || "Something went wrong"
        }),
      onSuccess: () => {
        queryClient.clear();
        toast.success("Logged out successfully", {
          duration: 3000
        });
        router.push("/auth");
        router.refresh();
      }
    }
  });

  const logout = async () => {
    try {
      mutate(undefined);
    } catch (error) {
      console.error(error);
    }
  };

  return { logout, isPending };
};

export default useLogout;
