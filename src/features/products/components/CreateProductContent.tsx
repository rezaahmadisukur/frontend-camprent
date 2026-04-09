"use client";

import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel
} from "~/components/ui/field";
import useCreate from "../hooks/useCreate";
import { Input } from "~/components/ui/input";
import { Activity } from "react";
import { Button } from "~/components/ui/button";
import { Spinner } from "~/components/ui/spinner";
import { Controller } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "~/components/ui/select";
import { useGetProductCategories } from "../../category/api/getCategory";

const CreateProductContent = () => {
  const { data: categories } = useGetProductCategories();
  const { form, isPending, store } = useCreate();
  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <div className="w-full max-w-lg rounded-lg border bg-white p-6 shadow-md">
        <form onSubmit={form.handleSubmit(store)}>
          <FieldGroup>
            {/* Product Name */}
            <Controller
              name="name"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name}>Product Name</FieldLabel>
                  <Input
                    id={field.name}
                    type="text"
                    placeholder="Ex: Nike Air Jordan"
                    aria-invalid={fieldState.invalid}
                    {...field}
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            {/* Description (Optional) */}
            <Controller
              name="description"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name}>Description</FieldLabel>
                  <Input
                    id={field.name}
                    type="text"
                    placeholder="Tell more about the product..."
                    aria-invalid={fieldState.invalid}
                    {...field}
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            {/* Price & Stock dalam satu baris Group jika diinginkan */}
            <div className="grid grid-cols-2 gap-4">
              <Controller
                name="price"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor={field.name}>Price</FieldLabel>
                    <Input
                      id={field.name}
                      type="number"
                      placeholder="150000"
                      aria-invalid={fieldState.invalid}
                      {...field}
                      value={(field.value as number) ?? ""}
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />

              <Controller
                name="stock"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor={field.name}>Stock</FieldLabel>
                    <Input
                      id={field.name}
                      type="number"
                      placeholder="10"
                      aria-invalid={fieldState.invalid}
                      {...field}
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
            </div>

            {/* Category ID - Kamu bisa ganti Input jadi Select jika sudah ada komponennya
            <Controller
              name="categoryId"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name}>Category ID</FieldLabel>
                  <Input
                    id={field.name}
                    type="text"
                    placeholder="Put category id here"
                    aria-invalid={fieldState.invalid}
                    {...field}
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            /> */}

            <Controller
              name="categoryId"
              control={form.control}
              render={({ field, fieldState }) => (
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {categories?.map((category, index) => (
                        <SelectItem
                          key={index}
                          value={category.name.toUpperCase()}
                          className="capitalize"
                        >
                          {category.name}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              )}
            />

            {/* Image Upload (Wadahnya pake name imageUrl sesuai schema) */}
            <Controller
              name="imageUrl"
              control={form.control}
              render={({
                field: { value, onChange, ...field },
                fieldState
              }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="imageUrl">
                    Product Image (Cover)
                  </FieldLabel>
                  <Input
                    id="imageUrl"
                    type="file"
                    accept="image/*"
                    className="cursor-pointer"
                    aria-invalid={fieldState.invalid}
                    {...field}
                    // Handle manual onChange untuk file agar masuk ke state form
                    onChange={(e) => onChange(e.target.files)}
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <FieldGroup>
              <Field>
                <Button
                  variant="secondary"
                  type="submit"
                  className="w-full cursor-pointer"
                  disabled={isPending}
                >
                  <Activity mode={isPending ? "visible" : "hidden"}>
                    <Spinner />
                  </Activity>
                  Save Product
                </Button>
              </Field>
            </FieldGroup>
          </FieldGroup>
        </form>
      </div>
    </div>
  );
};

export default CreateProductContent;
