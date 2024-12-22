import React, { useEffect, useState } from 'react'
import image from './image1.jpg'
import axios from 'axios'

export const Card = () => {

  const[data,setdata] =useState([]);

  useEffect(()=>{
    let fetchData=async()=>{
        let response = await axios.get(`http://localhost:4000/user/view`);
        console.log(response.data)
        setdata(response.data)
    }
    fetchData()
},[])

  return (
    <div className='w-1/4 p-4' >
      {data.map((user) => (
    <div className='bg-white rounded-3xl border border-slate-300 px-6 py-10 text-center'>
        <img className='mx-auto h-40 w-40 rounded-full object-cover xl:h-44 xl:w-44'  src={image} />
        <div className='mt-1 leading-6'>
          <h3>{user.name}</h3>
          <h2>{user.gmail}</h2>
          <h2>Edit</h2>
          <h2>Delete</h2>

        </div>
    </div>
   ))}
    </div>
  )
}
