/* eslint-disable no-console */
import {
  onlineManager,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { v4 as uuidv4 } from 'uuid';

import { db } from '@/services/dexie/db';
import api from '@/services/rest-api/api';
import {
  exampleKeys,
  getBooksIndexDB,
  IExampleResponse,
  IRequest,
} from '@/services/rest-api/example/useReadAllExample';

export type ExampelValues = {
  title: string;
  author: string;
};

export const mutationExample = async ({ title, author }: ExampelValues) => {
  const value = {
    title,
    author,
    createdAt: new Date(),
  };

  const response = await api.post<any>('/api/v1/books', value, {});
  return response;
};

export const mutationExampleIndexDB = async ({
  title,
  author,
}: ExampelValues) => {
  try {
    // Add the new books!
    const res = await db.books.add({
      id: uuidv4(),
      title,
      author,
      createdAt: new Date().toISOString(),
    });
    return res;
  } catch (err) {
    return Promise.reject(err);
  }
};

const syncBooks = async () => {
  const delayMs = 10000;
  const books = await getBooksIndexDB();
  const syncedData: any = [];
  const failedBookIds: any = [];
  for (const book of books) {
    try {
      const data = await mutationExample(book);
      syncedData.push(data);
      // Menghapus data dari IndexedDB jika berhasil disinkronisasi
      await db.books.delete(book.id);
      await new Promise((resolve) => {
        setTimeout(resolve, delayMs);
      });
      console.log(`Book with id ${book.id} deleted from IndexedDB`);
    } catch (error) {
      console.error(`Failed to sync book with id ${book.id}: `, error);
      failedBookIds.push(book);
    }
  }
  if (failedBookIds.length > 0) {
    throw new Error(
      `Failed to sync books with IDs: ${failedBookIds.join(', ')}`,
    );
  }
  return syncedData;
};

export const useMutationExampel = ({
  onError,
  onSuccess,
  onMutate,
  qKeyProps,
}: {
  onSuccess?: (success: any) => void;
  onError?: (error: Error) => unknown;
  onMutate?: (v: any) => unknown;
  qKeyProps: Partial<IRequest>;
}) => {
  const queryClient = useQueryClient();

  return useMutation<any, AxiosError, ExampelValues>({
    mutationKey: exampleKeys.post(),
    networkMode: 'offlineFirst',
    mutationFn: async (props) => {
      if (!onlineManager.isOnline()) {
        const data = await mutationExampleIndexDB(props);
        return data;
      }
      const data = await mutationExample(props);
      return data;
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: exampleKeys.list({ ...qKeyProps }),
      });
    },
    onMutate: async (currentData) => {
      const tempId = uuidv4();
      const date = new Date().toISOString();
      const newCurrentData = {
        ...currentData,
        id: tempId,
        createdAt: date,
      };

      await queryClient.cancelQueries({
        queryKey: exampleKeys.list({ ...qKeyProps }),
      });
      const previousData: IExampleResponse[] | undefined =
        queryClient.getQueryData(exampleKeys.list({ ...qKeyProps }));
      queryClient.setQueryData(
        exampleKeys.list({ ...qKeyProps }),
        (previous: IExampleResponse[]) =>
          previous
            ? [
                ...previous,
                {
                  ...newCurrentData,

                  isTemporary: true,
                },
              ]
            : undefined,
      );
      onMutate?.(currentData);

      return { previousData, newCurrentData };
    },
    onError: async (error, __, context: any) => {
      queryClient.setQueryData(
        exampleKeys.list({ ...qKeyProps }),
        context.previousData,
      );
      onError?.(error);
    },
    onSuccess,
  });
};

export const useMutationExampelSync = ({
  onError,
  onSuccess,
  qKeyProps,
}: {
  onSuccess?: (success: any) => void;
  onError?: (error: Error) => unknown;
  qKeyProps: Partial<IRequest>;
}) => {
  const queryClient = useQueryClient();

  return useMutation<any, AxiosError>({
    mutationKey: exampleKeys.sync(),
    mutationFn: syncBooks,
    onError,
    onSuccess: (data) => {
      console.log(data);
      queryClient.invalidateQueries({
        queryKey: exampleKeys.list({ ...qKeyProps }),
      });
      onSuccess?.(data);
    },
  });
};
