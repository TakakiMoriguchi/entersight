import Image from "next/image";

enum Category {
  DEVELOPMENT = 1,
  OSS = 2,
  CONSULTING = 3,
}

type CardProps = {
  category: Category;
  name: string;
  description: string;
  price?: string;
  thumbnail: string;
}

export const Card = (v: CardProps, key: number) => {
  return (
    <div key={key} className="border border-gray-500 rounded-lg shadow-md p-6 flex flex-col">
      <div className="w-32 h-32 mx-auto mb-4 relative">
        <Image
          src={v.thumbnail === "" ? "/app/no-image.svg" : v.thumbnail}
          alt={v.name}
          layout="fill"
          objectFit="contain"
          className="py-3"
        />
      </div>
      <h4 className="text-xl font-semibold mb-2">{v.name}</h4>
      <div className="flex-grow text-sm text-gray-200 leading-6" dangerouslySetInnerHTML={{ __html: v.description }} />
      {v.price && <div className="mt-4 font-bold">{v.price}</div>}
    </div>
  );
};
