import { AxiosError } from "axios";
import { useCreateProduct } from "../api/createProduct";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  CreateProductSchema,
  TCreateProductSchema
} from "../form-schemas/CreateProductSchema";

const useCreate = () => {
  const { mutate, isPending } = useCreateProduct({
    mutationConfig: {
      onError: (error) => {
        const axiosError = error as AxiosError<{ message: string }>;
        toast.error("Failed add product", {
          duration: 3000,
          description: axiosError?.response?.data?.message
        });
      },
      onSuccess: () => {
        toast.success("Success add product", {
          duration: 3000
        });
      }
    }
  });

  const form = useForm({
    resolver: zodResolver(CreateProductSchema),
    defaultValues: {
      name: "",
      description: "",
      imageUrl: undefined,
      price: 0,
      stock: 0,
      categoryId: ""
    }
  });

  const store = (data: TCreateProductSchema) => {
    const formData = new FormData();

    formData.append("name", data.name);
    formData.append("price", String(data.price));
    formData.append("stock", String(data.stock));
    formData.append("categoryId", data.categoryId);

    if (data.description) formData.append("description", data.description);

    const fileInput = form.getValues("imageUrl") as string;

    if (fileInput && fileInput[0]) {
      formData.append("cover", fileInput[0]);
    }

    mutate(formData as any);
  };

  return { store, isPending, form };
};

export default useCreate;
