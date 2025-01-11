import { StaticLayout } from "@/app/components/static-layout";
import { LANGUAGE } from "@/app/locales/models";
import { StaticPageLayout } from "@/app/components/static-page-layout";

export default function AboutPage() {
  return (
    <StaticLayout lang={LANGUAGE.UK}>
      <StaticPageLayout imageUrl="/images/all-church.jpg" title="About">
        <p className="mb-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation. Ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Non tellus orci ac auctor augue mauris augue neque gravida.
        </p>
        <p>
          Aenean vel elit scelerisque mauris. Imperdiet sed euismod nisi porta
          lorem mollis aliquam. Quis vel eros donec ac odio tempor orci dapibus
          ultrices. Elementum eu facilisis sed odio morbi. Nam at lectus urna
          duis convallis convallis tellus id. Feugiat pretium nibh ipsum
          consequat nisl vel. Elementum pulvinar etiam non quam lacus. Sit amet
          porttitor eget.
        </p>
      </StaticPageLayout>
    </StaticLayout>
  );
}
