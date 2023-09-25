import React, {useContext} from 'react'

import {Link} from 'react-router-dom'

import {BsPlus, BsEyeFill} from 'react-icons/bs'

export default function Product({product}){

    const {productId, name,description, imageUrl, size} = product

    let url = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngwing.com%2Fen%2Fsearch%3Fq%3Dpizza&psig=AOvVaw3XC66bXbVrb_-CpnGLUZKw&ust=1695768255959000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCPDvqZbrxoEDFQAAAAAdAAAAABAE"

    return(
        <div>
            <div className='border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition'>
                <div className='w-full h-full flex justify-center items-center'>
                    <div className='w-[200px] mx-auto flex justify-center items-center'>
                        <div className='absolute top-0 right-0 bg-red-500/40 p-2'>
                            <button>
                                <div className='flex justify-center items-center text-white w-12 h-12'>
                                    <BsEyeFill className='text-3xl'/>
                                </div>
                            </button>
                            <Link to={'/'} className='w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl'>
                                <BsEyeFill/>
                            </Link>
                        </div>
                        <img className='max-h-[160px] group-hover:scale-110 transition duration-300' src={url} />
                    </div>
                </div>

            </div>
        </div>
    )
}