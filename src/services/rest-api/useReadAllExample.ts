export type IExampleResponse = {
  createdAt: string;
  title: string;
  author: string;
  id: string;
};

type IRequest = {
  page: number;
  limit: number;
  search: string;
};

export async function getData({
  page = 1,
  limit = 10,
  search = '',
}: Partial<IRequest>): Promise<IExampleResponse[]> {
  const res = await fetch(
    `https://66724f8a6ca902ae11afcca9.mockapi.io/api/v1/books?page=${page}&limit=${limit}&search=${search}`,
    { next: { revalidate: 3600 } },
  );
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }
  const data: IExampleResponse[] = await res.json();
  return data;
}
