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
    const response = await fetch('http://localhost:3004/books', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(value),
    });
    return response;
  } catch (error: any) {
    return Promise.reject(error);
  }
};

export const useMutationExampel = ({
  onError,
  onSuccess,
}: {
  onSuccess?: (success: any) => void;
  onError?: (error: Error) => unknown;
}) => {
  return useMutation<any, Error, ExampelValues>({
    mutationFn: async (props) => {
      const data = await mutationExample(props);
      return data;
    },
    onError,
    onSuccess,
  });
};
