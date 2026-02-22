import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "~/lib/axios";
import { MutationConfig } from "~/lib/react-query";
import { TRegisterFormSchema } from "../forms/register";

export const registerUser = async (data: TRegisterFormSchema) => {
  const { confirmPassword, ...result } = data;
  // console.log(result);
  const response = await axiosInstance.post("/auth/register", result);
  return response.data;
};

type UseRegisterUserParams = {
  mutationConfig?: MutationConfig<typeof registerUser>;
};

export const useRegisterUser = ({
  mutationConfig
}: UseRegisterUserParams = {}) => {
  return useMutation({
    ...mutationConfig,
    mutationFn: registerUser
  });
};
