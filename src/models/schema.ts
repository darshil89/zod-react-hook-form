
import { FormDataSchema } from "@/lib/types";
import { z, ZodType } from "zod";


export const schema: ZodType<FormDataSchema> = z
    .object({
        firstName: z.string().min(2, "min length should be 2").max(30),
        lastName: z.string().min(2, "min length should be 2").max(30),
        email: z.string().email(),
        age: z.number().min(18).max(70),
        password: z.string().min(8).max(100),
        confirmPassword: z.string().min(8).max(100),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords do not match",
        path: ["confirmPassword"],
    })
    .refine(
        (data) => {
            if (typeof data.email === "string") {
                return data.email.endsWith("@gmail.com");
            }
            return false;
        },
        {
            message: "Your email should be gmail",
            path: ["email"],
        }
    );