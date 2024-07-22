import * as React from 'react';

import { LoginPage } from '@/components/features';

export default function Login() {
  // const supabase = createClient();
  // const login = async () => {
  //   try {
  //     const { data: useData } = await supabase.auth.signInWithPassword({
  //       email: data.email,
  //       password: data.password,
  //     });
  //     return useData;
  //   } catch (error) {
  //     return error;
  //   }
  // };

  // const handleChange = (e: any) => {
  //   const { name, value } = e.currentTarget;
  //   setData((prev: any) => ({
  //     ...prev,
  //     [name]: value,
  //   }));
  // };
  return <LoginPage />;
}
