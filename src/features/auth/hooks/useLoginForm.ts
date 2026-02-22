import { useForm } from "react-hook-form";
import { LoginFormSchema, TLoginFormSchema } from "../forms/login";
import { zodResolver } from "@hookform/resolvers/zod";

const useLoginForm = () => {
  const form = useForm<TLoginFormSchema>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  });

  const login = async (data: TLoginFormSchema) => {
    console.log(data);
  };

  return { form, login };
};

export default useLoginForm;
