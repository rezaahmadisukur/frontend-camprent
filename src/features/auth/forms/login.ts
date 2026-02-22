import * as z from "zod";

export const LoginFormSchema = z.object({
  email: z.string().min(1, { message: "Email is required" }).email(),
  password: z.string().min(8, { message: "Password must be 8 characters" })
});

export type TLoginFormSchema = z.infer<typeof LoginFormSchema>;
