import { useForm } from "react-hook-form";
import { RegisterFormSchema, TRegisterFormSchema } from "../forms/register";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRegisterUser } from "../api/registerUser";
import { toast } from "sonner";

const useRegisterForm = () => {
  const { mutate, isPending } = useRegisterUser({
    mutationConfig: {
      onError: (error) =>
        toast.error("Registration Failed", {
          description: error?.response?.data?.message
        }),
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
