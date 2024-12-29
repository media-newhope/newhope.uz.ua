import Link from "next/link";
import { IconButton } from "@/app/components/Button/IconButton";
import { FaFacebook, FaInstagram, FaTelegram, FaYoutube } from "react-icons/fa";

export const Footer = () => {
  const menuItems = [
    { name: "про нас", link: "" },
    { name: "наші служіння", link: "" },
    { name: "Пожертви", link: "" },
    { name: "Будівництво", link: "" },
    { name: "приєднуйся", link: "" },
    { name: "Наші служіння", link: "" },
  ];

  return (
    <footer className="bg-black text-white py-12 text-xs">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div>
            <Link
              href="/"
              className="text-2xl flex items-center gap-4 mb-5 md:mb-24"
            >
              <img width="43px" src="/logo.png" alt="" />
              <span>НОВА НАДІЯ</span>
            </Link>
            <div className="uppercase">
              <p className="mb-2">info@newhope.uz.ua</p>
              <p>вул. мирослава скорика 8</p>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg">Посилання</h3>
            <ul className="space-y-2 uppercase">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <a href="#" className="text-gray-400 hover:text-white">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg">Знайди нас</h3>
            <div className="flex space-x-4">
              <Link
                target="_blank"
                href="https://www.facebook.com/newhopeuzhgorod"
              >
                <IconButton color="secondary">
                  <FaFacebook size={28} />
                </IconButton>
              </Link>
              <Link target="_blank" href="https://www.instagram.com/newhopeuzh">
                <IconButton color="secondary">
                  <FaInstagram size={28} />
                </IconButton>
              </Link>
              <Link target="_blank" href="https://www.youtube.com/@NewHopeUzh">
                <IconButton color="secondary">
                  <FaYoutube size={28} />
                </IconButton>
              </Link>
              <Link target="_blank" href="https://t.me/NewHopeUzh">
                <IconButton color="secondary">
                  <FaTelegram size={28} />
                </IconButton>
              </Link>
            </div>
          </div>

          <div className="min-w-[300px]">
            <h3 className="mb-4 text-lg">Наші партнери</h3>
            <div className="space-y-4"></div>
            <ul>
              <li className="flex gap-3 mb-2 align-middle">
                <div className="w-[80px] text-center justify-center flex">
                  <Link href="https://www.baptyst.com" target="_blank">
                    <img
                      width="80px"
                      src="/images/ehb.png"
                      alt="Всеукраїнський Союз Церков Євангельських Християн-баптистів"
                    />
                  </Link>
                </div>

                <div className="flex-1">
                  <h4 className="uppercase text-lg mb-1">ВСЦ ЄХБ</h4>
                  Всеукраїнський Союз Церков Євангельських Християн-баптистів
                </div>
              </li>
              <li className="flex mb-2 gap-3 align-middle">
                <div className="w-[80px] justify-center flex">
                  <Link
                    className="text-center"
                    href="https://ubts.org.ua/"
                    target="_blank"
                  >
                    <img
                      width="40px"
                      src="/images/ubts.png"
                      alt="Українська Баптистська Теологічна Семінарія"
                    />
                  </Link>
                </div>
                <div className="flex-1">
                  <h4 className="uppercase text-lg mb-1">УБТС</h4>
                  Українська Баптистська Теологічна Семінарія
                </div>
              </li>
              <li className="flex gap-3 align-middle">
                <div className="w-[80px] text-center justify-center flex">
                  <Link href="https://ktsonline.org" target="_blank">
                    <img
                      width="80px"
                      src="/images/kbs.png"
                      alt="Київська Богословська Семінарія"
                    />
                  </Link>
                </div>
                <div className="flex-1">
                  <h4 className="uppercase text-lg mb-1">КбС</h4>
                  Київська Богословська Семінарія
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
