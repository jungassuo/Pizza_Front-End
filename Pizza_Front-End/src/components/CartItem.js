import React, { useContext } from "react"
import { IoMdClose,IoMdRemove, IoMdAdd } from "react-icons/io"

import {CartContext} from "../context/CartContext"

import {Link} from 'react-router-dom'

const CartItem = ({item}) => {

    const {productId, name,description, amount} = item

    const {removeFromCart, increaseAmount,decreaseAmount} = useContext(CartContext)

    return( 
        <div className="flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500">
            <div className="w-full min-h-[150px] flex items-center gap-x-4">
                    <Link to={`/product/${productId}`}>
                    <img className="max-w-[80px]" src={'https://www.pizzachefs.com.au/wp-content/uploads/2017/03/pizza-placeholder.jpg'} />
                    </Link>
                    <div className="w-full flex flex-col">
                        <div onClick={() => removeFromCart(productId)} className="flex justify-between mb-2">
                            <Link className="text-sm uppercase font-medium max-w-[240px] text-primary hover:underline" to={`/product/${productId}`}>{name}</Link>
                            <div className="text-xl cursor-pointer">
                                <IoMdClose className="text-gray-500 hover:text-red-500 transition"></IoMdClose>
                            </div>
                        </div>
                        <div className=" flex gap-x-2 h-[36px] text-sm">
                            <div className="flex flex-1 max-w-[100px] items-center h-full border text-primary font-medium">
                                <div onClick={() => decreaseAmount(productId)} className="flex-1 flex justify-center items-center cursor-pointer h-full">
                                    <IoMdRemove />
                                </div>
                                <div className="h-full flex justify-center items-center px-2">{amount}</div>
                                <div onClick={() => increaseAmount(productId)} className="flex-1 h-full flex justify-center items-center cursor-pointer">
                                    <IoMdAdd />
                                </div>
                            </div>
                        </div>
                    </div>              
            </div>
        </div>
    )
}

export default CartItem