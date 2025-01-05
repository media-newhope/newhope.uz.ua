import { StaticLayout } from "@/app/static-layout";
import { LANGUAGE } from "@/app/locales/models";

export default function AboutPage() {
  return (
    <StaticLayout lang={LANGUAGE.EN}>
      <h1>About</h1>
      <p>This is the about page</p>
    </StaticLayout>
  );
}
