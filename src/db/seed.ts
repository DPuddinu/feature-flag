import { db } from './db';
import { Movies } from './schema';

await db.insert(Movies).values([
  {
    title: 'The Matrix',
    releaseYear: 1999
  },
  {
    title: 'The Matrix Reloaded',
    releaseYear: 2003
  },
  {
    title: 'The Matrix Revolutions',
    releaseYear: 2003
  }
]);

console.log(`Seeding complete.`);
