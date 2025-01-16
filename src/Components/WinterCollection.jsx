import React from 'react'
import { useTranslation } from 'react-i18next'

export default function WinterCollection({ text }) {
    const { t } = useTranslation();
    return (
        <div className='container m-auto mt-[100px]'>
            <div className='text-center'>
                <h1 className='text-[35px] font-bold mb-[30px]'>
                    {text} {t("winterCollection.text")}
                </h1>
                <p className='text-[16px] mb-[80px]'>{t("winterCollection.title")}</p>
            </div>
        </div>
    )
}
