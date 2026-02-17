import { queryOptions, useQuery } from "@tanstack/react-query";
import { axiosInstance } from "~/lib/axios";
import { QueryConfig } from "~/lib/react-query";
import { queryConfig } from "../../../lib/react-query";

type GetBrowseCategoriesInput = {
  limit?: number;
};

type GetBrowseCategoriesResponse = {
  id: string;
  name: string;
};

export const getBrowseCategories = async (input?: GetBrowseCategoriesInput) => {
  const response = await axiosInstance.get<GetBrowseCategoriesResponse[]>(
    "/category",
    {
      params: input
    }
  );

  return response.data;
};

export const getBrowseCategoriesQueryKey = () => ["browse-categories"];

const getBrowseCategoriesQueryOptions = (input?: GetBrowseCategoriesInput) => {
  return queryOptions({
    queryKey: getBrowseCategoriesQueryKey(),
    queryFn: () => getBrowseCategories(input)
  });
};

type UseGetBrowseCategoriesParams = {
  queryConfig?: QueryConfig<typeof getBrowseCategoriesQueryOptions>;
  input?: GetBrowseCategoriesInput;
};

export const useGetBrowseCategories = ({
  queryConfig,
  input
}: UseGetBrowseCategoriesParams = {}) => {
  return useQuery({
    ...getBrowseCategoriesQueryOptions(input),
    ...queryConfig
  });
};
