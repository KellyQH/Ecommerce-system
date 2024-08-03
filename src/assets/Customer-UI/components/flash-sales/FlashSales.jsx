import React from 'react'
import Card from './components/Card'

function FlashSales() {
    const itemsList = [
        {
            title: "HAVIT HV-G92 Gamepad",
            img: "./icons/gaming.png",
            price: 120,
            orgPrice: 160,
            rating: 5
        },
        {
            title: "AK-900 Wired Keyboard",
            img: "./icons/keyboard.png",
            price: 120,
            orgPrice: 160,
            rating: 4

        },
        {
            title: "IPS LCD Gaming Monitor",
            img: "./icons/monitor.png",
            price: 370,
            orgPrice: 400,
            rating: 5

        },
        {
            title: "S-Series Comfort Chair",
            img: "./icons/chair.png",
            price: 375,
            orgPrice: 400,
            rating: 4.5

        },
    ]
  return (
    <div>
        
        <div className='border-8 text-left border-s-red-900 rounded-md '>
            Today's
        </div>
          <div className='flex'>
        <div>
           <h1>Flash Sales</h1> 
        </div>
        <div className="flex">
            <p>Days</p>
            <p>Hours</p>
            <p>Minutes</p>
            <p>Seconds</p>
        </div>
       

    </div>
    <div>
    <div className="flex">
            <p>03:</p>
            <p>23:</p>
            <p>19:</p>
            <p>56</p>
        </div>
        <div className='grid grid-cols-4 gap-4'>
        {
            itemsList.map((item, index) => {
                return <div >
                    <Card orgPrice={item.orgPrice} rating={item.rating} img={item.img} price={item.price} title={item.title} /> 
                 </div>
                
            })
        }
        </div>
        

    </div>

    </div>
  
  )
}

export default FlashSales