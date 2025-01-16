import React from "react";
import img from "../IMG/HeaderLogo.png";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 pt-8">
      <div className="container mx-auto px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Logo va Tavsif */}
        <div>
          <div className="flex items-center mb-4">
            <img src={img} alt="" />
          </div>
          <p className="text-sm">
            “Ekologik Toza Uyqu Mahsulotlari” ko'p yillardan buyon butun dunyoda
            foydalanish uchun paxta matolari ishlab chiqaradigan kompaniya
            hisoblanadi.
          </p>
        </div>

        {/* Menyu */}
        <div>
          <h2 className="font-bold text-lg mb-4">menyu</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-gray-900">
                Bosh sahifa
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">
                To'plam
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">
                Biz haqimizda
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">
                Kontaktlar
              </a>
            </li>
          </ul>
        </div>

        {/* Kontaktlar */}
        <div>
          <h2 className="font-bold text-lg mb-4">Kontaktlar</h2>
          <p>Buxoro, st. Alpomish 80.</p>
          <p>Email: sleepnest@gmail.com</p>
          <p>Telegram: sleepnest</p>
          <p>Telefon: +998 94 033 72 12</p>
        </div>

        {/* Obuna */}
        <div>
          <h2 className="font-bold text-lg mb-4">Elektron pochtamizga obuna bo'ling</h2>
          <form className="flex items-center space-x-2">
            <input
              type="email"
              placeholder="Elektron pochtangiz"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <button
              type="submit"
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
            >
              Obuna Bo'ling
            </button>
          </form>
          <p className="text-sm mt-2">Kamida bitta ro'yxatni tanlang.</p>
        </div>
      </div>

      {/* Pastki qator */}
      <div className="bg-black text-white text-center py-4 mt-8 min-h-full">
        <p className="text-sm">
          © 2024 MChJ Ekologik Toza Uyqu Mahsulotlari Barcha huquqlar himoyalangan.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
