import { queryOptions, useQuery } from "@tanstack/react-query";
import { axiosInstance } from "~/lib/axios";
import { QueryConfig } from "../../../lib/react-query";

type GetProductByIdInput = {
  id: string;
};

type GetProductByIdResponse = {
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

export const getProductById = async (input: GetProductByIdInput) => {
  const response = await axiosInstance.get<GetProductByIdResponse>(
    `/product/${input.id}`
  );
  return response.data;
};

export const getProductByIdQueryKey = (id: string) => ["product", id];

export const getProductByIdQueryOptions = (input: GetProductByIdInput) => {
  return queryOptions({
    queryKey: getProductByIdQueryKey(input.id),
    queryFn: () => getProductById(input)
  });
};

type UseGetProductById = {
  queryConfig?: QueryConfig<typeof getProductByIdQueryOptions>;
  input: GetProductByIdInput;
};

export const useGetProductById = ({
  queryConfig,
  input
}: UseGetProductById) => {
  return useQuery({
    ...getProductByIdQueryOptions(input),
    ...queryConfig
  });
};
