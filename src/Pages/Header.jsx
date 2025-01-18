import React, { useEffect, useState } from 'react'
import logo from "../IMG/HeaderLogo.png"
import { useTranslation } from 'react-i18next';
import { Link, NavLink } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';
import { RiMenu2Line } from 'react-icons/ri';
import { IoClose } from 'react-icons/io5';

export default function Header() {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);

  const [isOpen, setIsOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const changeLanguage = (lang) => {
    localStorage.setItem('lang', lang);
    i18n.changeLanguage(lang);
    setLanguage(lang);
  };

  useEffect(() => {
    const savedLang = localStorage.getItem('lang');
    if (savedLang) {
      i18n.changeLanguage(savedLang);
      setLanguage(savedLang);
    }
  }, [i18n]);

  return (
    <>
      <div className='z-20 bg-[#fff] fixed top-0 left-0 right-0 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)]'>
        <div className='flex justify-between items-center container pb-[10px] pt-[10px]  '>
          <Link onClick={scrollToTop} to={"/"} className='w-[180px] h-[59px] max-sm:w-[150px] max-sm:h-[45px]'>
            <img src={logo} alt="" />
          </Link>
          <div className='flex items-center justify-center gap-[20px] max-lg:gap-[10px]'>
            <div className='max-md:hidden text-[#00000098] flex gap-[30px] max-lg:gap-[15px] text-[20px] font-[300] max-lg:text-[16px]'>
              <NavLink onClick={scrollToTop} className={({ isActive }) =>
                isActive
                  ? "text-[#a17f4a]"
                  : "text-gray-700 hover:text-[#a17f4a]"
              } to={"/"}>{t("header.text")}</NavLink>
              <NavLink onClick={scrollToTop} className={({ isActive }) =>
                isActive
                  ? "text-[#a17f4a]"
                  : "text-gray-700 hover:text-[#a17f4a]"
              } to={"/collection"}>{t("header.text2")}</NavLink>
              <NavLink onClick={scrollToTop} className={({ isActive }) =>
                isActive
                  ? "text-[#a17f4a]"
                  : "text-gray-700 hover:text-[#a17f4a]"
              } to={"/aboutus"}>{t("header.text3")}</NavLink>
              <NavLink onClick={scrollToTop} className={({ isActive }) =>
                isActive
                  ? "text-[#a17f4a]"
                  : "text-gray-700 hover:text-[#a17f4a]"
              } to={"/contacts"}>{t("header.text4")}</NavLink>
            </div>
            <div className='cursor-pointer max-md:hidden relative'>
              <NavLink to={"/saved"}>
                <FaHeart className='text-[1.5rem] text-[red] max-lg:text-[1rem]' />
              </NavLink>
              <div className='bg-[black] absolute top-[-8px] left-[15px] text-[#fff] w-[15px] h-[15px] flex justify-center items-center text-[10px] rounded-full'>
                0
              </div>
            </div>
            <select
              className='text-[#ffffffa6] rounded-[20px] p-[5px_7px] cursor-pointer font-[600] text-[20px] bg-[#a17f4a] max-lg:text-[15px] max-lg:p-[3px_5px]'
              onChange={(e) => changeLanguage(e.target.value)}
              value={language}
            >
              <option value="uz">O'z</option>
              <option value="ru">Ru</option>
              <option value="en">En</option>
            </select>
            <div className='hidden max-md:flex text-[25px]'>
              <RiMenu2Line onClick={toggleMenu} className='cursor-pointer' />
            </div>
          </div>
          <div className={`flex  justify-center items-start fixed top-0 right-0 w-full h-screen bg-[#fff] transform transition-transform duration-[0.8s] ${isOpen ? 'translate-x-0' : 'translate-x-full'
            }`}>
            <IoClose onClick={toggleMenu} className='cursor-pointer absolute top-[20px] right-[20px] text-[30px]' />
            <div>
              <div className=' text-[#00000098] flex flex-col text-center gap-[30px] text-[20px] font-[300] mt-[100px]'>
                <NavLink onClick={() => { scrollToTop(); toggleMenu(); }} className={({ isActive }) =>
                  isActive
                    ? "text-[#a17f4a]"
                    : "text-gray-700 hover:text-[#a17f4a]"
                } to={"/"}>{t("header.text")}</NavLink>
                <NavLink onClick={() => { scrollToTop(); toggleMenu(); }} className={({ isActive }) =>
                  isActive
                    ? "text-[#a17f4a]"
                    : "text-gray-700 hover:text-[#a17f4a]"
                } to={"/collection"}>{t("header.text2")}</NavLink>
                <NavLink onClick={() => { scrollToTop(); toggleMenu(); }} className={({ isActive }) =>
                  isActive
                    ? "text-[#a17f4a]"
                    : "text-gray-700 hover:text-[#a17f4a]"
                } to={"/aboutus"}>{t("header.text3")}</NavLink>
                <NavLink onClick={() => { scrollToTop(); toggleMenu(); }} className={({ isActive }) =>
                  isActive
                    ? "text-[#a17f4a]"
                    : "text-gray-700 hover:text-[#a17f4a]"
                } to={"/contacts"}>{t("header.text4")}</NavLink>
              </div>
              <div className='cursor-pointer relative  flex justify-center items-center mt-[30px]'>
                <div>
                  <FaHeart className='text-[1.5rem] text-[red]' />
                </div>
                <div className='bg-[black] absolute top-[-8px] ml-[20px] text-[#fff] w-[20px] h-[20px] flex justify-center items-center text-[10px] rounded-full'>
                  0
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
