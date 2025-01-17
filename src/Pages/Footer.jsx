import React from "react";
import img from "../IMG/HeaderLogo.png";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Footer = () => {
  const { t } = useTranslation();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <footer className="bg-white text-gray-700 pt-8">
      <div className="container grid grid-cols-4 max-md:grid-cols-1 gap-8 items-start">
        <div>
          <Link to="/" onClick={scrollToTop} className="flex items-center mb-4">
            <img src={img} alt="" className="w-full h-auto" />
          </Link>
          <p className="text-sm">
            {t("footer.text")}
          </p>
        </div>
        <div className="mt-[25px] flex flex-col justify-start items-center max-md:items-start">
          <h2 className="font-bold text-lg mb-4 w-[40%] text-start">{t("footer.text2")}</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-red-400">
                {t("footer.text3")}
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-400">
                {t("footer.text4")}
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-400">
                {t("footer.text5")}
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-400">
                {t("footer.text6")}
              </a>
            </li>
          </ul>
        </div>
        <div className="mt-[25px] gap-3 flex flex-col text-[14px] text-[#4e4e4e]">
          <h2 className="font-bold text-lg">{t("footer.text7")}</h2>
          <p>{t("footer.text8")}</p>
          <p>{t("footer.text9")}</p>
          <p>{t("footer.text10")}</p>
          <p>+998 94 033 72 12</p>
        </div>
        <div className="mt-[25px] w-full flex flex-col gap-3">
          <h2 className="font-bold text-lg ">{t("footer.text11")}</h2>
          <form
            className="flex items-center space-x-2 border border-gray-300 p-2 rounded-lg focus-within:border-red-500 focus-within:ring-1 focus-within:ring-red-500 "
          >
            <input
              type="email"
              placeholder={t("footer.pls")}
              className="w-full px-3 py-1 rounded-lg focus:outline-none"
            />
            <button
              type="submit"
              className="bg-red-500  py-2 px-4 text-white rounded-lg hover:bg-red-600 text-[13px] font-serif transition duration-300 ease-in-out"
            >
              {t("footer.btn")}
            </button>
          </form>
          <p className="text-sm mt-2">{t("footer.text12")}</p>
        </div>
      </div>
      <div className="bg-black text-[#4e4e4e] text-start py-4 mt-12 min-h-full ">
        <p className="text-sm container">
          © 2024 {t("footer.text13")}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
