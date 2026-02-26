import { queryOptions, useQuery } from "@tanstack/react-query";
import { axiosInstance } from "~/lib/axios";
import { QueryConfig } from "../../../lib/react-query";

export enum ProductSortBy {
  RECOMMENDED = "recommended",
  PRICE_ASC = "price-asc",
  PRICE_DESC = "price-desc"
}

type GetBrowseProductsInput = {
  limit?: number;
  productName?: string;
  sortBy?: string | null;
  categoryIds?: string[];
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

export const getBrowseProducts = async (
  input?: GetBrowseProductsInput
): Promise<GetBrowseProductsResponse[]> => {
  const response = await axiosInstance.post<GetBrowseProductsResponse[]>(
    "/product/browse",
    input
  );

  console.log(response.data);

  return response.data;
};

export const getBrowseProductsQueryKey = (input?: GetBrowseProductsInput) => [
  "products-browse",
  input
];

const getBrowseProductsQueryOptions = (input?: GetBrowseProductsInput) => {
  return queryOptions({
    queryKey: getBrowseProductsQueryKey(input),
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
