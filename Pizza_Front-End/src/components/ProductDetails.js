import React, {useContext} from 'react'
import { useParams } from 'react-router-dom'

import { CartContext } from '../context/CartContext'
import { ProductContext } from '../context/Store'
import { ToppingsContext } from '../context/Topping'

import toast, { Toaster } from 'react-hot-toast';

import Select from 'react-select'

const ProductDetails = () => {

    const {id} = useParams()
    const {products} = useContext(ProductContext)
    const {addToCart} = useContext(CartContext)
    const {toppings} = useContext(ToppingsContext)

    const [currentSizePrice, setCurrentSizePrice] = React.useState()

    let arr = []
    toppings.map((val) => {
        arr.push({value: val.name, label: val.name})
    })

    const sizes = [
        {
            value: 8,
            label: "small - 8 $"
        },
        {
            label: "medium - 10 $",
            value: 10
        },
        {
            label: "large - 12 $",
            value: 12
        }
    ]

    const product = products.find((item) => {
        return item.productId === parseInt(id)
    })

    const checkSubmit = () => {
        if(currentSizePrice != undefined){
            addToCart(productId,product)
        }else{
            toast('Please select pizza size!', {
                icon: '⚠️',
              });
        }        
    }

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
                        <div  className='text-xl font-medium mb-6'>
                        <Select
                                name="colors"
                                options={sizes}
                                className="lg:w-1/2 w-full"
                                classNamePrefix="select"
                                onChange={setCurrentSizePrice}
                            />
                        </div>
                        <div className="container mx-auto mt-20">
                            
                            <Select
                                isMulti
                                name="colors"
                                options={arr}
                                className="lg:w-1/2 w-full"
                                classNamePrefix="select"
                            />
                        </div>
                        <div className='text-xl font-medium mb-6'>
                            <button onClick={()=> checkSubmit()} className='bg-[#12486B] py-4 px-8 text-white'>
                                Add to cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Toaster 
                position="top-right"
                reverseOrder={false}
            />
        </section>
    )
}

export default ProductDetails