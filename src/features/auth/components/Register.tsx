import { Button } from "~/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel
} from "~/components/ui/field";
import { Input } from "~/components/ui/input";
import { Controller } from "react-hook-form";
import useRegisterForm from "../hooks/useRegisterForm";
import Link from "next/link";
import { Activity } from "react";
import { Spinner } from "~/components/ui/spinner";

const Register = () => {
  const { form, register, isPending } = useRegisterForm();
  return (
    <form onSubmit={form.handleSubmit(register)}>
      <FieldGroup>
        <Controller
          name="name"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name}>Full Name</FieldLabel>
              <Input
                id={field.name}
                type="text"
                placeholder="John Doe"
                aria-invalid={fieldState.invalid}
                {...field}
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          name="email"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name}>Email</FieldLabel>
              <Input
                id={field.name}
                type="email"
                placeholder="m@example.com"
                aria-invalid={fieldState.invalid}
                {...field}
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          name="password"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name}>Password</FieldLabel>
              <Input
                id={field.name}
                type="password"
                placeholder="********"
                aria-invalid={fieldState.invalid}
                {...field}
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          name="confirmPassword"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name}>Confirm Password</FieldLabel>
              <Input
                id={field.name}
                type="password"
                placeholder="********"
                aria-invalid={fieldState.invalid}
                {...field}
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <FieldGroup>
          <Field>
            <Button
              variant="secondary"
              type="submit"
              className="cursor-pointer"
              disabled={isPending}
            >
              <Activity mode={isPending ? "visible" : "hidden"}>
                <Spinner />
              </Activity>
              Create Account
            </Button>
          </Field>
        </FieldGroup>
      </FieldGroup>
    </form>
  );
};

export default Register;
