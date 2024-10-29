import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

export const Movies = sqliteTable('movies', {
  id: integer('id').primaryKey(),
  title: text('name'),
  releaseYear: integer('release_year')
});
