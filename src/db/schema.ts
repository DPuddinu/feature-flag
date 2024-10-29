import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

export const Environments = sqliteTable('environments', {
  id: integer('id').primaryKey(),
  name: text('name')
});

export const Features = sqliteTable('features', {
  id: integer('id').primaryKey(),
  environmentId: integer('feature_id').references(() => Environments.id),
  name: text('version')
});