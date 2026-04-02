import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "~/lib/axios";
import { MutationConfig } from "~/lib/react-query";

export const verifyUser = async (token: string) => {
  const response = await axiosInstance.get("/auth/verify-email", {
    params: {
      token: token
    }
  });

  return response.data;
};

type UseVerifyUserParams = {
  mutationConfig?: MutationConfig<typeof verifyUser>;
};

export const useVerifyUser = ({ mutationConfig }: UseVerifyUserParams = {}) => {
  return useMutation({
    ...mutationConfig,
    mutationFn: verifyUser
  });
};
