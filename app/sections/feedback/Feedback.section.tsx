import { Section } from "@/app/components/section/Section";
import { FaFacebook, FaInstagram, FaTelegram, FaYoutube } from "react-icons/fa";
import Link from "next/link";
import { FeedbackForm } from "@/app/sections/feedback/FeedbackForm";
import { IconButton } from "@/app/components/button/IconButton";
import { PageSectionProps } from "@/app/sections/models";

export function FeedbackSection(props: PageSectionProps) {
  return (
    <Section theme="custom" className="bg-secondary-200" {...props}>
      <Section.Title subtitle="зворотній звʼязок">напиши нам</Section.Title>
      <div className="container md:flex gap-32">
        <div className="basis-1/2">
          <FeedbackForm />
          <div className="h-6 md:hidden"></div>
        </div>
        <div className="basis-1/2">
          <h5 className="text-gray-600">Адреса</h5>
          <p className="uppercase text-xl font-bold mb-8">
            <Link
              href="https://maps.app.goo.gl/hw979PjViKu7Ygd59"
              target="_blank"
            >
              вул. Мирослава скорика (сурікова) 8
            </Link>
          </p>
          <h5 className="text-gray-600">Email</h5>
          <p className="uppercase text-xl font-bold mb-8">
            <Link href="mailto:info@newhope.uz.ua">info@newhope.uz.ua</Link>
          </p>
          <h5 className="text-gray-600 mb-2">Знайди нас</h5>
          <div className="flex gap-2">
            <Link
              target="_blank"
              href="https://www.facebook.com/newhopeuzhgorod"
            >
              <IconButton>
                <FaFacebook size={28} />
              </IconButton>
            </Link>
            <Link target="_blank" href="https://www.instagram.com/newhopeuzh">
              <IconButton>
                <FaInstagram size={28} />
              </IconButton>
            </Link>
            <Link target="_blank" href="https://www.youtube.com/@NewHopeUzh">
              <IconButton>
                <FaYoutube size={28} />
              </IconButton>
            </Link>
            <Link target="_blank" href="https://t.me/NewHopeUzh">
              <IconButton>
                <FaTelegram size={28} />
              </IconButton>
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}
