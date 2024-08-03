import React from 'react'
import Card from './components/Card'

function BestSellingProducts() {
    const itemList = [
        {
            title: "The north coat",
            img: "./icons/the-north-coat.png",
            price: 260,
            orgPrice: 360,
            rating: 5
        },
        {
            title: "Gucci duffle bag",
            img: "./icons/gucci-duffle.png",
            price: 960,
            orgPrice: 1160,
            rating: 4

        },
        {
            title: "RGB Liquid CPU Cooler",
            img: "./icons/rgb-liquid.png",
            price: 160,
            orgPrice: 170,
            rating: 5

        },
        {
            title: "Small Bookself",
            img: "./icons/small-bookself.png",
            price: 360,
            orgPrice: 400,
            rating: 4.5

        },
    ]
  return (
    <div className='grid grid-cols-4 gap-4 mt-10'>
        {itemList.map((item,key) => {
            return     <Card orgPrice={item.orgPrice} img={item.img} rating={item.rating} price={item.price} title={item.title} />
        })}
    </div>
  )
}

export default BestSellingProducts
