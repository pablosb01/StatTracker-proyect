import React from 'react'

export default function HonkaiUserCharSplash() {
  let link = 'https://raw.githubusercontent.com/Mar-7th/StarRailRes/master/'
  return (
    <div className="col-span-1 row-span-4 order-1 lg:col-span-3 lg:row-span-11 lg:overflow-hidden">
        <img src={`${link}image/character_portrait/1304.png`} alt="" className="object-cover"/>
      </div>
  )
}
