import React, {useContext} from 'react'
import { useParams } from 'react-router-dom'

import { CartContext } from '../context/CartContext'
import { ProductContext } from '../context/Store'

import Select from 'react-select'

const ProductDetails = () => {

    const {id} = useParams()
    const {products} = useContext(ProductContext)
    const {addToCart} = useContext(CartContext)

    const sizes = [
        {
            size: "small",
            price: 8
        },
        {
            size: "medium",
            price: 10
        },
        {
            size: "large",
            price: 12
        }
    ]

    const product = products.find((item) => {
        return item.productId === parseInt(id)
    })

    if(!product){
        return <section className='h-screen flex justify-center items-center'>Loading...</section>
    }

    const {productId, name,description, amount} = product

    return (
        <section className='pt-32 pb-12 lg:py-32 h-screen flex items-center'>
            <div className='container mx-auto'>
                <div className='flex flex-col lg:flex-row items-center'>
                    <div className='flex flex-1 justify-center items-center mb-8 lg:mb-0'>
                        <img className='max-w-[200px] lg:max-w-sm' src={'https://www.pizzachefs.com.au/wp-content/uploads/2017/03/pizza-placeholder.jpg'}/>
                    </div>
                    <div className='flex-1 text-center lg:text-left'>
                        <h1 className='text-[26px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0'>
                            {name}
                        </h1>
                        <p className='mb-8'>
                            {description}
                        </p>
                        <div  className='text-xl font-medium mb-6 border-b'>
                        <select
                            id="size-selector"
                            name="size-selector"
                            className=" py-4 px-8 text-black border-solid"
                        >
                        {
                        sizes.map(item => (
                            <option
                            id={item.size}
                            key={item.size}
                            value={item.size}
                            >
                            {item.size}
                            </option>
                        ))
                        }
                        </select>
                        </div>
                       

                        <div className='text-xl font-medium mb-6'>
                            <button onClick={()=>addToCart(productId,product)} className='bg-[#12486B] py-4 px-8 text-white'>
                                Add to cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductDetails