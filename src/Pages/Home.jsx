import React from 'react'
import Main from './Main'
import Aboute from '../Components/Aboute'
import AbouteQuality from '../Components/AbouteQuality'
import img from '../IMG/FasilSpalniy.png'
import img2 from '../IMG/FasilSpalniy2.png'
import WinterCollection from '../Components/WinterCollection'
import { useTranslation } from 'react-i18next'


export default function Home() {
  const { t } = useTranslation();
  return (
    <>
      <Main/>
      <Aboute/>
      <AbouteQuality img={img}/>
      <WinterCollection text={t('winterCollection.fasil')}/>

    </>
  )
}
