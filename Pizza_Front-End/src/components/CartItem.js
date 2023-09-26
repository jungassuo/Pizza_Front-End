import React from "react"

import {Link} from 'react-router-dom'

const CartItem = ({item}) => {

    const {productId, name,description, imageUrl, size} = item

    return( 
        <div className="flex">
            <div className="w-full min-h-[150px] flex items-center gap-x-4">
                <div>
                    <Link to={`/product/${productId}`}>
                    <img className="max-w-[80px]" src={'https://www.pizzachefs.com.au/wp-content/uploads/2017/03/pizza-placeholder.jpg'} />
                    </Link>
                </div>                
            </div>
        </div>
    )
}

export default CartItem