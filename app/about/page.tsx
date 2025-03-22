import { StaticLayout } from "@/app/components/static-layout";
import { LANGUAGE } from "@/app/locales/models";
import { StaticPageLayout } from "@/app/components/static-page-layout";
import { Title } from "../components/Title";
import { Quote } from "@/app/components/Quote";
import { InfoPanel } from "@/app/components/InfoPanel";
import { FaChurch } from "react-icons/fa";
import { PiUsersThreeFill } from "react-icons/pi";
import { MdOutlineHomeWork } from "react-icons/md";

export default function AboutPage() {
  return (
    <StaticLayout lang={LANGUAGE.UK}>
      <StaticPageLayout imageUrl="/images/all-church.jpg" title="Про нас">
        <p className="text-gray-700 mb-16">
          Наша нова надія захована у звістці про смерть і воскресіння Ісуса Христа. Люди настільки заблукали і є зіпсовані, що не можуть знайти Бога та виправити себе, тому Бог в особі Ісуса прийшов, щоб знайти та врятувати нас, простити гріхи і примирити нас з Богом. Сьогодні через подвиг Христа Бог дає сили для нового життя Своїм послідовникам, щоб їм жити в свободі і радості. Тепер нічого не потрібно робити, аби отримати схвалення Бога і все, що роблять Його послідовники для Нього чи інших - роблять з вдячності Богу за добро, яке Він зробив для них. В цьому і є суть нашої нової надії.
        </p>

        <div className="mb-16">
          <Title className="text-center mb-8">Ми віримо</Title>

          <ol className="list-decimal space-y-8 pl-8 [&>li]:pl-4 marker:text-2xl marker:text-secondary-700">
            <li className="bg-white rounded-lg transition-all hover:shadow-md">
              <div className="p-6">
                <Title as="h3" className="!mb-2">Бог</Title>
                <p className="text-gray-700">
                  Ми віримо у Бога, який є Триєдиним: Отець, Син і Святий Дух.
                </p>
              </div>
            </li>

            <li className="bg-white rounded-lg transition-all hover:shadow-md">
              <div className="p-6">
                <Title as="h3" className="!mb-2">Біблія</Title>
                <p className="text-gray-700">
                  Ми віримо, що Бог говорить до людей через авторитетне, достатнє, непогрішиме Боже Слово, Біблію (66 книг).
                </p>
              </div>
            </li>

            <li className="bg-white rounded-lg transition-all hover:shadow-md">
              <div className="p-6">
                <Title as="h3" className="!mb-2">Людина та гріх</Title>
                <p className="text-gray-700">
                  Ми сповідуємо, що Бог створив людей, чоловіків і жінок, за власним образом. Мета людського життя – прославити Бога, радіти спілкуванню з Ним і жити у злагоді з Його волею. Людина була створена безгрішною, але не послухалася Бога, відпала від святості і праведності, навічно стала і зробила своїх нащадків рабами гріха, які підлягають осуду.
                </p>
              </div>
            </li>

            <li className="bg-white rounded-lg transition-all hover:shadow-md">
              <div className="p-6">
                <Title as="h3" className="!mb-2">Ісус</Title>
                <p className="text-gray-700">
                  Ми віримо, що Ісус Христос є Божим Сином та є посередником між Богом і людьми. Прийнявши на Себе людську природу але без гріха, Він досконало виконав Закон, постраждав і помер на хресті за спасіння грішників. Він був похований і воскрес на третій день, і вознісся до Свого Батька, в руках якого Він вічно живе, щоб заступатися за Його народ. Він є єдиним Посередником Церкви та Володарем Всесвіту.
                </p>
              </div>
            </li>

            <li className="bg-white rounded-lg transition-all hover:shadow-md">
              <div className="p-6">
                <Title as="h3" className="!mb-2">Віра</Title>
                <p className="text-gray-700">
                  Ми сповідуємо, що спасіння - цілком від Бога, по благодаті через віру, на основі викупної жертви Ісуса Христа, а не діл людини.
                </p>
              </div>
            </li>

            <li className="bg-white rounded-lg transition-all hover:shadow-md">
              <div className="p-6">
                <Title as="h3" className="!mb-2">Церква</Title>
                <p className="text-gray-700">
                  Ми віримо в духовну єдність віруючих в Христа, які є Його духовним Тілом, Церквою, яка виражає себе в помісних церквах.
                </p>
              </div>
            </li>

            <li className="bg-white rounded-lg transition-all hover:shadow-md">
              <div className="p-6">
                <Title as="h3" className="!mb-2">Хрещення та Господня вечеря</Title>
                <p className="text-gray-700">
                  Ми віримо, що хрещення - це занурення віруючої людини у воду в ім&apos;я Отця, Сина і Святого Духа.
                </p>
              </div>
            </li>

            <li className="bg-white rounded-lg transition-all hover:shadow-md">
              <div className="p-6">
                <Title as="h3" className="!mb-2">Господня вечеря</Title>
                <p className="text-gray-700">
                  Ми також віримо, що Вечеря є символічним актом послуху, яким члени церкви разом згадують спасительну жертву Христа і своє спілкування з Ним та один з одним.
                </p>
              </div>
            </li>

            <li className="bg-white rounded-lg transition-all hover:shadow-md">
              <div className="p-6">
                <Title as="h3" className="!mb-2">Святий Дух</Title>
                <p className="text-gray-700">
                  Ми віримо, що для спасіння заблуканих і грішних людей відродження Святим Духом є абсолютно необхідним. Завдяки нинішньому служінню Святого Духа, через перебування в Ньому, християнинин може жити благочестивим життям.
                </p>
              </div>
            </li>

            <li className="bg-white rounded-lg transition-all hover:shadow-md">
              <div className="p-6">
                <Title as="h3" className="!mb-2">Майбутнє</Title>
                <p className="text-gray-700">
                  Ми віримо, що Христос повернеться вдруге аби встановити Свою справедливість, воскресити мертвих, покарати зло та його прихильників, спасти Своїх, які довірились Йому, та зцілити творіння.
                </p>
              </div>
            </li>

            <li className="bg-white rounded-lg transition-all hover:shadow-md">
              <div className="p-6">
                <Title as="h3" className="!mb-2">Велике доручення</Title>
                <p className="text-gray-700">
                  Ми віримо, що Христом нам залишено Велике Доручення проповідувати Добру звістку всім народам до Його Другого пришестя.
                </p>
              </div>
            </li>
          </ol>
        </div>

        
        <InfoPanel>
          <Title>Бачення</Title>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <FaChurch className="flex-shrink-0 text-secondary-700" size={28} />
              <p>
                Церква, яка зростає, впливає на місто, та є підбадьоренням для багатьох церков в Україні.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <PiUsersThreeFill className="flex-shrink-0 text-secondary-700" size={28} />
              <p>
                Домашні церкви слугують спільності церкви і розвитку її служителів.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <MdOutlineHomeWork className="flex-shrink-0 text-secondary-700" size={28} />
              <p>
                Церква, яка має своє багатофункціональне приміщення, школу, дитячий садочок, реабілітаційні центри для залежних та для військових.
              </p>
            </div>
          </div>
        </InfoPanel>

        
        <Quote>
        <Title>Історія</Title>
          Служіння по заснуванню церкви «Нова надія» розпочалось в 2007 році з переїздом в місто Ужгород 5 місіонерів з різних куточків України. Метою було проповідувати древнє Євангеліє актуальною мовою для сучасників
        </Quote>

      </StaticPageLayout>
    </StaticLayout>
  );
}
