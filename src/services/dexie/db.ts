import Dexie, { type EntityTable } from 'dexie';

interface IDxBooks {
  id: number;
  title: string;
  author: string;
  createdAt: string;
}

const db = new Dexie('BooksDatabase') as Dexie & {
  books: EntityTable<
    IDxBooks,
    'id' // primary key "id" (for the typings only)
  >;
};

// Schema declaration:
db.version(1).stores({
  books: '++id, title, author, createdAt', // primary key "id" (for the runtime!)
});

export type { IDxBooks };
export { db };
