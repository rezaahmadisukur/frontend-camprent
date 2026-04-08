import * as z from "zod";

export const RegisterFormSchema = z
  .object({
    name: z.string().min(1, { message: "Fullname is required" }),
    email: z
      .string()
      .min(1, { message: "Email is required" })
      .email({ message: "Invalid email address" }),
    password: z.string().min(8, { message: "Min 8 character" }),
    confirmPassword: z.string().min(8, { message: "Min 8 character" })
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password don't match",
    path: ["confirmPassword"]
  });

export type TRegisterFormSchema = z.infer<typeof RegisterFormSchema>;
