import { StaticLayout } from "@/app/components/static-layout";
import { LANGUAGE } from "@/app/locales/models";
import { StaticPageLayout } from "@/app/components/static-page-layout";
import Button from "@/app/components/button/Button";
import { getTranslation } from "@/app/lib/utils";
import Link from "next/link";

export default function AboutPage() {
  const t = getTranslation(LANGUAGE.EN);

  return (
    <StaticLayout lang={LANGUAGE.EN}>
      <StaticPageLayout imageUrl="/images/constraint.jpg" title="Building">
        <p className="mb-5">
          <strong>The church is not a building. The church is People gathered together, called by Christ.</strong> This is our conviction. For over 15 years, our gatherings have been held in rented facilities. However, we believe that a comfortable and well-designed building FOR the church will help organize better worship to God and provide higher quality ministry to our region. That's why we are gradually moving towards this dream - to have our own building for church gatherings and ministry.
        </p>
        <p className="mb-5">
          In these dreams (and plans) we aim to build a facility that will become a roof for <strong>both weekly church gatherings and many social projects</strong>. Such as camps for children and teenagers, veteran support centers, assistance centers for people with addictions and health issues, care for people in need, and more. If God allows, we would also like this future facility to become <strong>a base for establishing Christian educational institutions</strong>. It could also support existing initiatives.
        </p>
        <p className="mb-5">
          Our community has been slowly raising funds on our own for a church building for over 10 years. We have made every effort, but so far we have only been able to <strong>purchase a plot of land</strong>, and there is still much work ahead.
        </p>
        <p className="mb-5">
          <strong>Pray for opportunities to attract more resources to begin design and construction.</strong>
        </p>
        <p className="mb-5">
          If our dream touches your heart - respond and become a participant through a material donation specifically for this project by clicking the button below. <strong>Your support can help make this dream a reality.</strong>
        </p>
        <div className="flex justify-center">
          <Link href="/en/#giving">
            <Button>{t("BUILDING.DONATE_NOW")}</Button>
          </Link>
        </div>
      </StaticPageLayout>
    </StaticLayout>
  );
}
