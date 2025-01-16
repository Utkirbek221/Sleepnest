import React from 'react'
import { useTranslation } from 'react-i18next'
import { FaRegHeart } from 'react-icons/fa';

export default function Collection({ text,items }) {
    const { t } = useTranslation();
    return (
        <div className='container m-auto mt-[100px] pb-[50px]'>
            <div className='text-center'>
                <h1 className='text-[35px] font-bold mb-[30px] max-md:mb-[15px] max-md:text-[20px]'>
                    {text} {t("winterCollection.text")}
                </h1>
                <p className='text-[16px] mb-[80px]'>{t("winterCollection.title")}</p>
            </div>
            <div className=' grid grid-cols-5 gap-[30px] max-md:gap-[20px] max-sm:gap-[10px] max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2'>
                {items.map((item) => (
                    <div key={item.id} className="">
                        <div className='cursor-pointer relative'>
                            <img src={item.img} alt="" className='w-full h-auto rounded-[15px]' />
                            <button className='absolute top-[0px] right-[0px] bg-[#d4d4d4] w-[40px] h-[40px] max-md:w-[25px] max-md:h-[25px] max-md:right-[5px] max-md:top-[5px] rounded-[50%] flex justify-center items-center'>
                                <FaRegHeart className='text-[20px] text-[red] max-md:text-[13px]' />
                            </button>
                        </div>
                        <p className='text-start mt-[15px] max-md:text-[14px]'>{item.text}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
