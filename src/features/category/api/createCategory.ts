import { axiosInstance } from "~/lib/axios";
import { TCreateCategorySchema } from "../form-schemas/CreateCategorySchema";
import { MutationConfig } from "~/lib/react-query";
import { useMutation } from "@tanstack/react-query";

export const createCategory = async (data: TCreateCategorySchema) => {
  const response = await axiosInstance.post("/category", data);

  return response.data;
};

type UseCreateCategoryParams = {
  mutationConfig?: MutationConfig<typeof createCategory>;
};

export const useCreateCategory = ({
  mutationConfig
}: UseCreateCategoryParams = {}) => {
  return useMutation({
    ...mutationConfig,
    mutationFn: createCategory
  });
};
