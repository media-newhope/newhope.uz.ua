import { StaticLayout } from "@/app/components/static-layout";
import { LANGUAGE } from "@/app/locales/models";
import { StaticPageLayout } from "@/app/components/static-page-layout";
import { Title } from "../../components/Title";
import { InfoPanel } from "@/app/components/InfoPanel";
import { FaChurch } from "react-icons/fa";
import { PiUsersThreeFill } from "react-icons/pi";
import { MdOutlineHomeWork } from "react-icons/md";

export default function AboutPage() {
  return (
    <StaticLayout lang={LANGUAGE.EN}>
      <StaticPageLayout imageUrl="/images/all-church.jpg" title="About Us">
        <p className="text-gray-700 mb-16">
          Our new hope is found in the message of Jesus Christ&apos;s death and resurrection. People are so lost and corrupted that they cannot find God and fix themselves, so God, in the person of Jesus, came to find and save us, forgive sins, and reconcile us with God. Today, through Christ&apos;s work, God gives strength for a new life to His followers to live in freedom and joy. Now nothing needs to be done to gain God&apos;s approval, and everything His followers do for Him or others - they do out of gratitude to God for the good He has done for them. This is the essence of our new hope.
        </p>

        <div className="mb-16">
          <Title className="text-center mb-8">We Believe</Title>

          <ol className="list-decimal space-y-8 pl-8 [&>li]:pl-4 marker:text-2xl marker:text-secondary-700">
            <li className="bg-white rounded-lg transition-all hover:shadow-md">
              <div className="p-6">
                <Title as="h3" className="!mb-2">God</Title>
                <p className="text-gray-700">
                  We believe in God who is Triune: Father, Son, and Holy Spirit.
                </p>
              </div>
            </li>

            <li className="bg-white rounded-lg transition-all hover:shadow-md">
              <div className="p-6">
                <Title as="h3" className="!mb-2">Bible</Title>
                <p className="text-gray-700">
                  We believe that God speaks to people through the authoritative, sufficient, and infallible Word of God, the Bible (66 books).
                </p>
              </div>
            </li>

            <li className="bg-white rounded-lg transition-all hover:shadow-md">
              <div className="p-6">
                <Title as="h3" className="!mb-2">Humanity and Sin</Title>
                <p className="text-gray-700">
                  We confess that God created humans, men and women, in His own image. The purpose of human life is to glorify God, enjoy fellowship with Him, and live in harmony with His will. Humanity was created sinless but disobeyed God, fell from holiness and righteousness, and forever became and made their descendants slaves to sin, subject to judgment.
                </p>
              </div>
            </li>

            <li className="bg-white rounded-lg transition-all hover:shadow-md">
              <div className="p-6">
                <Title as="h3" className="!mb-2">Jesus</Title>
                <p className="text-gray-700">
                  We believe that Jesus Christ is God&apos;s Son and the mediator between God and humans. Taking on human nature but without sin, He perfectly fulfilled the Law, suffered and died on the cross for sinners&apos; salvation. He was buried and rose on the third day, and ascended to His Father, in whose hands He eternally lives to intercede for His people. He is the only Mediator of the Church and Lord of the Universe.
                </p>
              </div>
            </li>

            <li className="bg-white rounded-lg transition-all hover:shadow-md">
              <div className="p-6">
                <Title as="h3" className="!mb-2">Faith</Title>
                <p className="text-gray-700">
                  We confess that salvation is entirely from God, by grace through faith, based on Jesus Christ&apos;s redemptive sacrifice, not human works.
                </p>
              </div>
            </li>

            <li className="bg-white rounded-lg transition-all hover:shadow-md">
              <div className="p-6">
                <Title as="h3" className="!mb-2">Church</Title>
                <p className="text-gray-700">
                  We believe in the spiritual unity of believers in Christ, who are His spiritual Body, the Church, which expresses itself in local churches.
                </p>
              </div>
            </li>

            <li className="bg-white rounded-lg transition-all hover:shadow-md">
              <div className="p-6">
                <Title as="h3" className="!mb-2">Baptism and Lord&apos;s Supper</Title>
                <p className="text-gray-700">
                  We believe that baptism is the immersion of a believing person in water in the name of the Father, Son, and Holy Spirit.
                </p>
              </div>
            </li>

            <li className="bg-white rounded-lg transition-all hover:shadow-md">
              <div className="p-6">
                <Title as="h3" className="!mb-2">Lord&apos;s Supper</Title>
                <p className="text-gray-700">
                  We also believe that the Lord&apos;s Supper is a symbolic act of obedience by which church members together remember Christ&apos;s saving sacrifice and their fellowship with Him and one another.
                </p>
              </div>
            </li>

            <li className="bg-white rounded-lg transition-all hover:shadow-md">
              <div className="p-6">
                <Title as="h3" className="!mb-2">Holy Spirit</Title>
                <p className="text-gray-700">
                  We believe that for the salvation of lost and sinful people, regeneration by the Holy Spirit is absolutely necessary. Through the present ministry of the Holy Spirit, by indwelling, the Christian is enabled to live a godly life.
                </p>
              </div>
            </li>

            <li className="bg-white rounded-lg transition-all hover:shadow-md">
              <div className="p-6">
                <Title as="h3" className="!mb-2">Future</Title>
                <p className="text-gray-700">
                  We believe that Christ will return a second time to establish His justice, raise the dead, punish evil and its adherents, save His own who trusted in Him, and heal creation.
                </p>
              </div>
            </li>

            <li className="bg-white rounded-lg transition-all hover:shadow-md">
              <div className="p-6">
                <Title as="h3" className="!mb-2">Great Commission</Title>
                <p className="text-gray-700">
                  We believe that Christ has left us the Great Commission to preach the Good News to all nations until His Second Coming.
                </p>
              </div>
            </li>
          </ol>
        </div>

        <InfoPanel>
          <Title>Vision</Title>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <FaChurch className="flex-shrink-0 text-secondary-700" size={28} />
              <p>
                A growing church that influences the city and is an encouragement to many churches in Ukraine.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <PiUsersThreeFill className="flex-shrink-0 text-secondary-700" size={28} />
              <p>
                Home churches serve the church community and develop its ministers.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <MdOutlineHomeWork className="flex-shrink-0 text-secondary-700" size={28} />
              <p>
                A church that has its own multifunctional facility, school, kindergarten, rehabilitation centers for addicts and military personnel.
              </p>
            </div>
          </div>
        </InfoPanel>

        {/* <Quote>
          <Title>History</Title>
          The ministry of establishing the &quot;New Hope&quot; church began in 2007 with the relocation of 5 missionaries from different parts of Ukraine to the city of Uzhhorod. The goal was to preach the ancient Gospel in a relevant language for contemporaries.
        </Quote> */}

      </StaticPageLayout>
    </StaticLayout>
  );
}
