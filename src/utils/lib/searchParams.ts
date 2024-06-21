import {
  createSearchParamsCache,
  parseAsFloat,
  parseAsString,
} from 'nuqs/server';

export const examplesParsers = {
  l: parseAsFloat.withDefault(10),
  p: parseAsFloat.withDefault(1),
  search: parseAsString.withDefault(''),
};
export const examplesCache = createSearchParamsCache(examplesParsers);
