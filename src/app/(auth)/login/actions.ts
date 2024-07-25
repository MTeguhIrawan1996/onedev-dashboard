'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from 'zod';

import { createClient } from '@/utils/supabase/server';

const schema = z.object({
  email: z
    .string()
    .min(1, { message: 'Kolom tidak boleh kosong' })
    .email({ message: 'Format email salah' }),
  password: z.string().min(1, { message: 'Kolom tidak boleh kosong' }),
});

export async function emailLogin(formData: FormData) {
  const supabase = createClient();

  const validatedFields = schema.safeParse({
    email: formData.get('email'),
    password: formData.get('password'),
  });
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  };

  try {
    await supabase.auth.signInWithPassword(data);
    return {
      message: 'Success Login',
    };
  } catch (err) {
    return err;
  }
}

export async function signup(formData: FormData) {
  const supabase = createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  };

  const { error } = await supabase.auth.signUp(data);

  if (error) {
    redirect('/login?message=Error signing up');
  }

  revalidatePath('/overview', 'layout');
  redirect('/login');
}

export async function signout() {
  const supabase = createClient();

  await supabase.auth.signOut();
  redirect('/login');
}
