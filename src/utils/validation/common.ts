import { z } from 'zod';

export const zEmailValidation = z
  .string()
  .min(1, { message: 'Kolom tidak boleh kosong' })
  .email({ message: 'Format email salah' });

export const zPasswordValidation = z
  .string()
  .min(8, { message: 'Kata sandi minimal 8 karakter' })
  .regex(/^(?=.*[A-Z])(?=.*[0-9])[A-Za-z0-9]*$/, {
    message: 'Format kata sandi salah',
  });
