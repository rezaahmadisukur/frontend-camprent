import { useForm } from "react-hook-form";
import { LoginFormSchema, TLoginFormSchema } from "../form-schames/login";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLoginUser } from "../api/loginUser";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { AxiosError } from "axios";

const useLoginForm = () => {
  const router = useRouter();
  const { mutate } = useLoginUser({
    mutationConfig: {
      onError: (error) => {
        const axiosError = error as AxiosError<{ message: string }>;
        toast.error("Login Failed", {
          description: axiosError.response?.data?.message
        });
      },

      onSuccess: () => {
        router.refresh();
        router.push("/dashboard");
        toast.success("Welcome, Successfully Logined", {
          duration: 3000
        });
      }
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
    } catch (error) {
      console.error(error);
    }
  };

  return { form, login };
};

export default useLoginForm;
