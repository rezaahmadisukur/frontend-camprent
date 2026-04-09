"use client";

import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import { Search, Plus, Edit, Trash2 } from "lucide-react";
import Link from "next/link";
import { useGetProductCategories } from "../api/getCategory";
import { Activity } from "react";

const DashboardCategoryContent = () => {
  const { data: categories } = useGetProductCategories();
  return (
    <div className="min-h-screen mt-10">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Category Dashboard</h1>
          <Link href={"/dashboard/category/create"}>
            <Button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 cursor-pointer">
              <Plus className="h-4 w-4" />
              Create New Category
            </Button>
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex gap-4 mb-6">
            <div className="relative flex-1">
              <Input
                type="text"
                placeholder="Search categories..."
                className="pl-10"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            </div>
            <Button
              variant="outline"
              className="flex items-center gap-2 cursor-pointer"
            >
              <Search className="h-4 w-4" />
              Search
            </Button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="border border-gray-200 px-4 py-2 text-left text-sm font-semibold text-gray-700">
                    No.
                  </th>
                  <th className="border border-gray-200 px-4 py-2 text-left text-sm font-semibold text-gray-700">
                    Name Category
                  </th>
                  <th className="border border-gray-200 px-4 py-2 text-left text-sm font-semibold text-gray-700">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                <Activity mode={categories ? "visible" : "hidden"}>
                  {categories?.map((category, index) => (
                    <tr key={category.id} className="hover:bg-gray-50">
                      <td className="border border-gray-200 px-4 py-3 text-sm">
                        {index + 1}
                      </td>
                      <td className="border border-gray-200 px-4 py-3 text-sm capitalize">
                        {category.name}
                      </td>
                      <td className="border border-gray-200 px-4 py-3 text-sm">
                        <div className="flex gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            className="flex items-center gap-1 text-blue-600 border-blue-600 hover:bg-blue-50"
                          >
                            <Edit className="h-3 w-3" />
                            Edit
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="flex items-center gap-1 text-red-600 border-red-600 hover:bg-red-50"
                          >
                            <Trash2 className="h-3 w-3" />
                            Delete
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </Activity>

                <Activity mode={categories!.length <= 0 ? "visible" : "hidden"}>
                  <tr>
                    <td
                      colSpan={3}
                      className="border border-gray-200 px-4 py-8 text-center text-gray-500"
                    >
                      No categories found
                    </td>
                  </tr>
                </Activity>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardCategoryContent;
