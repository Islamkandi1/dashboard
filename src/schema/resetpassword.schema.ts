import { z } from "zod";

export const resetPasswordSchema = z
  .object({
    password: z
      .string()
      .nonempty("password is required")
      .min(6, { message: "password must be at least 6 letter" })
      .regex(/^[A-Z]{1}[a-z0-9]{6,}$/, {
        message: "password must start with uppercase",
      }),
  })

export type ResetPasswordType = z.infer<typeof resetPasswordSchema>;
