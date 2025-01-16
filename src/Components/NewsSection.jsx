import React from "react";

const NewsSection = () => {
  const newsData = [
    {
      image: "", // Rasm URL'ini almashtiring
      date: "10/05/2024",
      author: "admin tomonidan",
      title: "Qanday qilib mukammal gadjetlarni tanlash mumkin",
      description:
        "Go'zal vodiyning bug' bilan to'lganda va meridian quyoshi tepaga urilganda...",
    },
    {
      image: "./",
      date: "10/05/2024",
      author: "admin tomonidan",
      title: "Zamonaviy texnologiyalardan qanday foydalanish kerak",
      description:
        "Texnologiyalar hayotimizni qanday o'zgartirishi haqida qiziqarli hikoyalar...",
    },
    {
      image: "./",
      date: "10/05/2024",
      author: "admin tomonidan",
      title: "Kreativ g'oyalarni amalga oshirish yo'llari",
      description:
        "Ko'plab yangi kashfiyotlar yaratish jarayonida qanday qiyinchiliklarga duch kelinadi...",
    },
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-4">
          Yangiliklar
        </h2>
        <p className="text-gray-500 text-center mb-8">
          Ekologik Toza Uyqu Mahsulotlari
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsData.map((news, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <img
                src={news.image}
                alt={news.title}
                className="w-full h-52 object-cover"
              />
              <div className="p-4">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <span>{news.date}</span>
                  <span className="mx-2">|</span>
                  <span>{news.author}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {news.title}
                </h3>
                <p className="text-sm text-gray-600">{news.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
