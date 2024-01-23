import React from 'react'
import MainTemplate from '../../categories/MainTemplate'
import productListWEB from '../../productslist/wirelessEarbuds/wirelessearbuds'


function WebCategory() {
  return (
    <>
    <div className='md:w-screen md:h-[200vh]  pl-8 pt-[150px]'>
        <div className='text-2xl text-black font-bold'>Wireless Earbuds</div>
        <div className='mt-2 flex flex-wrap '>

          {
            productListWEB.map((product) => (
              <MainTemplate
                usp={product.usp}
                image={product.image}
                offer={product.offer}
                rating={product.rating}
                sold={product.sold}
                price={product.price}
                discount={product.discount}
                priceBefore={product.priceBefore}
                itemName={product.itemName}
                usp2={product.usp2}
                usp3={product.usp3}

              />
            ))
          }

        </div>
      </div>
    </>
  )
}

export default WebCategory