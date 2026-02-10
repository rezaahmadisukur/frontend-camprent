import { queryOptions, useQuery } from "@tanstack/react-query";
import { axiosInstance } from "~/lib/axios";
import { QueryConfig } from "~/lib/react-query";

type GetPopularProductsInput = {
  limit?: number;
};

type GetPopularProductsResponse = {
  id: string;
  name: string;
  price: number;
  stock: number;
  imageUrl?: string;
  description?: string;
  category: {
    name: string;
  };
};

export const getPopularProducts = async (input?: GetPopularProductsInput) => {
  const response = await axiosInstance.get<GetPopularProductsResponse[]>(
    "/product/popular",
    {
      params: input
    }
  );

  console.log(response);

  return response.data;
};

export const getPopularProductsQueryKey = () => ["popular-products"];

export const getPopularProductsQueryOptions = (
  input?: GetPopularProductsInput
) => {
  return queryOptions({
    queryKey: getPopularProductsQueryKey(),
    queryFn: () => getPopularProducts(input)
  });
};

type UseGetPopularProductsParams = {
  queryConfig?: QueryConfig<typeof getPopularProducts>;
  input?: GetPopularProductsInput;
};

export const useGetPopularProducts = ({
  queryConfig,
  input
}: UseGetPopularProductsParams = {}) => {
  return useQuery({
    ...getPopularProductsQueryOptions(input),
    ...queryConfig
  });
};
