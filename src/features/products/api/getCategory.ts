import { queryOptions, useQuery } from "@tanstack/react-query";
import { axiosInstance } from "~/lib/axios";
import { QueryConfig } from "~/lib/react-query";

type GetProductCategoriesInput = {
  limit?: number;
};

type GetProductCategoriesResponse = {
  id: string;
  name: string;
};

export const getProductCategories = async (
  input?: GetProductCategoriesInput
) => {
  const response = await axiosInstance.get<GetProductCategoriesResponse[]>(
    "/category",
    {
      params: input
    }
  );

  return response.data;
};

export const getProductCategoriesQueryKey = () => ["browse-categories"];

const getProductCategoriesQueryOptions = (
  input?: GetProductCategoriesInput
) => {
  return queryOptions({
    queryKey: getProductCategoriesQueryKey(),
    queryFn: () => getProductCategories(input)
  });
};

type UseGetProductCategoriesParams = {
  queryConfig?: QueryConfig<typeof getProductCategoriesQueryOptions>;
  input?: GetProductCategoriesInput;
};

export const useGetProductCategories = ({
  queryConfig,
  input
}: UseGetProductCategoriesParams = {}) => {
  return useQuery({
    ...getProductCategoriesQueryOptions(input),
    ...queryConfig
  });
};
