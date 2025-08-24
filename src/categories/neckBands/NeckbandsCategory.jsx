import React from 'react'
import MainTemplate from '../MainTemplate'
import neckBandsList from '../../productslist/neckBands/neckBands'


function NeckbandsCategory() {
  return (
    <>
      <div className='md:w-screen md:h-[200vh]  pl-8 pt-[150px]'>
        <div className='text-2xl text-black font-bold'>Neckbands</div>
        <div className='mt-2 flex flex-wrap '>
          {
            neckBandsList.map((product) => (
              <MainTemplate
                prop={product}
                key={product.id}
              />
            ))
          }
        </div>
      </div>
    </>
  )
}

export default NeckbandsCategory