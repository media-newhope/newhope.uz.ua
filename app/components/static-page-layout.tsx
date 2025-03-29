import { PageTitle } from "@/app/components/sectionTitle/PageTitle";
import Image from 'next/image';

interface StaticPageLayoutProps {
  imageUrl: string;
  title: string;
  children: React.ReactNode;
}

export function StaticPageLayout({
  imageUrl,
  title,
  children,
}: StaticPageLayoutProps) {
  const containerClass = "container mx-auto px-10 max-w-7xl";

  return (
    <>
      <div className="h-[84px]"></div>
      <div className={containerClass}>
        <PageTitle>{title}</PageTitle>
      </div>
      <div
        className={`container mx-auto max-w-7xl h-[500px] overflow-hidden relative ${imageUrl} mb-10`}
      >
        <Image
          className="w-full h-full object-cover absolute"
          src={imageUrl}
          alt=""
          fill
        />
      </div>
      <div className={containerClass}>{children}</div>
      <div className="h-[84px]"></div>
    </>
  );
}
