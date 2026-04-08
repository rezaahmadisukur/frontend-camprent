"use client";

import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel
} from "~/components/ui/field";
import useCreate from "../hooks/useCreate";
import { Controller } from "react-hook-form";
import { Button } from "~/components/ui/button";
import { Activity } from "react";
import { Spinner } from "~/components/ui/spinner";
import { Input } from "~/components/ui/input";

const CreateCategoryProductContent = () => {
  const { form, isPending, storeCategory } = useCreate();
  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <div className="w-full max-w-lg rounded-lg border bg-white p-6 shadow-md">
        <form onSubmit={form.handleSubmit(storeCategory)}>
          <FieldGroup>
            {/* Product Name */}
            <Controller
              name="name"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name}>Category Name</FieldLabel>
                  <Input
                    id={field.name}
                    type="text"
                    placeholder="Enter your category name"
                    aria-invalid={fieldState.invalid}
                    {...field}
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
                  Save Category
                </Button>
              </Field>
            </FieldGroup>
          </FieldGroup>
        </form>
      </div>
    </div>
  );
};

export default CreateCategoryProductContent;
