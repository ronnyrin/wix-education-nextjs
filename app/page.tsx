import Image from 'next/image';

export default function Home() {
  return (
    <div className="mx-auto relative p-20">
      <div className="text-center w-full relative">
        <video autoPlay muted loop className="w-full">
          <source
            src="https://video.wixstatic.com/video/0b340f_b4aaabafff194cf6ac9ee5511f58099d/720p/mp4/file.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute top-2/4 left-2/4 text-white translate-y-[-50%] translate-x-[-50%] font-extrabold">
          <h2 className="text-4xl">FREE & ACCESSIBLE</h2>
          <h1 className="text-7xl">EDUCATION FOR ALL</h1>
        </div>
        <div className="flex relative bg-white mt-[-55px] mx-10 border-t-4 border-blue-700">
          <h3 className="flex-1 text-3xl py-4 px-8 text-left">
            Take action to help us grow
          </h3>
          <a href="/contact" className="btn-main text-2xl p-8">
            DONATE
          </a>
        </div>
      </div>

      <div className="flex mt-32 gap-12">
        <div className="basis-1/3">
          <div className="h-[370px] relative">
            <Image
              src="https://static.wixstatic.com/media/0b340f_d146a1cff38b4503ae5e6ccc9aa86368~mv2_d_5184_3456_s_4_2.jpg/v1/fill/w_434,h_460,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/0b340f_d146a1cff38b4503ae5e6ccc9aa86368~mv2_d_5184_3456_s_4_2.jpg"
              fill={true}
              alt="fdsfds"
              sizes="100vw"
              style={{
                objectFit: 'cover',
              }}
            />
          </div>
          <div className="border-y-2 border-blue-700 p-8 w-60 relative bg-white mt-[-300px]">
            <h3 className="text-2xl font-bold">Our Initiatives</h3>
            <p className="my-6 text-sm">
              I am a paragraph. Click here to add your own text and edit me.
              It’s easy. Just click “Edit Text” or double click me to add your
              own content and make changes to the font.
            </p>
            <a href="/projects" className="text-purple-700 py-6">
              Read More
            </a>
          </div>
        </div>
        <div className="basis-2/3">
          <div className="h-[370px] relative">
            <Image
              src="https://static.wixstatic.com/media/0b340f_c407b331d71449afa40b30f6efb200aa~mv2_d_5580_4160_s_4_2.jpg/v1/fill/w_615,h_460,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/0b340f_c407b331d71449afa40b30f6efb200aa~mv2_d_5580_4160_s_4_2.jpg"
              fill={true}
              alt="fdsfds"
              sizes="100vw"
              style={{
                objectFit: 'cover',
              }}
            />
          </div>
          <div className="border-y-2 border-blue-700 p-8 w-60 relative bg-white ml-32 mt-[-430px]">
            <h3 className="text-2xl font-bold">Our Mission</h3>
            <p className="my-6 text-sm">
              I am a paragraph. Click here to add your own text and edit me.
              It’s easy. Just click “Edit Text” or double click me to add your
              own content and make changes to the font.
            </p>
            <a href="/about" className="text-purple-700 py-6">
              Read More
            </a>
          </div>
        </div>
      </div>
      <div className="flex mt-32 mb-12 gap-12">
        <div className="basis-2/3">
          <div className="h-[470px] relative">
            <Image
              src="https://static.wixstatic.com/media/0b340f_0b4d1813105145bfa782ce1d7a379151~mv2_d_5760_3840_s_4_2.jpg/v1/fill/w_682,h_568,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/0b340f_0b4d1813105145bfa782ce1d7a379151~mv2_d_5760_3840_s_4_2.jpg"
              fill={true}
              alt="fdsfds"
              sizes="100vw"
              style={{
                objectFit: 'cover',
              }}
            />
          </div>
          <div className="border-y-2 border-blue-700 p-8 w-60 relative bg-white ml-44 mt-[-200px]">
            <h3 className="text-2xl font-bold">Recent News</h3>
            <p className="my-6 text-sm">
              I am a paragraph. Click here to add your own text and edit me.
              It’s easy. Just click “Edit Text” or double click me to add your
              own content and make changes to the font.
            </p>
            <a href="/news" className="text-purple-700 py-6">
              Read More
            </a>
          </div>
        </div>
        <div className="basis-1/3">
          <div className="h-[470px] relative">
            <Image
              src="https://static.wixstatic.com/media/0b340f_a075ec7cf76b4b479b4b482e44a88c43~mv2_d_3840_5760_s_4_2.jpg/v1/fill/w_486,h_568,al_tr,q_80,usm_0.66_1.00_0.01,enc_auto/0b340f_a075ec7cf76b4b479b4b482e44a88c43~mv2_d_3840_5760_s_4_2.jpg"
              fill={true}
              alt="fdsfds"
              sizes="100vw"
              style={{
                objectFit: 'cover',
              }}
            />
          </div>
          <div className="border-y-2 border-blue-700 p-8 w-60 relative bg-white ml-32 mt-[-530px]">
            <h3 className="text-2xl font-bold">Take Part</h3>
            <p className="my-6 text-sm">
              I am a paragraph. Click here to add your own text and edit me.
              It’s easy. Just click “Edit Text” or double click me to add your
              own content and make changes to the font.
            </p>
            <a href="/contact" className="text-purple-700 py-6">
              Read More
            </a>
          </div>
        </div>
      </div>
      <h2 className="text-5xl text-center mb-20">2035 in Numbers</h2>
      <div className="flex gap-8 justify-between">
        <div className="relative">
          <span className="text-[200px] block leading-[200px] leading-9 text-purple-500">
            40K
          </span>
          <span className="border-t-4 inline-block border-purple-500 text-4xl absolute right-0 top-[173px]">
            Dollars
            <br />
            Raised
          </span>
        </div>
        <div className="relative">
          <span className="text-[200px] leading-[200px] leading-9 text-purple-500">
            8K
          </span>
          <span className="border-t-4 inline-block border-purple-500 text-4xl absolute top-[50px] left-[130px] bg-white">
            Graduate
            <br />
            Students
          </span>
        </div>
        <div className="relative">
          <span className="text-[200px] leading-[200px] leading-9 text-purple-500">
            120
          </span>
          <span className="border-t-4 inline-block border-purple-500 text-4xl absolute top-[130px] left-[150px] bg-white">
            Technology
            <br />
            Centers
          </span>
        </div>
      </div>
    </div>
  );
}
