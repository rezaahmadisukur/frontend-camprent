import { ProductSortBy } from "../api/getBrowseProducts";

export const CATEGORY_LIST = [
  {
    label: "Tents",
    value: "tents"
  },
  {
    label: "Cooking Gear",
    value: "cooking"
  },
  {
    label: "Backpacks",
    value: "backpacks"
  },
  {
    label: "Sleeping Gear",
    value: "sleeping"
  },
  {
    label: "Lighting",
    value: "lighting"
  },
  {
    label: "Camp Furniture",
    value: "furniture"
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
