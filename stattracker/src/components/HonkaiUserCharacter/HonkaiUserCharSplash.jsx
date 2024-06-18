import React from 'react'
import hsrlink from '../../objects/hsrlink.js'

export default function HonkaiUserCharSplash({obj}) {
  const {link} = hsrlink;

  return (
    <div className=" col-span-1 row-span-4 order-1 lg:col-span-3 lg:row-span-11 mx-auto flex justify-center">
        <img src={`${link}${obj.portrait}`} alt="" className="my-auto scale-[135%] hover:scale-[160%] transition-all duration-300 ease-in-out"/>
    </div>
  )
}
