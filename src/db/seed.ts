import { db } from './db';
import { Environments, Features } from './schema';

await db.insert(Environments).values([
  {
    id: 1,
    name: 'australia'
  },
  {
    id: 2,
    name: 'italy'
  }
]);

await db.insert(Features).values([
  {
    environmentId: 1,
    name: 'hidden-menu'
  },
  {
    environmentId: 1,
    name: 'bg-red'
  },
  {
    environmentId: 2,
    name: 'bg-blue'
  }
]);
console.log(`Seeding complete.`);
