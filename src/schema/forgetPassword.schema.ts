import { z } from "zod";

export const forgetPasswordSchema = z.object({
  email: z
    .string()
    .nonempty("email is required")
    .email({ message: "invalid E-mail" }),
});

export type ForgetPasswordType = z.infer<typeof forgetPasswordSchema>;
