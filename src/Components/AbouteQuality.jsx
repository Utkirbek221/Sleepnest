import React from 'react'
import { useTranslation } from 'react-i18next'


export default function AbouteQuality({ img }) {
    const { t } = useTranslation();
    return (
        <div className='container'>
            <div className=' m-auto mt-[100px] max-xl:mt-[300px] max-md:mt-[250px] max-sm:mt-[120px] hover bg-[rgb(70,67,81)] mb-[100px]  rounded-[30px]'>
                <div className='p-[70px] max-md:p-[20px] relative flex justify-between max-md:flex-col items-center gap-[30px] max-xl:pt-[300px] max-lg:pt-[200px] max-md:pt-[250px] max-sm:pt-[160px]'>
                    <div className='max-md:text-center'>
                        <p className='text-[90px] font-[800px] m-[0_0_20px] max-sm:m-[0px] text-[#fff] max-lg:text-[50px] max-sm:text-[25px]'>100%</p>
                        <p className='text-[20px] text-[#fff] max-sm:text-[14px]'>{t('abouteQuality.text')}</p>
                    </div>
                    <img src={img} alt="" className='w-[800px] h-auto absolute left-[20%] max-xl:top-[-320px] max-xl:w-[900px] max-xl:left-[80px] max-lg:top-[-300px] max-lg:w-[700px] max-lg:left-[80px] max-md:left-0 max-md:top-[-220px] max-sm:left-0 max-sm:top-[-100px]' />
                    <div className='text-[#fff] max-md:text-center'>
                        <h1 className='text-[30px] font-[600] m-[0_0_20px] max-w-[400px] max-md:text-[24px] max-sm:text-[18px]'>"{t('abouteQuality.text2')}"</h1>
                        <p className='mb-[20px] max-w-[400px] max-md:w-full text-[16px] max-md:text-[14px] max-sm:text-[14px]'>{t('abouteQuality.title')}</p>
                        <button className='p-[12px_35px] rounded-[15px] bg-[#fff] text-[#000] cursor-pointer'>
                            {t('abouteQuality.btn')}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
