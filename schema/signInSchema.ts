import * as z from "zod";

 const signInSchema = z.object({
    identifier: z.string()
            .min(1, {message: "Email is required"})
            .email({message: "please enter valid email formate"}),
    password: z.string()
               .min(1, {message: "password is required"})
               .min(8, {message: "minimum 8 characters required"}),
 });