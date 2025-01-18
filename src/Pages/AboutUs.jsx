import React from 'react'
import { useTranslation } from 'react-i18next'
import img from '../IMG/AboutImg.png'

export default function AboutUs() {
  const { t } = useTranslation()
  return (
    <div className='container m-auto  mt-[150px] mb-[120px] max-sm:mt-[80px] max-sm:mb-[50px] flex w-full justify-between items-center gap-[30px] max-lg:flex-col max-lg:gap-[50px]'>
      <div className='w-[40%] max-lg:order-2 max-lg:w-full'>
        <h1 className='text-[35px] max-sm:text-[20px] '>{t("aboutus.text")}</h1>
        <div className='text-[#696969] font-[300] max-w-[500px] max-lg:max-w-full flex flex-col gap-[10px] mt-[25px] max-sm:text-[13px]'>
          <p>{t("aboutus.text2")}</p>
          <p>{t("aboutus.text3")}</p>
          <p>{t("aboutus.text4")}</p>
          <p>{t("aboutus.text5")}</p>
          <p>{t("aboutus.text6")}</p>
          <p>{t("aboutus.text7")}</p>
          <p>{t("aboutus.text8")}</p>
          <p>{t("aboutus.text9")}</p>
          <p>{t("aboutus.text10")}</p>
          <p>{t("aboutus.text11")}</p>
          <p>{t("aboutus.text12")}</p>
        </div>
      </div>
      <div className='rounded-[20px] shadow overflow-hidden max-lg:order-1 max-lg:w-full'>
        <img src={img} alt="" className='w-full h-auto'/>
      </div>
    </div>
  )
}
