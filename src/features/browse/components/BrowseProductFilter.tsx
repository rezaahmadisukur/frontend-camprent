"use client";

import { SlidersHorizontalIcon } from "lucide-react";
import { Checkbox } from "~/components/ui/checkbox";
import { Field, FieldGroup, FieldLabel } from "~/components/ui/field";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "~/components/ui/select";
import useBrowseProductQueryParams from "../hooks/useBrowseProductQueryParams";
import { ProductSortBy } from "../api/getBrowseProducts";
import { useGetBrowseCategories } from "../api/getBrowseCategories";

// type categories = {
//   label: string;
//   value: string;
// };

type options = {
  label: string;
  value: ProductSortBy;
};

type TProps = {
  // categories: categories[];
  options: options[];
};

const BrowseProductFilter = (props: TProps) => {
  const { data: categories } = useGetBrowseCategories();
  const { searchCategory, setSearchCategory, searchSortBy, setSearchSortBy } =
    useBrowseProductQueryParams();

  const handleCategoryChange = (category: string) => {
    if (searchCategory.includes(category)) {
      const newCategories = searchCategory.filter((c) => c !== category);
      if (newCategories.length <= 0) {
        setSearchCategory(null, {
          shallow: true
        });
        return false;
      }
      setSearchCategory(newCategories, {
        shallow: true
      });
    } else {
      setSearchCategory(
        searchCategory ? [...searchCategory, category] : [category],
        {
          shallow: true
        }
      );
    }
  };

  return (
    <aside className="col-span-1 bg-background border border-foreground/20 py-8 px-4 shadow-sm rounded-2xl h-fit">
      <div className="flex items-center gap-2">
        <SlidersHorizontalIcon className="size-6 text-secondary" />
        <h1 className="text-lg font-semibold">Filters</h1>
      </div>
      {/* Categories */}
      <div className="mt-8">
        <h1 className="select-none text-md text-foreground/40 font-semibold uppercase">
          Category
        </h1>
        <div className="space-y-4 mt-4">
          {categories?.map((category) => (
            <FieldGroup key={`${category.name}-${category.id}`}>
              <Field orientation="horizontal" className="flex items-center">
                <Checkbox
                  id={category.name}
                  name={category.name}
                  onCheckedChange={() => handleCategoryChange(category.name)}
                />
                <FieldLabel htmlFor={category.name} className="capitalize">
                  {category.name}
                </FieldLabel>
              </Field>
            </FieldGroup>
          ))}
        </div>
      </div>
      {/* Select Price */}
      <div className="mt-8">
        <h1 className="select-none text-md text-foreground/40 font-semibold uppercase">
          Sort By
        </h1>
        <Select
          value={searchSortBy}
          onValueChange={(value) => setSearchSortBy(value as ProductSortBy)}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select a sort option" />
          </SelectTrigger>

          <SelectContent>
            {props.options.map((option, index) => (
              <SelectItem key={`${option.value}-${index}`} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </aside>
  );
};

export default BrowseProductFilter;
