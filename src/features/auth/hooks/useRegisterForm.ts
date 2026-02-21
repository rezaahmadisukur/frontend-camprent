import { useForm } from "react-hook-form";
import { RegisterFormSchema, TRegisterFormSchema } from "../forms/register";
import { zodResolver } from "@hookform/resolvers/zod";

const useRegisterForm = () => {
  const form = useForm<TRegisterFormSchema>({
    resolver: zodResolver(RegisterFormSchema),
    defaultValues: {
      fullname: "",
      email: "",
      password: "",
      confirmPassword: ""
    }
  });

  const register = async (data: TRegisterFormSchema) => {
    console.log(data);
  };

  return { form, register };
};

export default useRegisterForm;
