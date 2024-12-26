import {FaLocationDot} from "react-icons/fa6";

interface HeroProps {
  title: string;
  description: string;
  address: string;
  imageUrl: string;
}

export function Hero({ title, description, address, imageUrl }: HeroProps) {
  return (
    <div className="relative h-screen w-full">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-black/30 z-10" />
      
      {/* Content */}
      <div className="relative z-20 h-full">
        <div className="container mx-auto px-4 h-full flex flex-col justify-center pb-10">
            <div className="flex-1 flex items-center">
                <div className="max-w-4xl">
                    <h1 className="text-4xl md:text-8xl  text-white mb-6 uppercase ">
                        {title}
                    </h1>
                    <p className="text-xl text-white/90">
                        {description}
                    </p>
                </div>

            </div>

            <div className="text-white mb-4 text-xl text-right flex items-center justify-end gap-2">
                <FaLocationDot size={40} />
                {address}
            </div>
        </div>
      </div>
    </div>
  );
}
