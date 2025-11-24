import { z } from "zod";

export const signupSchema = z
  .object({
    name: z
      .string().nonempty("name is required")
      .min(3, { message: "name must at least three letters" })
      .max(20, { message: "name is to long" })
      .transform((s) => s.trim()),
    email: z.string().nonempty("email is required").email({ message: "invalid E-mail" }),
    password: z
      .string().nonempty("password is required")
      .min(6, { message: "password must be at least 6 letter" })
      .regex(/^[A-Z]{1}[a-z0-9]{6,}$/, {
        message: "password must start with uppercase",
      }),
    confirmPassword: z
      .string().nonempty("confirm password is required")
      .min(6, { message: "confirm password must be at least 6 letter" })
      .regex(/^[A-Z]{1}[a-z0-9]{6,}$/, {
        message: "confirm password must start with uppercase",
      }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type SignUpType = z.infer<typeof signupSchema>;
