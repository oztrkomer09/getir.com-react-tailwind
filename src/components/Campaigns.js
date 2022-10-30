import { useState, useEffect } from "react";
import Slider from "react-slick";
import Banners from "../api/banners.json";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

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
    arrows: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3500,
    cssEase: "linear",
    nextArrow: <NextBtn />,
    prevArrow: <PrevBtn />,
  };

  const [banners, SetBanners] = useState([]);

  useEffect(() => {
    SetBanners(Banners);
  }, []);

  return (
    <div className="container mx-auto py-8">
      <h3 className="text-sm font-semibold my-3">Kampanyalar</h3>
      <Slider className="-mx-2" {...settings}>
        {banners &&
          banners.map((banner, index) => (
            <div key={index} className="px-2">
              <img
                src={banner.image}
                alt={banner.id}
                className="w-full sm:rounded-lg"
              />
            </div>
          ))}
      </Slider>
    </div>
  );
};

export default Campaigns;
