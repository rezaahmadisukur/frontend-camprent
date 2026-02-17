import { ProductSortBy } from "../api/getBrowseProducts";

export const CATEGORY_LIST = [
  {
    label: "Tents"
  },
  {
    label: "Cooking Gear"
  },
  {
    label: "Backpacks"
  },
  {
    label: "Sleeping Gear"
  },
  {
    label: "Lighting"
  },
  {
    label: "Camp Furniture"
  }
];

export const SORT_BY_OPTIONS = [
  {
    label: "Recommended",
    value: ProductSortBy.RECOMMENDED
  },
  {
    label: "Price: Low to High",
    value: ProductSortBy.PRICE_ASC
  },
  {
    label: "Price: High to Low",
    value: ProductSortBy.PRICE_DESC
  }
];
