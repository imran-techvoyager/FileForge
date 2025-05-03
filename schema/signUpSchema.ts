import * as z from "zod";

export const signUpSchema = z.object({
    email: z.string()
            .min(1, {message: "Email is required"})
            .email({message: "please enter valid email formate"}),
    password: z.string()
               .min(1, {message: "password is required"})
               .min(8, {message: "minimum 8 characters required"}),
    passwordConfirmation: z.string()
                           .min(1, {message: "please confirm your password"}),   
 }) 
   .refine((data) => data.password === data.passwordConfirmation, {
    message: "password donot match",
    path:["passwordConfirmation"],
   });