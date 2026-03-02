import { useForm } from "react-hook-form";
import { LoginFormSchema, TLoginFormSchema } from "../forms/login";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLoginUser } from "../api/loginUser";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const useLoginForm = () => {
  const router = useRouter();
  const { mutate } = useLoginUser({
    mutationConfig: {
      onError: (error) =>
        toast.error("Registration Failed", {
          description: error?.response?.data?.message
        }),
      onSuccess: () =>
        toast.success("Welcome, Successfully Logined", {
          duration: 3000
        })
    }
  });
  const form = useForm<TLoginFormSchema>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  });

  const login = async (data: TLoginFormSchema) => {
    try {
      mutate(data);
      router.refresh();
      router.push("/dashboard");
    } catch (error) {
      console.error(error);
    }
  };

  return { form, login };
};

export default useLoginForm;
