import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { FiGlobe } from "react-icons/fi";

const Footer = () => {
  return (
    <div className="bg-white pt-10 mt-4">
      <div className="container mx-auto px-4 md:px-0">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-y-8 pt-5 md:pt-10">
          <section className="text-center md:text-left">
            <h6 className="text-lg text-purple-700 mb-4">Getir'i indirin!</h6>
            <ul className="grid grid-cols-3 md:grid-cols-1 gap-3">
              <li>
                <a
                  href="/#"
                  className="transition-all transform hover:scale-105"
                >
                  <img
                    src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg"
                    alt=""
                  />
                </a>
              </li>
              <li>
                <a
                  href="/#"
                  className="transition-all transform hover:scale-105"
                >
                  <img
                    src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg"
                    alt=""
                  />
                </a>
              </li>
              <li>
                <a
                  href="/#"
                  className="transition-all transform hover:scale-105"
                >
                  <img
                    src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg"
                    alt=""
                  />
                </a>
              </li>
            </ul>
          </section>
          <section className="text-center md:text-left">
            <h3 className="text-lg text-purple-700 mb-4">Getir'i keşfedin</h3>
            <ul className="grid gap-y-3 text-sm">
              <li>
                <a href="/#" className="hover:underline">
                  Hakkımızda
                </a>
              </li>
              <li>
                <a href="/#" className="hover:underline">
                  Kariyer
                </a>
              </li>
              <li>
                <a href="/#" className="hover:underline">
                  İletişim
                </a>
              </li>
              <li>
                <a href="/#" className="hover:underline">
                  COVID-19 Duyuru
                </a>
              </li>
              <li>
                <a href="/#" className="hover:underline">
                  Sosyal Sorumluluk Projeleri
                </a>
              </li>
            </ul>
          </section>
          <section className="text-center md:text-left">
            <h3 className="text-lg text-purple-700 mb-4">
              Yardıma mı ihtiyacınız var?
            </h3>
            <ul className="grid gap-y-3 text-sm">
              <li>
                <a href="/#" className="hover:underline">
                  Sıkça Sorulan Sorular
                </a>
              </li>
              <li>
                <a href="/#" className="hover:underline">
                  Kişisel Verilerin Korunması
                </a>
              </li>
              <li>
                <a href="/#" className="hover:underline">
                  Gizlilik Politikası
                </a>
              </li>
              <li>
                <a href="/#" className="hover:underline">
                  Kullanım Koşulları
                </a>
              </li>
              <li>
                <a href="/#" className="hover:underline">
                  Çerez Politikası
                </a>
              </li>
            </ul>
          </section>
          <section className="text-center md:text-left">
            <h3 className="text-lg text-purple-700 mb-4">İş Ortağımız Olun</h3>
            <ul className="grid gap-y-3 text-sm">
              <li>
                <a href="/#" className="hover:underline">
                  Bayimiz Olun
                </a>
              </li>
              <li>
                <a href="/#" className="hover:underline">
                  Deponuzu Kiralayın
                </a>
              </li>
              <li>
                <a href="/#" className="hover:underline">
                  GetirYemek Restoranı Olun
                </a>
              </li>
              <li>
                <a href="/#" className="hover:underline">
                  GetirÇarşı İşletmesi Olun
                </a>
              </li>
            </ul>
          </section>
        </div>
        <div className="flex w-full py-8 flex-col md:flex-row items-center text-sm justify-between">
          <div className="flex gap-x-4 text-gray-700">
            &copy; 2021 Getir
            <div>
              <a href="/#" className="text-purple-800 hover:underline">
                Bilgi Toplumu Hizmetleri
              </a>
            </div>
          </div>
          <div className="flex gap-x-2 justify-between">
            <a
              href="/#"
              className="transition-colors w-8 h-8 flex items-center justify-center rounded-lg text-gray-600 hover:bg-purple-50 hover:text-purple-700"
            >
              <FaFacebook size={20} />
            </a>
            <a
              href="/#"
              className="transition-colors w-8 h-8 flex items-center justify-center rounded-lg text-gray-600 hover:bg-purple-50 hover:text-purple-700"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="/#"
              className="transition-colors w-8 h-8 flex items-center justify-center rounded-lg text-gray-600 hover:bg-purple-50 hover:text-purple-700"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="/#"
              className="transition-colors h-8 flex items-center gap-x-2 border border-gray-100 rounded-lg text-sm text-gray-600 px-3 hover:bg-purple-50 hover:text-purple-700"
            >
              <FiGlobe size={18} />
              Türkçe (TR)
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
