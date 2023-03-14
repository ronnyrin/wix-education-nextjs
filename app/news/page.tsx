import Image from 'next/image';
import { getWixClient } from '@app/hooks/useWixClientServer';
import { formatDate } from '@app/utils/date-formatter';
export default async function News() {
  const wixClient = await getWixClient();
  const { items } = await wixClient.data.query({
    dataCollectionId: 'News',
  });

  return (
    <div className="relative">
      <div className="w-full h-[400px] relative">
        <Image
          src="https://static.wixstatic.com/media/0b340f_0b4d1813105145bfa782ce1d7a379151~mv2_d_5760_3840_s_4_2.jpg/v1/fill/w_1920,h_492,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/0b340f_0b4d1813105145bfa782ce1d7a379151~mv2_d_5760_3840_s_4_2.jpg"
          fill={true}
          alt="news"
          sizes="100vw"
          style={{
            objectFit: 'cover',
          }}
        />
      </div>
      <div className="max-w-7xl mx-auto mt-[-120px] relative bg-white px-20">
        <h1 className="text-center py-8 text-blue-800">News & Updates</h1>
        <p className="pt-6 max-w-3xl text-sm text-center mx-auto">
          I am a paragraph. Click here to add your own text and edit me. It’s
          easy. Just click “Edit Text” or double click me to add your own
          content and make changes to the font.
        </p>
        <div className="grid sm:grid-cols-3 gap-7 grid-flow-row mt-10">
          {items!.map((item) => (
            <div key={item._id} className="relative border">
              <div className="h-[320px] relative">
                <Image
                  src={item.image}
                  fill={true}
                  alt={item.title}
                  sizes="100vw"
                  style={{
                    objectFit: 'cover',
                  }}
                />
                <span className="bg-blue-700 text-white px-6 py-2 absolute bottom-[-20px]">
                  {formatDate(new Date(item.date))}
                </span>
              </div>
              <div className="bg-white relative mt-10 px-8 pb-10">
                <h2 className="mb-10">{item.title}</h2>
                <p className="text-sm mb-6">{item.short_description}</p>
                <a href={`/news/${item.slug}`} className="text-purple-700 py-6">
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
