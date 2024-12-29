interface ServiceItemProps {
  url: string;
  description: string;
  title: string;
}

export function ServiceItem({ url, title, description }: ServiceItemProps) {
  return (
    <div
      className="relative h-[380px] group overflow-hidden"
      style={{
        backgroundImage: `url(${url})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
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
