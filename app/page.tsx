import Image from 'next/image';
import { getWixClient } from '@app/hooks/useWixClientServer';

export default async function Home() {
  const wixClient = await getWixClient();
  const { items } = await wixClient.data.query({
    dataCollectionId: 'News-and-Updates-xp0faq',
  });

  return (
    <div className="mx-auto relative flex gap-3 p-20">
      {items!.map((item) => (
        <div key={item._id} className="p-4 border-2 bg-blue-800 text-white">
          <h1>{item.title}</h1>
          <Image src={item.image} width={500} height={500} alt="fdsfds" />
        </div>
      ))}
    </div>
  );
}
