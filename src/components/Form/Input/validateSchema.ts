import { z } from 'zod';

export const Schema = z.object({
  name: z.string().min(1, { message: 'This field is required' }),
  email: z.string().min(1, { message: 'This field is required' }).email({
    message: 'Invalid email.'
  }),
  phone: z.string().min(1, { message: 'This field is required' })
});

export type RuleProps = z.infer<typeof Schema>;
