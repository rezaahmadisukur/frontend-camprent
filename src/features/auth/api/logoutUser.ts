import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "~/lib/axios";
import { MutationConfig } from "~/lib/react-query";

export const logoutUser = async (): Promise<void> => {
  await axiosInstance.post("/auth/logout");
};

type UseLogoutUserParams = {
  mutationConfig?: MutationConfig<typeof logoutUser>;
};

export const useLogoutUser = ({ mutationConfig }: UseLogoutUserParams = {}) => {
  return useMutation({
    ...mutationConfig,
    mutationFn: logoutUser
  });
};
