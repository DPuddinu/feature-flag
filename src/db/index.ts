import { db } from './db';
import { Environments } from './schema';

const result = await db.select().from(Environments);
console.log(result);
