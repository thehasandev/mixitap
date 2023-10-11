import React, { useState } from 'react'

import MenuData from "./components/data"


function App() {
  const [data,setData]=useState(MenuData)

  const hendleSubmit =(submitName)=>{
       const filterData = MenuData.filter((item)=>{
         return item.tittle == submitName
       }) 
        
       setData(filterData)
  }
  return (
    <>
      <ul className='flex flex-col md:flex-row md:gap-x-5 md:px-0  px-32 justify-center text-center mt-5'>
        <li onClick={()=>{hendleSubmit("Breakfast")}} className='font-nunito font-medium text-[#111111]  hover:bg-orange-600 p-2 rounded-[4px] duration-200 hover:text-white cursor-pointer'>Breakfast</li>
        <li onClick={()=>{hendleSubmit("Lunch")}} className='font-nunito font-medium text-[#111111]  hover:bg-orange-600 p-2 rounded-[4px] duration-200 hover:text-white cursor-pointer'>Lunch</li>
        <li  onClick={()=>{hendleSubmit("Dinner")}} className='font-nunito font-medium text-[#111111] hover:bg-orange-600 p-2 rounded-[4px] duration-200 hover:text-white cursor-pointer'>Dinner</li>
        <li  onClick={()=>{hendleSubmit("Evening")}} className='font-nunito font-medium text-[#111111] hover:bg-orange-600 p-2 rounded-[4px] duration-200 hover:text-white cursor-pointer'>Evening</li>
        <li  onClick={()=>{hendleSubmit("Dailly")}} className='font-nunito font-medium text-[#111111] hover:bg-orange-600 p-2 rounded-[4px] duration-200 hover:text-white cursor-pointer'>Dailly</li>
        <li  onClick={()=>{hendleSubmit("Afternoon")}} className='font-nunito font-medium text-[#111111] hover:bg-orange-600 p-2 rounded-[4px] duration-200 hover:text-white cursor-pointer'>Afternoon</li>
        <li  onClick={()=>{hendleSubmit("After Dinner")}} className='font-nunito font-medium text-[#111111] hover:bg-orange-600 p-2 rounded-[4px] duration-200 hover:text-white cursor-pointer'>After Dinner</li>
        <li  onClick={()=>{setData(MenuData)}} className='font-nunito font-medium text-[#111111] hover:bg-orange-600 p-2 rounded-[4px] duration-200 hover:text-white cursor-pointer'>All</li>
      </ul>

      <div className='flex flex-wrap gap-10 justify-center mt-5'>
        {
          data.map((item,index)=>{
            const {name,imgUrl,price} = item
            return<div key={index} className='w-96 bg-white shadow-md rounded-[5px]'>
                   <img src={imgUrl} alt="" className='w-full h-[250px]'/>
                      <h1 className='text-center font-nunito font-bold text-2xl my-2 text-[#111111]'>{name}</h1>
                      <p className='px-2 font-nunito font-normal text-sm text-[#444444]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus assumenda suscipit at consequatur harum placeat magnam animi nisi repellendus minima!</p>
                          <div className='flex justify-between items-center px-4 my-5'>
                            <p className='font-nunito font-normal text-lg text-[#111111]'>Price : {price} $</p>
                            <button className='bg-[green] rounded-[5px] px-4 py-2 font-nunito font-medium text-lg text-white' >Order Now</button>
                          </div>  
                  
                  </div>
           
          })
        }
      </div>
    </>

  )
}

export default App