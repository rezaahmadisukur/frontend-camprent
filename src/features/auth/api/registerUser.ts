import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "~/lib/axios";
import { MutationConfig } from "~/lib/react-query";
import { TRegisterFormSchema } from "../form-schames/register";

export const registerUser = async (data: TRegisterFormSchema) => {
  // const { confirmPassword, ...result } = data;
  console.log(data);
  const response = await axiosInstance.post("/auth/register", data);
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
