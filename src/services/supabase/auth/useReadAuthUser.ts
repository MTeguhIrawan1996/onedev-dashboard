import { User } from '@supabase/supabase-js';
import { useQuery } from '@tanstack/react-query';

import { createClient } from '@/utils/supabase/client';

export type IExampleResponse = {
  id: string;
  title: string;
  author: string;
  createdAt: string;
  isTemporary: boolean;
};

export const userKeys = {
  read: () => ['user'],
};

export const readAuthUser = async () => {
  const supabase = createClient();
  try {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    return user;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const useReadAuthUser = () => {
  return useQuery<User | null>({
    queryKey: userKeys.read(),
    queryFn: async () => {
      const res = await readAuthUser();
      return res;
    },
  });
};
