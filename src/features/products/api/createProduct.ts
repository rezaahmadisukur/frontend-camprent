import { axiosInstance } from "~/lib/axios";
import { TCreateProductSchema } from "../form-schemas/CreateProductSchema";
import { MutationConfig } from "~/lib/react-query";
import { useMutation } from "@tanstack/react-query";

export const createProduct = async (data: TCreateProductSchema) => {
  const response = await axiosInstance.post("/product", data);

  return response.data;
};

type UseCreateProductParams = {
  mutationConfig?: MutationConfig<typeof createProduct>;
};

export const useCreateProduct = ({
  mutationConfig
}: UseCreateProductParams) => {
  return useMutation({
    ...mutationConfig,
    mutationFn: createProduct
  });
};
