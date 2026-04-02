import { z } from 'zod'

export const loginSchema = z.object({
  email: z.email({ message: 'Enter a valid email address.' }),
  password: z
    .string()
    .min(1, 'Enter your password.')
    .min(8, 'Password must be at least 8 characters.'),
  remember: z.boolean().default(false),
})

export type LoginFormInput = z.input<typeof loginSchema>
export type LoginFormValues = z.infer<typeof loginSchema>
