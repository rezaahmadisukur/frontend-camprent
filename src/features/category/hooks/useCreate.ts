import { AxiosError } from "axios";
import { useCreateCategory } from "../api/createCategory";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  CreateCategorySchema,
  TCreateCategorySchema
} from "../form-schemas/CreateCategorySchema";

const useCreate = () => {
  const { mutate, isPending } = useCreateCategory({
    mutationConfig: {
      onError: (error) => {
        const axiosError = error as AxiosError<{ message: string }>;
        toast.error("Failed add category", {
          duration: 3000,
          description: axiosError?.response?.data?.message
        });
      },
      onSuccess: () => {
        toast.success("Success add category", {
          duration: 3000
        });
        form.reset();
      }
    }
  });

  const form = useForm({
    resolver: zodResolver(CreateCategorySchema),
    defaultValues: {
      name: ""
    }
  });

  const storeCategory = (data: TCreateCategorySchema) => {
    const payload = {
      name: data.name.toLocaleLowerCase().trim()
    };

    mutate(payload);
  };

  return { isPending, form, storeCategory };
};

export default useCreate;
