import { useState, useEffect } from "react";
import Slider from "react-slick";
import Banners from "../api/banners.json";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";

const NextBtn = (props) => {
  const { onClick } = props;
  return (
    <button
      className={`text-brand-color absolute top-1/2 -right-6 -translate-y-1/2`}
      onClick={onClick}
    >
      <IoIosArrowForward size={22} />
    </button>
  );
};

const PrevBtn = (props) => {
  const { onClick } = props;
  return (
    <button
      className={`text-brand-color absolute top-1/2 -left-6 -translate-y-1/2`}
      onClick={onClick}
    >
      <IoIosArrowBack size={22} />
    </button>
  );
};

const Campaigns = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3500,
    cssEase: "linear",
    nextArrow: <NextBtn />,
    prevArrow: <PrevBtn />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          arrows: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };

  const [banners, SetBanners] = useState([]);

  useEffect(() => {
    SetBanners(Banners);
  }, []);

  return (
    <div className="container mx-auto md:py-8 ">
      <div className="text-sm flex justify-between items-center font-semibold py-2 md:hidden px-2 md:px-0 ">
        <h3 className="flex items-center">
          <IoLocationSharp size={18} className="text-brand-color mr-2" />
          Teslimat Adresi Belirle
        </h3>
        <IoIosArrowForward
          size={18}
          className="text-brand-color items-center"
        />
      </div>
      <h3 className="text-sm font-semibold my-3 hidden px-4 md:px-0 md:block">
        Kampanyalar
      </h3>
      <Slider className="md:-mx-2" {...settings}>
        {banners &&
          banners.map((banner, index) => (
            <div key={index} className="md:px-2">
              <img
                src={banner.image}
                alt={banner.id}
                className="md:rounded-lg w-full"
              />
            </div>
          ))}
      </Slider>
    </div>
  );
};

export default Campaigns;
