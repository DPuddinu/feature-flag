import { db } from '@db/db';
import { Movies } from '../db/schema';

export default async function Home() {
  const result = await db.select().from(Movies);
  return (
    <div className='p-4 space-y-4 font-[family-name:var(--font-geist-sans)]'>
      {result.map((movie) => (
        <div key={movie.id}>{movie.title}</div>
      ))}
    </div>
  );
}
