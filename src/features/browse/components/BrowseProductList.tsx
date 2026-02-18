import ProductCard from "~/components/shared/ProductCard";
import { useGetBrowseProducts } from "../api/getBrowseProducts";
import useBrowseProductQueryParams from "../hooks/useBrowseProductQueryParams";

const BrowseProductList = () => {
  const { searchSortBy, searchCategory } = useBrowseProductQueryParams();
  const { data: products, isLoading } = useGetBrowseProducts({
    input: {
      limit: 4,
      sortBy: searchSortBy,
      categoryIds: searchCategory
    }
  });
  return (
    <div className="col-span-4 md:col-span-3 lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products?.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};

export default BrowseProductList;
