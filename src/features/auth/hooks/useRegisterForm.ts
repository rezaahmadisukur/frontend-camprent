import { useForm } from "react-hook-form";
import {
  RegisterFormSchema,
  TRegisterFormSchema
} from "../form-schemas/register";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRegisterUser } from "../api/registerUser";
import { toast } from "sonner";
import { AxiosError } from "axios";

const useRegisterForm = () => {
  const { mutate, isPending } = useRegisterUser({
    mutationConfig: {
      onError: (error) => {
        const axiosError = error as AxiosError<{ message: string }>;
        toast.error("Registration Failed", {
          description: axiosError?.response?.data?.message
        });
      },
      onSuccess: () =>
        toast.success("Successfully registered account", {
          duration: 3000
        })
    }
  });
  const form = useForm<TRegisterFormSchema>({
    resolver: zodResolver(RegisterFormSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: ""
    }
  });

  const register = async (data: TRegisterFormSchema) => {
    try {
      mutate(data);
    } catch (error) {
      console.error(error);
    }
  };

  return { form, register, isPending };
};

export default useRegisterForm;
