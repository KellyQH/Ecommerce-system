import React from 'react'
import Stars from '../../Stars'

function Card({price,orgPrice,title,rating,img,...props}) {
  return (
    <div>
      
    <a  class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <img src={img} style={{marginLeft: "15%",height: "120px"}}/>
  
    </a>
    <div className='text-left'>
        <p class="text-left text-2xl m-0 font-bold tracking-tight text-gray-900 dark:text-white">{title}</p>
        <div className='flex'>

            <p className='p-0'>${price}</p>
            <p className='line-through'>${orgPrice}</p>
        </div>
        <p class="font-normal text-gray-700 dark:text-gray-400"><Stars stars={Math.round(rating)}/></p>
    </div>
    </div>
  )
}

export default Card
