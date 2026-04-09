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
import Link from "next/link";
import { ArrowLeftIcon } from "lucide-react";

const CreateCategoryProductContent = () => {
  const { form, isPending, storeCategory } = useCreate();
  return (
    <div className="flex flex-col gap-12 min-h-screen items-center justify-center p-4">
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
      <div className="w-fit">
        <Link
          href="/dashboard/category"
          className="flex gap-2 items-center text-foreground/60 hover:text-secondary duration-300 transition-all "
        >
          <ArrowLeftIcon className="size-4 font-normal" />
          <p className="text-sm font-medium">Back to Category Dashboard</p>
        </Link>
      </div>
    </div>
  );
};

export default CreateCategoryProductContent;
