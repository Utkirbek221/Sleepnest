import React, { useState } from 'react';
import useAllItems from './Data';
import { FaRegHeart } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { IoMdSearch } from 'react-icons/io';
import { NavLink } from 'react-router-dom';

export default function CollectionBig() {
  const { t } = useTranslation();
  const allItems = useAllItems();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterSeason, setFilterSeason] = useState('all');
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const filteredItems = allItems.filter(item => {
    const matchesSearch = item.text.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSeason = filterSeason === 'all' || item.season === filterSeason;
    return matchesSearch && matchesSeason;
  });

  return (
    <div className="flex mt-[150px] mb-[150px] w-full max-md:flex-col max-md:mt-[95px] max-sm:mt-[75px]">
      <div className="w-[35%] px-[20px] max-md:w-full">
        <form className="flex items-center justify-between p-2 bg-[#e6e6e6] rounded-[20px] w-[80%] max-md:w-full mb-[20px]">
          <input
            type="text"
            placeholder={t("collectionBig.pls")}
            className="focus:outline-none bg-[#e6e6e6] w-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className='bg-[red] text-[#fff] p-3 rounded-[50%]'>
            <IoMdSearch />
          </div>
        </form>
        <h2 className="font-bold text-[20px] mb-[20px] max-md:hidden">{t("collectionBig.text")}</h2>
        <div className="space-y-[10px] max-md:hidden">
          <p
            className={`cursor-pointer ${filterSeason === 'all' ? 'text-[#a17f4a] ' : ''}`}
            onClick={() => setFilterSeason('all')}
          >
            {t("collectionBig.filter")}
          </p>
          <p
            className={`cursor-pointer ${filterSeason === 'winter' ? 'text-[#a17f4a] ' : ''}`}
            onClick={() => setFilterSeason('winter')}
          >
            {t("collectionBig.filter2")}
          </p>
          <p
            className={`cursor-pointer ${filterSeason === 'autumn' ? 'text-[#a17f4a] ' : ''}`}
            onClick={() => setFilterSeason('autumn')}
          >
            {t("collectionBig.filter3")}
          </p>
          <p
            className={`cursor-pointer ${filterSeason === 'summer' ? 'text-[#a17f4a] ' : ''}`}
            onClick={() => setFilterSeason('summer')}
          >
            {t("collectionBig.filter4")}
          </p>
        </div>
        <div className='hidden max-md:grid grid-cols-2 gap-[10px] mb-[50px] '>
          <button className={`cursor-pointer p-2 bg-[black] text-[white] rounded-lg ${filterSeason === 'all' ? 'text-[#a17f4a] bg-[red]' : ''}`}
            onClick={() => setFilterSeason('all')}>
            {t("collectionBig.filter")}
          </button>
          <button className={`cursor-pointer p-2 bg-[black] text-[white] rounded-lg ${filterSeason === 'winter' ? 'text-[#a17f4a] bg-[red]' : ''}`}
            onClick={() => setFilterSeason('winter')}>
            {t("collectionBig.filter2")}
          </button>
          <button className={`cursor-pointer p-2 bg-[black] text-[white] rounded-lg ${filterSeason === 'autumn' ? 'text-[#a17f4a] bg-[red]' : ''}`}
            onClick={() => setFilterSeason('autumn')}>
            {t("collectionBig.filter3")}
          </button>
          <button className={`cursor-pointer p-2 bg-[black] text-[white] rounded-lg ${filterSeason === 'summer' ? 'text-[#a17f4a] bg-[red]' : ''}`}
            onClick={() => setFilterSeason('summer')}>
            {t("collectionBig.filter4")}
          </button>
        </div>
      </div>
      <div className="px-[20px] ">
        <div className="grid grid-cols-4 gap-[30px] max-lg:grid-cols-3 max-md:grid-cols-2">
          {filteredItems.map((item) => (
            <div key={item.id} className="">
              <div className="cursor-pointer relative">
                <NavLink to={`/infoitem/${item.id}`}>
                  <img
                    onClick={scrollToTop}
                    src={item.img}
                    alt=""
                    className="w-full h-auto rounded-[15px]"
                  />
                </NavLink>
                <button
                  className="absolute top-[10px] right-[10px] bg-[#d4d4d4] w-[40px] h-[40px] max-md:w-[30px] max-md:h-[30px] rounded-full flex justify-center items-center"
                >
                  <FaRegHeart className="text-[20px] text-[red] max-md:text-[15px]" />
                </button>
              </div>
              <p className="text-start mt-[15px] max-md:text-[14px]">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
