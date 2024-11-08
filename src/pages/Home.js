import React from 'react'
import SwiperBanner from '../contents/SwiperBanner'
import Boardlist from '../contents/Boardlist'
import allData from '../data/allData.json'

export default function Home() {
  return (
    <div>
      <SwiperBanner datakey={ allData.bannerData }></SwiperBanner>
      <Boardlist datakey={allData.mainPagetitle}></Boardlist>
      </div>
  )
}
