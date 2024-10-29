import { getFeaturesByEnv } from '@/db/queries/queries';

export default async function Home() {
  const featuresByEnv = await getFeaturesByEnv();
  return (
    <div className='p-4 space-y-4 font-[family-name:var(--font-geist-sans)]'>
      {featuresByEnv.map((feature) => (
        <div key={feature.id}>
          <div>{feature.name}</div>
        </div>
      ))}
    </div>
  );
}
