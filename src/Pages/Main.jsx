import React from 'react'
import bgImg from '../IMG/mainSpalniy.png'
import { useTranslation } from 'react-i18next';

export default function Main() {
  const { t } = useTranslation();
  return (
    <div className='container m-auto mt-[100px] '>
      <div className='w-full bg gradient rounded-[40px] flex justify-between items-center relative bg-[#fff]'>
        <img className='max-md:hidden absolute left-[-200px] top-[-50px] max-xl:left-[-140px] max-xl:top-[-80px] max-lg:top-[-40px]' src={bgImg} alt="" />
        <div className='text-[#a17f4a] flex  justify-center items-end flex-col w-full  pr-[20px] pt-[70px] pb-[300px] max-xl:pb-[150px] max-lg:pb-[100px] max-md:pb-[150px] max-sm:pr-[10px]'>
            <p className='max-xl:text-[20px] max-md:text-[20px] max-sm:text-[14px] max-md:leading-[15px]  text-[25px] leading-[20px] text-[#7a5c33]'>{t('main.text')}</p>
            <p className='max-xl:text-[35px] max-md:text-[35px] max-sm:text-[18px] max-md:leading-[10px]  text-[55px] m-[30px_0] leading-[40px]'>{t('main.text2')}</p>
            <p className='max-xl:text-[55px] max-md:text-[45px] max-sm:text-[20px] max-md:leading-[30px]  text-[95px] '>{t('main.text3')}</p>
        </div>
      </div>
    </div>
  )
}
