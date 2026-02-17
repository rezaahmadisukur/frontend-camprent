"use client";

import HeaderBrowse from "../components/HeaderBrowse";
import ProductFilter from "../components/BrowseProductFilter";
import { CATEGORY_LIST, SORT_BY_OPTIONS } from "../constants/browse.contant";
import BrowseProductList from "../components/BrowseProductList";

const BrowsePage = () => {
  return (
    <div>
      <HeaderBrowse />

      <div className="bg-secondary/10 py-20 px-15">
        <div className="max-w-7xl 7xl:container mx-auto grid grid-cols-4 gap-6">
          {/* Filter */}
          <ProductFilter categories={CATEGORY_LIST} options={SORT_BY_OPTIONS} />
          {/* Product List */}
          <BrowseProductList />
        </div>
      </div>
    </div>
  );
};

export default BrowsePage;
