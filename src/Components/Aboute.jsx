import React from 'react'
import { useTranslation } from 'react-i18next'
import { BiBadgeCheck } from 'react-icons/bi'
import { IoWalletOutline } from 'react-icons/io5'
import { PiTruck } from 'react-icons/pi'
import { TfiHeadphoneAlt } from 'react-icons/tfi'

export default function Aboute() {
    const { t } = useTranslation();
    const stl = "flex justify-center items-center gap-[20px] max-lg:flex-col";
    const p = "";
    const p1 = "text-[16px] max-lg:text-center max-lg:text-[14px] max-md:text-[16px] max-sm:text-[10px] mb-[5px]";
    const p2 = "text-[14px] text-[#aaa] max-w-[250px] max-lg:max-w-[300px] max-lg:text-center max-lg:text-[11px] max-md:text-[14px] max-sm:text-[8px]";
    return (
        <div className='container m-auto mt-[100px] max-md:mt-[30px] grid grid-cols-4 gap-[20px] max-md:grid-cols-2'>
            <div className={stl}>
                <PiTruck className='text-[40px] max-sm:text-[30px] text-[red]'/>
                <div className={p}>
                    <p className={p1}>{t('aboute.text')}</p>
                    <p className={p2}>{t('aboute.title')}</p>
                </div>
            </div>
            <div className={stl}>
                <BiBadgeCheck className='text-[40px] max-sm:text-[30px] text-[red]'/>
                <div className={p}>
                    <p className={p1}>{t('aboute.text2')}</p>
                    <p className={p2}>{t('aboute.title2')}</p>
                </div>
            </div>
            <div className={stl}>
                <TfiHeadphoneAlt className='text-[40px] max-sm:text-[30px] text-[red]'/>
                <div className={p}>
                    <p className={p1}>{t('aboute.text3')}</p>
                    <p className={p2}>{t('aboute.title3')}</p>
                </div>
            </div>
            <div className={stl}>
                <IoWalletOutline className='text-[40px] max-sm:text-[30px] text-[red]'/>
                <div className={p}>
                    <p className={p1}>{t('aboute.text4')}</p>
                    <p className={p2}>{t('aboute.title4')}</p>
                </div>
            </div>
        </div>
    )
}
