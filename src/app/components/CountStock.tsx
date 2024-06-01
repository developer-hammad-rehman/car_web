import React from 'react'

export default function CountStock() {
  return (
    <div className='bg-white  py-6 px-10 w-full flex justify-between items-center'>
      <div>
        <h1 className='text-sm sm:text-4xl font-bold  text-gray-700'>27,600</h1>
        <p className='text-xs sm:text-sm text-gray-700'>Cars For Sale</p>
      </div>
      <div>
        <h1 className='text-sm sm:text-4xl font-bold  text-gray-700'>6,500</h1>
        <p className='text-xs sm:text-sm text-gray-700'>Dealer Reviews</p>
      </div>
      <div>
        <h1 className='text-sm sm:text-4xl font-bold  text-gray-700'>8,230</h1>
        <p className='text-xs sm:text-sm text-gray-700'>Visitors Pre Day</p>
      </div>
      <div>
        <h1 className='text-sm sm:text-4xl font-bold  text-gray-700'>5,250</h1>
        <p className='text-xs sm:text-sm text-gray-700'>Verified Dealers</p>
      </div>
    </div>
  )
}
