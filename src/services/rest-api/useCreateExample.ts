/* eslint-disable no-console */
import { useMutation } from '@tanstack/react-query';

export type ExampelValues = {
  title: string;
  author: string;
};

const mutationExample = async ({ title, author }: ExampelValues) => {
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
}: {
  onSuccess?: (success: any) => void;
  onError?: (error: Error) => unknown;
  // onMutate?:
}) => {
  return useMutation<any, Error, ExampelValues>({
    mutationKey: ['createExample'],
    mutationFn: async (props) => {
      const data = await mutationExample(props);
      return data;
    },

    onError,
    onSuccess,
  });
};
