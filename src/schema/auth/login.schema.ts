import { z } from "zod";

const loginSchema = z.object({
  email: z.string().email({
    message: "Please enter your email",
  }),
  password: z.string().min(1)
});
