import { useQuery } from '@tanstack/react-query';

export type IExampleResponse = {
  createdAt: string;
  isTemporary: boolean;
  title: string;
  author: string;
  id: string;
};

export type IRequest = {
  page: number;
  limit: number;
  search: string;
};

export const exampleKeys = {
  all: () => ['example'],
  list: (props: Partial<IRequest>) => [...exampleKeys.all(), { ...props }],
  post: () => [...exampleKeys.all(), 'post'],
};

export async function getData({
  page = 1,
  limit = 10,
  search = '',
}: Partial<IRequest>): Promise<IExampleResponse[]> {
  const res = await fetch(
    `https://66724f8a6ca902ae11afcca9.mockapi.io/api/v1/books?page=${page}&limit=${limit}&search=${search}`,
    { next: { revalidate: 1200, tags: ['example'] } },
  );
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }
  const data: IExampleResponse[] = await res.json();
  return data;
}

export const readAllClientExample = async ({
  page = 1,
  limit = 10,
  search = '',
}: Partial<IRequest>): Promise<IExampleResponse[]> => {
  try {
    const response = await fetch(
      `https://66724f8a6ca902ae11afcca9.mockapi.io/api/v1/books?page=${page}&limit=${limit}&search=${search}`,
    );
    const data: IExampleResponse[] = await response.json();
    return data;
  } catch (error: any) {
    return Promise.reject(error);
  }
};

export const useReadAllClientExample = ({
  page = 1,
  limit = 10,
  search = '',
}: Partial<IRequest>) => {
  return useQuery<IExampleResponse[]>({
    queryKey: exampleKeys.list({ limit, page, search }),
    queryFn: async () => {
      const data = await readAllClientExample({ limit, page, search });
      return data;
    },
    select: (data) => {
      const newData: IExampleResponse[] = data.map((v) => {
        const newObj = {
          ...v,
          isTemporary: v.isTemporary ? v.isTemporary : false,
        };
        return newObj;
      });
      return newData;
    },
  });
};
