import React from 'react'

const TopCards = () => {
  return (
    <div className='grid lg:grid-cols-5 gpa-4 p-4'>
      <div className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg'>
        <div className='flex flex-col w-full pb-4'>
            <p className='text-2xl font-bold'>CHF.- 7,410</p>
            <p className='text-gray-600'>Daily Revenue</p>
        </div>
        <p className='bg-green-200 flex justify-center items-center p-2 rounded-lg'>
            <span className='text-green-700 text-lg'>+39%</span>
        </p>
      </div>
      <div className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg'>
        <div className='flex flex-col w-full pb-4'>
            <p className='text-2xl font-bold'>CHF.- 10,300</p>
            <p className='text-gray-600'>Bonus</p>
        </div>
        <p className='bg-red-200 flex justify-center items-center p-2 rounded-lg'>
            <span className='text-red-700 text-lg'>-12%</span>
        </p>
      </div>
      <div className='bg-white flex justify-between w-full border p-4 rounded-lg'>
        <div className='flex flex-col w-full pb-4'>
            <p className='text-2xl font-bold'>CHF.- 85,000</p>
            <p className='text-gray-600'>Target Annual Salary</p>
        </div>
        <p className='bg-green-200 flex justify-center items-center p-2 rounded-lg'>
            <span className='text-green-700 text-lg'>+21%</span>
        </p>
      </div>
    </div>
  )
}

export default TopCards
