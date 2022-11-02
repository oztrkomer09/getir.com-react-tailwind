const MobileApp = () => {
  return (
    <div className="container mx-auto flex flex-col md:flex-row relative bg-mobile-app bg-primary-brand-color lg:rounded-lg p-12 mt-7 text-white ">
      <div className="flex flex-col gap-y-3 items-center md:items-baseline">
        <h3 className="text-3xl tracking-tighter font-bold">
          Getir'i indirin!
        </h3>
        <p className="font-semibold text-center md:text-left mt-4 max-w-[360px]">
          İstediğiniz ürünleri dakikalar içinde kapınıza getirelim.
        </p>
        <div className="my-6 flex flex-wrap md:flex-nowrap justify-center md:justify-between gap-2">
          <a href="/#" className="transition-all transform hover:scale-105">
            <img
              src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg"
              alt=""
            />
          </a>
          <a href="/#" className="transition-all transform hover:scale-105">
            <img
              src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg"
              alt=""
            />
          </a>
          <a href="/#" className="transition-all transform hover:scale-105">
            <img
              c
              src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg"
              alt=""
            />
          </a>
        </div>
      </div>
      <img
        src="https://cdn.getir.com/getirweb-images/common/landing/phoneLanding.png"
        alt=""
        className="absolute right-0 bottom-0 w-[600px] hidden xl:block xl:self-end"
      />
    </div>
  );
};

export default MobileApp;
