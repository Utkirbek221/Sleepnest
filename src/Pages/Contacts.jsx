import React from 'react';
import { useTranslation } from 'react-i18next';
import { BiPhoneCall } from 'react-icons/bi';
import { MdOutlineSms } from 'react-icons/md';
import { SlLocationPin } from 'react-icons/sl';

export default function Contacts() {
    const { t } = useTranslation();
    return (
        <div className='w-full container m-auto mt-[150px] max-md:mt-[100px] max-sm:mt-[80px]'>
            <div className='w-full flex justify-between items-center gap-[20px] max-lg:flex-col max-lg:gap-[50px]'>
                <div className='w-[40%] max-lg:w-full'>
                    <h1 className='text-[32px] font-semibold mb-[50px] max-md:text-[20px] max-md:mb-[20px]'>{t("contact.text")}</h1>
                    <div className='flex flex-col'>
                        <input className='bg-[#E3E4E4] mb-[20px] p-[20px] rounded-[25px]' type="text" placeholder={t("contact.pls")} />
                        <input className='bg-[#E3E4E4] mb-[20px] p-[20px] rounded-[25px]' type="text" placeholder={t("contact.pls2")} />
                        <textarea className='bg-[#E3E4E4] mb-[20px] p-[20px] rounded-[25px]' placeholder={t("contact.pls3")} cols="30" rows="5"></textarea>
                        <button className='mb-[20px] p-[15px_60px] w-[50%] max-md:p-[10px_30px] rounded-[25px] bg-[red] text-[#fff]'>{t("contact.btn")}</button>
                    </div>
                </div>
                <div className='w-[55%] max-lg:w-full h-[600px]'>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d3347.2563917798857!2d64.459964!3d39.747453!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMznCsDQ0JzUwLjgiTiA2NMKwMjcnMzUuOSJF!5e1!3m2!1sru!2sus!4v1737178197588!5m2!1sru!2sus"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
            <div className='w-full flex justify-evenly items-center gap-[20px] max-lg:flex-col max-lg:gap-[50px] mt-[100px] mb-[150px] max-md:mt-[50px] max-md:mb-[50px] max-md:justify-start max-md:items-start'>
                <div className='flex justify-center items-center gap-[30px]'>
                    <MdOutlineSms className='text-[red] text-[40px]' />
                    <p className='max-md:text-[12px]'>Email: sleepnest@gmail.com</p>
                </div>
                <div className='flex justify-center items-center gap-[30px] '>
                    <BiPhoneCall className='text-[red] text-[40px]' />
                    <div className='flex justify-center items-center max-md:flex-col gap-[15px]'>
                        <p className='max-md:text-[12px]'>Тел: +998 94 033 72 12</p>
                        <p className='max-md:text-[12px]'>+998 91 777 73 68</p>
                    </div>
                </div>
                <div className='flex justify-center items-center gap-[30px]'>
                    <SlLocationPin className='text-[red] text-[40px]' />
                    <p className='max-md:text-[12px]'>{t("contact.text2")}</p>
                </div>
            </div>
        </div>
    );
}
