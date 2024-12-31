import Link from "next/link";

interface JoinItemProps {
  icon: React.ElementType;
  title: string;
  asLink?: boolean;
  href?: string;
  target?: string;
  children: React.ReactNode;
}

export const JoinItem = ({
  icon: Icon,
  title,
  children,
  asLink,
  href,
  ...props
}: JoinItemProps) => {
  const Wrapper = asLink ? Link : "div";

  return (
    // @ts-expect-error Need to define wrapper type
    <Wrapper
      {...(!!href && { href })}
      {...props}
      className="text-black group relative p-16 rounded-lg bg-white/85 backdrop-blur-sm transition-all duration-300 hover:bg-white hover:shadow-lg"
    >
      <div className="absolute bottom-0 left-0 right-0 h-[16px] bg-secondary-500"></div>

      <div className="relative group-hover:translate-x-[calc(50%-28px)] transition-transform duration-300 mb-10">
        <div className="text-white w-14 h-14 rounded-full bg-primary-500 flex items-center justify-center">
          <Icon className="w-7 h-7 " />
        </div>
      </div>

      {/* Content */}
      <h3 className="text-3xl font-semibold mb-8">{title}</h3>
      {children}
    </Wrapper>
  );
};
