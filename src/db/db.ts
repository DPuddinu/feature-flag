import { drizzle } from 'drizzle-orm/bun-sqlite';
import { Database } from 'bun:sqlite';

const sqlite = new Database('./src/db/sqlite.db');
export const db = drizzle(sqlite);
