'use server';

import { revalidateTag } from 'next/cache';

type IProps = {
  tag: 'example';
};

export default async function actionRevalidate({ tag }: IProps) {
  revalidateTag(tag);
}
