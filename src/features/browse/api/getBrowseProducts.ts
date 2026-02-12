import { queryOptions, useQuery } from "@tanstack/react-query";
import { axiosInstance } from "~/lib/axios";
import { QueryConfig, queryConfig } from "../../../lib/react-query";

type GetBrowseProductsInput = {
  limit?: number;
};

type GetBrowseProductsResponse = {
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

export const getBrowseProducts = async (input?: GetBrowseProductsInput) => {
  const response = await axiosInstance.get<GetBrowseProductsResponse[]>(
    "/product",
    {
      params: input
    }
  );

  return response.data;
};

export const getBrowseProductsQueryKey = () => ["products"];

const getBrowseProductsQueryOptions = (input?: GetBrowseProductsInput) => {
  return queryOptions({
    queryKey: getBrowseProductsQueryKey(),
    queryFn: () => getBrowseProducts(input)
  });
};

type UseGetBrowseProductsParams = {
  queryConfig?: QueryConfig<typeof getBrowseProductsQueryOptions>;
  input?: GetBrowseProductsInput;
};

export const useGetBrowseProducts = ({
  queryConfig,
  input
}: UseGetBrowseProductsParams) => {
  return useQuery({
    ...getBrowseProductsQueryOptions(input),
    ...queryConfig
  });
};
