import { SignUpWithPasswordCredentials } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

import { createClient } from '@/utils/supabase/server';

export async function POST(request: Request) {
  const supabase = createClient();
  const url = new URL(request.url);

  const formData = await request.formData();
  const data: SignUpWithPasswordCredentials = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
    options: {
      emailRedirectTo: `${url.origin}/auth/callback`,
    },
  };

  await supabase.auth.signUp(data);

  return NextResponse.redirect(url.origin, {
    status: 301,
  });
}
