import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {RxSketchLogo} from 'react-icons/rx'

const Sidebar = ({children}) => {
    return (
        <div className='flex'>
            <div className='fixed w-20 h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between'>
                <div className='flex flex-col items-center'>
                    <Link href='/'>
                        <div className='bg-purple-800 text-white p-3 rounded-lg inline-block'>
                            <RxSketchLogo size={25} />
                        </div>
                    </Link>
                    <span className='border-b-[1px] border-gray-200 w-full p-2'></span>
                    
                </div>
            </div>
            <main className='ml-20 w-full'>{children}</main>
        </div>
    )
}

export default Sidebar