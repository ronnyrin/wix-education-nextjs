import { getWixClient } from '@app/hooks/useWixClientServer';
import Image from 'next/image';

export default async function New({ params }: any) {
  const wixClient = await getWixClient();
  const { items } = await wixClient.data.query({
    dataCollectionId: 'News',
    dataQuery: { filter: { slug: params.slug } },
  });
  const item = items![0];

  return (
    <div className="relative">
      <div className="w-full h-[400px] relative">
        <Image
          src="https://static.wixstatic.com/media/0b340f_0b4d1813105145bfa782ce1d7a379151~mv2_d_5760_3840_s_4_2.jpg/v1/fill/w_1920,h_492,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/0b340f_0b4d1813105145bfa782ce1d7a379151~mv2_d_5760_3840_s_4_2.jpg"
          fill={true}
          alt={item.title}
          sizes="100vw"
          style={{
            objectFit: 'cover',
          }}
        />
      </div>
      <div className="max-w-7xl mx-auto mt-[-120px] relative bg-white px-20 text-center">
        <h1 className="py-8 font-site">{item.title}</h1>
        <p className="py-6 max-w-3xl text-lg mx-auto">
          {item.short_description}
        </p>
        <div className="relative h-[400px]">
          <Image
            src={item.image}
            fill={true}
            alt={item.title}
            sizes="100vw"
            style={{
              objectFit: 'contain',
            }}
          />
        </div>
        <p className="py-6 max-w-3xl text-sm mx-auto">
          {item.long_description}
        </p>
      </div>
    </div>
  );
}
