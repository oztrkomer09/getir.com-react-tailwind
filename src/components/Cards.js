const Cards = () => {
  const cards = [
    {
      title: "Her siparişinize bir kampanya",
      description:
        "Getir'de vereceğiniz her siparişe uygun bir kampanya bulabilirsiniz.",
      image:
        "https://getir.com/_next/static/images/intro-in-minutes-a7a9238a73013642a6597c4db06653c1.svg",
    },
    {
      title: "Dakikalar içinde kapınızda",
      description: "Getir’le siparişiniz dakikalar içinde kapınıza gelir.",
      image:
        "https://getir.com/_next/static/images/intro-market-courier-34cd8b0ca1d547580d506566edfacf8d.svg",
    },
    {
      title: "Binlerce çeşit mutluluk",
      description:
        "Getir’de binlerce çeşit arasından seçiminizi yapabilirsiniz.",
      image:
        "https://getir.com/_next/static/images/intro-discount-6248544cb695830a2e25debd3c0f3d29.svg",
    },
  ];

  return (
    <div className="grid sm:grid-cols-3 grid-cols-1 gap-x-2 mt-8 container mx-auto">
      {cards.length &&
        cards.map((card, index) => (
          <div
            key={index}
            className="bg-white p-10 flex flex-col items-center text-center rounded-lg md:w-full"
          >
            <img src={card.image} alt="" className="w-36 h-36 mb-4" />
            <h6 className="font-semibold text-brand-color text-lg">
              {card.title}
            </h6>
            <p className="text-sm text-gray-600 px-5">{card.description}</p>
          </div>
        ))}
    </div>
  );
};

export default Cards;
