import { useState } from "react";
import Slider from "react-slick";
import ReactFlagsSelect from "react-flags-select";
import { FaFacebook } from "react-icons/fa";
import { useWindowWidth } from "@react-hook/window-size";

const HeroSection = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3500,
    cssEase: "linear",
  };
  const [selected, setSelected] = useState("TR");
  const windowWidth = useWindowWidth();

  return (
    <div className="relative h-auto md:h-[500px] before:bg-gradient-to-r before:from-primary-brand-color before:to-transparent before:absolute before:inset-0 before:w-full before:h-full before:z-10">
      {windowWidth >= 768 && (
        <Slider {...settings}>
          <div>
            <img
              className="w-full h-[500px] object-cover"
              src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-4.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="w-full h-[500px] object-cover"
              src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-1.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="w-full h-[500px] object-cover"
              src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-2.jpg"
              alt=""
            />
          </div>
        </Slider>
      )}

      <div className="w-full md:container flex justify-between items-center relative md:absolute top-0 left:0 md:left-1/2 translate-x-0 md:-translate-x-1/2 h-full z-20">
        <div className="hidden md:block">
          <img
            src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg"
            alt=""
          />
          <h3 className="mt-8 tracking-tighter text-4xl font-semibold text-white">
            Dakikalar içinde <br /> kapınızda
          </h3>
        </div>
        <div className="w-full md:w-[400px] md:rounded-lg bg-gray-50 p-6">
          <h4 className="text-primary-brand-color text-center font-semibold">
            Giriş yap veya kayıt ol
          </h4>
          <div className="flex mt-4 gap-x-2">
            <ReactFlagsSelect
              countries={["US", "GB", "FR", "DE", "IT", "TR"]}
              customLabels={{
                US: "+1",
                GB: "+5",
                FR: "+70",
                DE: "+30",
                IT: "+11",
                TR: "+90",
              }}
              selected={selected}
              onSelect={(code) => setSelected(code)}
              className="flag-select w-[108px]"
            />
            <label className="flex-1 relative cursor-text">
              <input
                required
                className="h-14 px-4 border-2 border-gray-200 rounded w-full transition-colors outline-none hover:border-primary-brand-color focus:border-primary-brand-color text-sm pt-2 peer"
                maxLength="10"
              />

              <span className=" absolute top-0 left-0 h-full px-4 flex items-center text-sm text-gray-500 transition-all peer-focus:h-7 peer-focus:text-primary-brand-color peer-focus:text-xs peer-valid:h-7 peer-valid:text-primary-brand-color peer-valid:text-xs">
                Telefon Numarası
              </span>
            </label>
          </div>
          <button className="w-full flex items-center justify-center bg-brand-yellow mt-4 h-12 text-primary-brand-color text-sm font-semibold rounded-lg transition-all hover:text-brand-yellow hover:bg-primary-brand-color ">
            Telefon numarası ile devam et
          </button>

          <button className="w-full flex items-center px-4 bg-blue-700 bg-opacity-10 mt-4 h-12 text-blue-900 text-sm font-semibold rounded-lg transition-all hover:text-white  hover:bg-blue-900 ">
            <FaFacebook size={24} />
            <span className="mx-auto">Facebook ile devam et</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
