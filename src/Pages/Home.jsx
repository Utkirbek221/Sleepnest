import React from 'react'
import Main from './Main'
import Aboute from '../Components/Aboute'
import AbouteQuality from '../Components/AbouteQuality'
import img from '../IMG/FasilSpalniy.png'
import img2 from '../IMG/FasilSpalniy2.png'
import img3 from '../IMG/FasilSpalniy3.png'
import { useTranslation } from 'react-i18next'
import useAllItems from './Data'
import Collection from '../Components/Collection'
import NewsSection from '../Components/NewsSection'


export default function Home() {

  const allItems = useAllItems();
  const winter = allItems.filter(item => item.season === 'winter');
  const autumn = allItems.filter(item => item.season === 'autumn');
  const summer = allItems.filter(item => item.season === 'summer');
  const { t } = useTranslation();
  return (
    <>
      <Main />
      <Aboute />
      <AbouteQuality img={img} bg="bg-[rgb(70,67,81)]" />
      <Collection items={winter} text={t('winterCollection.fasil')} />
      <AbouteQuality img={img2} bg="bg-[rgb(127,84,179)]" />
      <Collection items={autumn} text={t('winterCollection.fasil2')} />
      <AbouteQuality img={img3} bg="bg-[rgb(35,111,72)]" />
      <Collection items={summer} text={t('winterCollection.fasil3')} />
      <NewsSection />

    </>
  )
}
