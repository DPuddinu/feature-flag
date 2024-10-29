import { eq } from 'drizzle-orm';
import { db } from '../db';
import { Features } from '../schema';

export const getFeaturesByEnv = async () =>
  db
    .select()
    .from(Features)
    .where(eq(Features.environmentId, Number(Bun.env.ENV_ID)));
