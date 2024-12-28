import type { IconType } from "react-icons";

export const TeamMember = ({
  image,
  name,
  title,
  socials,
}: {
  image: string;
  name: string;
  title: string;
  socials?: { icon: IconType; link: string }[];
}) => {
  return (
    <div className="flex flex-col items-center bg-stone-100 py-10 px-6">
      {/* Photo with circular border */}
      <div className="relative w-48 h-48 mb-4">
        <div className="absolute inset-0 rounded-full border-4 border-white"></div>
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-full"
        />
      </div>

      {/* Name and Title */}
      <h3 className="text-2xl font-semibold text-gray-900 mb-1 uppercase text-center">
        {name}
      </h3>
      <p className="text-gray-500 mb-3">{title}</p>

      {/* Social Media Icons */}
      <div className="flex gap-3">
        {socials?.map((social, index) => {
          const Icon = social.icon as IconType;
          return (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary-500 transition-colors duration-300"
            >
              <Icon size={20} />
            </a>
          );
        })}
      </div>
    </div>
  );
};
