import React from "react";
import img from "../IMG/NewsImg.png";
import img2 from "../IMG/newsImg2.png";
import img3 from "../IMG/NewsImg3.png";
import { useTranslation } from "react-i18next";


const NewsSection = () => {
  const { t } = useTranslation();
  const newsData = [
    {
      image: img,
      date: "10/05/2024",
      author: t("news.admin1"),
      title: t("news.text3"),
      description:
        t("news.text4"),
    },
    {
      image: img2,
      date: "10/05/2024",
      author: t("news.admin1"),
      title: t("news.text5"),
      description:
        t("news.text6"),
    },
    {
      image: img3,
      date: "10/05/2024",
      author: t("news.admin1"),
      title: t("news.text7"),
      description:
        t("news.text8"),
    },
  ];

  return (
    <section className="py-32 container">
      <div className=" mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-7">
          {t("news.text")}
        </h2>
        <p className="text-gray-500 text-center mb-[80px]">
          {t("news.text2")}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
          {newsData.map((news, index) => (
            <div
              key={index}
              className="bg-white  overflow-hidden"
            >
              <img
                src={news.image}
                alt={news.title}
                className="w-full h-52 object-cover rounded-lg"
              />
              <div className="p-4">
                <div className="flex items-center gap-5 text-sm text-gray-500 mb-6">
                  <span>{news.date}</span>
                  <span>{news.author}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
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
