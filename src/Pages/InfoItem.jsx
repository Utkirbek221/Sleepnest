import React from 'react'
import { useParams } from 'react-router-dom'
import useAllItems from './Data'
import { useTranslation } from 'react-i18next'
import { IoStarOutline } from 'react-icons/io5';
import Collection from '../Components/Collection';

export default function InfoItem() {
    const { id } = useParams();
    const allItems = useAllItems().find((item) => item.id == id);
    const { t } = useTranslation();
    return (
        <>
            <div className='container m-auto mt-[150px] w-full max-md:mt-[120px] max-sm:mt-[80px]'>
                <div className='grid grid-cols-2 max-md:grid-cols-1 gap-[40px] items-center mb-[100px] max-md:gap-[20px] max-md:mb-[50px]'>
                    <div className='w-full'>
                        <img src={allItems.img} alt="" className='w-full h-auto rounded-[30px]' />
                    </div>
                    <div>
                        <h1 className='text-[1.5rem] max-md:text-[1.2rem] font-bold mb-[20px]'>{allItems.text}</h1>
                        <table className='w-full max-md:text-[12px]'>
                            <tr>
                                <td>{t("infoItem.td")}</td>
                                <td>{t("infoItem.td2")}</td>
                            </tr>
                            <tr>
                                <td>{t("infoItem.td3")}</td>
                                <td>{t("infoItem.td4")}</td>
                            </tr>
                            <tr>
                                <td>{t("infoItem.td5")}</td>
                                <td>{t("infoItem.td6")}</td>
                            </tr>
                            <tr>
                                <td>{t("infoItem.td7")}</td>
                                <td>{t("infoItem.td8")}</td>
                            </tr>
                            <tr>
                                <td>{t("infoItem.td9")}</td>
                                <td>{t("infoItem.td10")}</td>
                            </tr>
                            <tr>
                                <td>{t("infoItem.td11")}</td>
                                <td>{t("infoItem.td12")}</td>
                            </tr>
                        </table>
                        <div className='flex gap-[10px] mt-[20px] text-[red] max-md:text-[13px] '>
                            <p>{t("infoItem.text2")}</p>
                            <p>{allItems.fasil} {t("infoItem.text3")}</p>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center items-start w-full mb-[150px] max-md:flex-col max-md:mb-[50px]'>
                    <div className='flex flex-col justify-center items-start w-[50%] max-sm:w-full max-md:mb-[40px]'>
                        <h1 className='text-[1.5rem] max-md:text-[0.9rem] font-bold mb-[20px] text-center w-full'>{t("inforegistor.text")}</h1>
                        <p>{t("inforegistor.text2")}</p>
                    </div>
                    <div className='flex flex-col justify-center items-start w-[50%] max-sm:w-full  gap-[30px] max-md:gap-[10px]'>
                        <h1 className='text-[1.5rem] max-md:text-[0.9rem] font-bold mb-[20px] text-center w-full'>{t("inforegistor.text3")}</h1>
                        <div>
                            <h1 className='mb-[15px]'>{t("inforegistor.input")}</h1>
                            <div className='flex gap-[10px]'>
                                {[1, 2, 3, 4, 5].map(i => (
                                    <IoStarOutline  key={i} className={`text-[${i <= allItems.rating ? '#F2C94C' : '#BABABA'}] text-[20px]`} />
                                ))}
                            </div>
                        </div>
                        <div className='w-full gap-[15px] flex flex-col'>
                            <h1 className='font-[300]'>{t("inforegistor.input2")}</h1>
                            <input className='bg-[#ddd] p-[10px] mt-[5px] rounded-[20px] w-full' type="text" />
                        </div>
                        <div className='w-full gap-[15px] flex flex-col'>
                            <h1 className='font-[300]'>{t("inforegistor.input3")}</h1>
                            <input className='bg-[#ddd] p-[10px] mt-[5px] rounded-[20px] w-full' type="text" />
                        </div>
                        <div className='w-full gap-[15px] flex flex-col'>
                            <h1 className='font-[300]'>{t("inforegistor.input4")}</h1>
                            <textarea className='bg-[#ddd] p-[10px] mt-[5px] rounded-[20px] w-full h-[150px]' type="text" />
                        </div>
                        <button className='p-[12px_35px] rounded-[15px] bg-[red] text-[#fff] cursor-pointer w-full'>{t("inforegistor.btn")}</button>
                    </div>
                </div>
                <div className='text-center mb-[50px] max-md:mb-[0px]'>
                    <h1 className='text-[2.5rem] font-bold text-center w-full mb-[50px] max-md:text-[1.2rem] max-md:mb-[10px]'>{t("infoother.text")}</h1>
                    <Collection items={useAllItems().slice(0, 5)} texthidden="hidden" />
                </div>
            </div >
        </>
    )
}
