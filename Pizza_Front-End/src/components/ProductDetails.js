import React, {useContext} from 'react'
import { useParams } from 'react-router-dom'

import { CartContext } from '../context/CartContext'
import { ProductContext } from '../context/Store'

const ProductDetails = () => {

    const {id} = useParams()
    const {products} = useContext(ProductContext)
    const {addToCart} = useContext(CartContext)

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
                        <div className='text-xl font-medium mb-6'>
                            <button onClick={()=>addToCart(product)} className='bg-primary py-4 px-8 text-white'>
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