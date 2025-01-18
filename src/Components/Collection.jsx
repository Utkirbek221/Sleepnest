import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

export default function Collection({ text, items, texthidden }) {
    const [clickedItems, setClickedItems] = useState([]);
    const { t } = useTranslation();
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    const handleClick = (id) => {
        if (clickedItems.includes(id)) {
            setClickedItems(clickedItems.filter((item) => item !== id));
        } else {
            setClickedItems([...clickedItems, id]);
        }
    };
    return (
        <div className="container m-auto mt-[100px] pb-[50px]">
            <div className={`text-center ${texthidden}`}>
                <h1 className="text-[35px] font-bold mb-[30px] max-md:mb-[15px] max-md:text-[20px]">
                    {text} {t("winterCollection.text")}
                </h1>
                <p className="text-[16px] mb-[80px]">{t("winterCollection.title")}</p>
            </div>
            <div className="grid grid-cols-5 gap-[30px] max-md:gap-[20px] max-sm:gap-[10px] max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2">
                {items.map((item) => (
                    <div key={item.id} className="hov">
                        <div className="cursor-pointer relative">
                            <NavLink to={`/infoitem/${item.id}`}>
                                <img
                                    onClick={scrollToTop}
                                    src={item.img}
                                    alt=""
                                    className="w-full h-auto rounded-[15px] hover:scale-[1.1] duration-500"
                                />
                            </NavLink>
                            <div
                                onClick={() => handleClick(item.id)}
                                className="absolute top-[0px] right-[0px] bg-[#d4d4d4] w-[40px] h-[40px] max-md:w-[25px] max-md:h-[25px] max-md:right-[5px] max-md:top-[5px] rounded-[50%] flex justify-center items-center"
                            >
                                {clickedItems.includes(item.id) ? (
                                    <FaHeart className="text-[red]" />
                                ) : (
                                    <FaRegHeart className="text-[red]" />
                                )}
                            </div>
                        </div>
                        <p className="text-start mt-[15px] max-md:text-[14px]">{item.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
