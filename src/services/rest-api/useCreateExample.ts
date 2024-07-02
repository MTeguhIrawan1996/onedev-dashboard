/* eslint-disable no-console */
import { useMutation, useQueryClient } from '@tanstack/react-query';

import {
  exampleKeys,
  IExampleResponse,
  IRequest,
} from '@/services/rest-api/useReadAllExample';

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

  try {
    const response = await fetch(
      'https://66724f8a6ca902ae11afcca9.mockapi.io/api/v1/books',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(value),
      },
    );
    return response;
  } catch (error: any) {
    console.log(error);
    return Promise.reject(error);
  }
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

  return useMutation<any, Error, ExampelValues>({
    mutationKey: exampleKeys.post(),
    mutationFn: async (props) => {
      const data = await mutationExample(props);
      return data;
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: exampleKeys.list({ ...qKeyProps }),
      });
    },
    onMutate: async (currentData) => {
      const tempId = Date.now().toString();
      const date = new Date().toISOString();

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
                  ...currentData,
                  id: tempId,
                  isTemporary: true,
                  createdAt: date,
                },
              ]
            : undefined,
      );
      onMutate?.(currentData);

      return { previousData };
    },
    onError: (er, __, context: any) => {
      queryClient.setQueryData(
        exampleKeys.list({ ...qKeyProps }),
        context.previousData,
      );
      onError?.(er);
    },
    onSuccess,
  });
};
