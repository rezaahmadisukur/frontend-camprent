import { Button } from "~/components/ui/button";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel
} from "~/components/ui/field";
import { Input } from "~/components/ui/input";
import { Controller } from "react-hook-form";
import useLoginForm from "../hooks/useLoginForm";

const Login = () => {
  const { form, login } = useLoginForm();
  return (
    <form onSubmit={form.handleSubmit(login)}>
      <FieldGroup>
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
        <Field>
          <Button type="submit" variant="secondary" className="cursor-pointer">
            Login
          </Button>
        </Field>
      </FieldGroup>
    </form>
  );
};

export default Login;
