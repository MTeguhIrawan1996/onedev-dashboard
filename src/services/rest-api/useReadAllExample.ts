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
    `http://localhost:3004/books?_page=${page}&_limit=${limit}&q=${search}`,
    { next: { revalidate: 1200, tags: ['example'] } },
  );
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }
  const data: IExampleResponse[] = await res.json();
  return data;
}
