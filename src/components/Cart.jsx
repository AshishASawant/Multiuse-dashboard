import React from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { MdOutlineCancel } from 'react-icons/md'
import { useStateContext } from '../context/ContextProvider'
import { cartData } from '../data/dummy'

const Cart = () => {
  const {handleClick,currentColor}=useStateContext()
  return (
    <div className='w-screen bg-half-transparent fixed top-0 right-0 z-50 h-screen'>
      <div className='h-screen dark:text-gray-200 bg-white dark:bg-secondary-dark-bg sm:w-400  z-50 float-right sm:p-8 p-4'>
        <div className='flex justify-between items-center'>
      <p className="font-semibold text-lg">Shopping Cart</p>
          <button
            type="button"
            onClick={() => {
              handleClick("");
            }}
            style={{ color: "rgb:(153,171,180" }}
            className="text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray rounded-full  dark:hover:bg-slate-700"
          >
            <MdOutlineCancel />
          </button>
        </div>
        {cartData?.map((item, index) => (
          <div key={index}>
            <div>
              <div className="flex items-center   leading-8 gap-5 border-b-1 border-color dark:border-gray-600 p-4">
                <img className="rounded-lg h-80 w-24" src={item.image} alt="" />
                <div>
                  <p className="font-semibold capitalize">{item.name}</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm font-semibold">{item.category}</p>
                  <div className="flex gap-4 mt-2 items-center">
                    <p className="font-semibold text-lg">{item.price}</p>
                    <div className="flex items-center border-1 border-r-0 border-color rounded">
                      <p className="p-2 border-r-1 dark:border-gray-600 border-color text-red-600 "><AiOutlineMinus /></p>
                      <p className="p-2 border-r-1 border-color dark:border-gray-600 text-green-600">0</p>
                      <p className="p-2 border-r-1 border-color dark:border-gray-600 text-green-600"><AiOutlinePlus /></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className='mt-3 mb-3'>
          <div className='flex justify-between items-center'>
            <p className='text-gray-500 dark:text-gray-200'>Sub Total</p>
            <p className='font-semibold'>&#8377;890</p>
          </div>
          <div className='flex justify-between items-center mt-3'>
            <p className='text-gray-500 dark:text-gray-200'>Total</p>
            <p className='font-semibold'>&#8377;890</p>
          </div>
          <button className='mt-5 w-full p-3 rounded-xl text-gray-100 ' style={{backgroundColor:currentColor}}>
            Place Order
          </button>
        </div>
        </div>
      </div>  )
}

export default Cart