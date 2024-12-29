import { Section } from "@/app/components/Section/Section";
import { FaFacebook, FaInstagram, FaTelegram, FaYoutube } from "react-icons/fa";
import Link from "next/link";
import { IconButton } from "@/app/components/Button/IconButton";

export function FeedbackSection() {
  return (
    <Section className="bg-secondary-100">
      <Section.Title subtitle="зворотній звʼязок">напиши нам</Section.Title>
      <div className="container flex">
        <div className="flex-1"></div>
        <div className="flex-1">
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
