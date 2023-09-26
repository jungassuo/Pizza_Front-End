import React, {useContext} from 'react'

import {Link} from 'react-router-dom'

import {BsPlus, BsEyeFill} from 'react-icons/bs'

import { CartContext } from '../context/CartContext'

export default function Product({product}){

    const {productId, name,description, imageUrl, size} = product

    const {addToCart} = useContext(CartContext)

    let url = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngwing.com%2Fen%2Fsearch%3Fq%3Dpizza&psig=AOvVaw3XC66bXbVrb_-CpnGLUZKw&ust=1695768255959000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCPDvqZbrxoEDFQAAAAAdAAAAABAE"

    return(
        <div>
            <div className='border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition'>
                <div className='w-full h-full flex justify-center items-center'>
                    <div className='w-[200px] mx-auto flex justify-center items-center'>
                    <img className='max-h-[160px] group-hover:scale-110 transition duration-300' src={'https://www.pizzachefs.com.au/wp-content/uploads/2017/03/pizza-placeholder.jpg'} />
                        <div className='absolute top-6 -right-11 group-hover:right-5  p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300'>
                            <button onClick={() => addToCart(productId, product)}>
                                <div className='flex justify-center items-center text-white w-12 h-12 bg-red-500'>
                                    <BsPlus className='text-3xl'/>
                                </div>
                            </button>
                            <Link to={`/product/${productId}`} className='w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl'>
                                <BsEyeFill/>
                            </Link>
                        </div>
                        

                    </div>
                </div>

            </div>
            <div>
                <div className='text-sm capitalize text-gray-500 mb-1'>
                    {name}
                </div>
                <Link to={`/product/${productId}`}>
                    <h2 className='font-semibold mb-1'>{description}</h2>
                </Link>
            </div>
        </div>
    )
}