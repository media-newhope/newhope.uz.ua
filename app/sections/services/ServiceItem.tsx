import Image from "next/image";

interface ServiceItemProps {
  url: string;
  description: string;
  title: string;
}

export function ServiceItem({ url, title, description }: ServiceItemProps) {
  return (
    <div className="relative h-[380px] group overflow-hidden">
      {/* Background Image using Next.js Image */}
      <Image
        src={url}
        alt="Item description"
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover"
        priority={false}
        quality={75}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>

      <div className="absolute inset-x-0 bottom-0 p-6 transition-all duration-300 ease-in-out transform translate-y-[120px] group-hover:translate-y-0">
        <h3 className="text-white text-2xl font-bold uppercase ">{title}</h3>

        <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-[120px] pt-2">
          {description}
        </div>
      </div>
    </div>
  );
}
