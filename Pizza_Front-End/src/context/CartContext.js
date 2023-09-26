import React, {createContext, useState} from 'react'

export const CartContext = createContext()

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const addToCart = (id,product) => {
        const newItem = {...product, amount:1}
        const cartItem = cart.find((item) => {
            return item.productId === id
        })
        if(cartItem)
        {
            const newCart = [...cart].map((item) => {
                if(item.productId === id)
                {
                    return {...item, amount: cartItem.amount + 1}
                }else
                {
                    return item
                }
            })
            setCart(newCart)
        }else
        {
            setCart([...cart,newItem])
        }
    }

    console.log(cart)

    return <CartContext.Provider value={{cart, addToCart}}>{children}</CartContext.Provider>
}

export default CartProvider