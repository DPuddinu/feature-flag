import { db } from './db';
import { Movies } from './schema';

const result = await db.select().from(Movies);
console.log(result);
