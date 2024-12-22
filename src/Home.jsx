import React from 'react'
import { Card } from './Card'
import { Add } from './Add'

export const Home = () => {
  return (
    <div>
        <div>
            <div className='bg-black h-20 text-red-500 flex justify-between p-4'>
                <div>
                <div className='text-red-500'>name@gmail.com</div>
                </div>
                <div>
                <div className='text-red-500'>Search</div>
                </div>
                <div className='flex flex-row gap-5'>
                <div className='text-red-500'>Dashboard</div>
                <div className='text-red-500'>Staff</div>
                <div className='text-red-500'>Employee</div>
                </div>


            </div>
            <div>
                <div>
                    <Card />
                    <Add />
                </div>
            </div>
        </div>
    </div>
  )
}
