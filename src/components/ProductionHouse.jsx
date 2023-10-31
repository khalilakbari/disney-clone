import React from 'react'
import disney from '../assets/Images/Disney-logo-png.png'
import pixer from '../assets/Images/Pixar.svg.png'
import marvel from '../assets/Images/Marvel-Comics-Logo-1983.png'
import starwar from '../assets/Images/pngimg.com - star_wars_logo_PNG18.png'
import nationalGeo from '../assets/Images/1200px-Nat_Geo_Wild_Canada.svg.png'

import disneyV from '../assets/video/disney.gif'
import pixerV from '../assets/video/pixer.gif'
import marvelV from '../assets/video/marvel.gif'
import starwarV from '../assets/video/Star Wars.gif'
import nationalGeoV from '../assets/video/nationalGeo.gif'

function ProductionHouse() {
    const productionHouseList = [
        {
            id: 1,
            image: disney,
            gif: disneyV
        },
        {
            id: 2,
            image: pixer,
            gif: pixerV
        },
        {
            id: 3,
            image: marvel,
            gif: marvelV
        },
        {
            id: 4,
            image: starwar,
            gif: starwarV
        },
        {
            id: 5,
            image: nationalGeo,
            gif: nationalGeoV
        },
    ]

  return (
    <div className='flex justify-evenly gap-5 px-8 py-8 lg:py-16'>
       {productionHouseList.map(item => (
        <div className='relative w-72 h-auto sm:h-36 shadow-lg shadow-slate-800 rounded-md border-2 border-gray-600 hover:border-0
        hover:scale-110 transition-all duration-200 ease-in cursor-pointer bg-slate-700'>
           <img src={item.image} className='w-full h-full object-contain z-10 hover:opacity-60 transition-all'/>
           <img src={item.gif} className='w-full h-full absolute top-0 rounded-lg -z-10'/>
        </div>
       ))}
     
    </div>
  )
}

export default ProductionHouse