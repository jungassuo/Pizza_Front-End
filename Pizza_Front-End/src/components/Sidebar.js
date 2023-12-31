import React, {useState, createContext, useContext} from 'react'

import {IoMdArrowForward} from 'react-icons/io'
import {FiTrash2} from 'react-icons/fi'

import CartItem from './CartItem'

import { SidebarContext } from '../context/SidebarContext'

import { CartContext } from '../context/CartContext'

const Sidebar = ({children}) =>{

    const {isOpen, handleClose} = useContext(SidebarContext)
    const {cart, clearCart,total, itemAmount} = useContext(CartContext)

    return(
        <div className={`${isOpen ? 'right-0' : '-right-full'} w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transitional-all duration-300 z-20 px-4 lg:px-[35px]`}>
            <div className='flex items-center justify-between py-6 border-b'>
                <div className='uppercase text-sm font-semibold'>
                    Shopping bag ({itemAmount}) 
                </div>
                <div onClick={handleClose} className='cursor-pointer w-8 h-8 flex justify-center items-center'> 
                    <IoMdArrowForward className='text-2xl'/>
                </div>
            </div>
            <div className='flex flex-col gap-y-2 h-[520px] lg:h-[640px] overflow-y-auto overflow-x-hidden border-b'>
                {cart.map(item => {
                    return <CartItem key={item.productId} item={item}/>
                })}
            </div>
            <div className='flex flex-col gap-y-3 py-4 mt-4'>
                <div className='flex w-full justify-between items-center'> 
                    <div className='uppercase font-semibold'>
                        <span className='mr-2'>Total:  {parseFloat(total).toFixed(2)} €</span>
                    </div>
                    <div onClick={clearCart} className='cursor-pointer py-4 bg-red-500 text-white w-12 h-12 flex justify-center items-center text-xl'>
                        <FiTrash2 />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar