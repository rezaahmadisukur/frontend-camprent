import { axiosInstance } from "~/lib/axios";
import { TLoginFormSchema } from "../forms/login";
import { MutationConfig } from "~/lib/react-query";
import { useMutation } from "@tanstack/react-query";

export const loginUser = async (data: TLoginFormSchema) => {
  const response = await axiosInstance.post("/auth/login", data);
  return response.data;
};

type UseLoginUserParams = {
  mutationConfig?: MutationConfig<typeof loginUser>;
};

export const useLoginUser = ({ mutationConfig }: UseLoginUserParams = {}) => {
  return useMutation({
    ...mutationConfig,
    mutationFn: loginUser
  });
};
