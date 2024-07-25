import { z } from 'zod';

import {
  zEmailValidation,
  zPasswordValidation,
} from '@/utils/validation/common';

export const loginSchemaValidation = z.object({
  email: zEmailValidation,
  password: zPasswordValidation,
});

export type ILoginTypeSchema = z.infer<typeof loginSchemaValidation>;
