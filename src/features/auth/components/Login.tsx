import { Button } from "~/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel
} from "~/components/ui/field";
import { Input } from "~/components/ui/input";
// import { Controller } from "react-hook-form";

const Login = () => {
  return (
    <form>
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input id="email" type="email" placeholder="m@example.com" required />
        </Field>
        <Field>
          <FieldLabel htmlFor="password">Password</FieldLabel>
          <Input id="password" type="password" required />
        </Field>
        <Field>
          <Button type="submit">Login</Button>
          <FieldDescription className="text-center">
            Don&apos;t have an account? <a href="#">Sign up</a>
          </FieldDescription>
        </Field>
      </FieldGroup>
    </form>
  );
};

export default Login;
