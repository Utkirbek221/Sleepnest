import React from "react";
import img from "../IMG/NewsImg.png";
import img2 from "../IMG/newsImg2.png";
import img3 from "../IMG/NewsImg3.png";


const NewsSection = () => {
  const newsData = [
    {
      image: img,
      date: "10/05/2024",
      author: "admin tomonidan",
      title: "Qanday qilib mukammal gadjetlarni tanlash mumkin",
      description:
        "Go'zal vodiyning bug' bilan to'lganda va meridian quyoshi tepaga urilganda...",
    },
    {
      image: img2,
      date: "10/05/2024",
      author: "admin tomonidan",
      title: "Zamonaviy texnologiyalardan qanday foydalanish kerak",
      description:
        "Texnologiyalar hayotimizni qanday o'zgartirishi haqida qiziqarli hikoyalar...",
    },
    {
      image: img3,
      date: "10/05/2024",
      author: "admin tomonidan",
      title: "Kreativ g'oyalarni amalga oshirish yo'llari",
      description:
        "Ko'plab yangi kashfiyotlar yaratish jarayonida qanday qiyinchiliklarga duch kelinadi...",
    },
  ];

  return (
    <section className="py-12 container">
      <div className=" mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-4">
          Yangiliklar
        </h2>
        <p className="text-gray-500 text-center mb-8">
          Ekologik Toza Uyqu Mahsulotlari
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
          {newsData.map((news, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden"
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
