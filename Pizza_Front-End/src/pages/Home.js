import React, { useContext, useEffect, useState } from 'react';
import { ProductContext } from '../context/Store';

import Product from '../components/Product';


export default function Home() {
  const { products } = useContext(ProductContext);

  // Define a state to keep track of the loading state
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if products is defined and not empty
    if (products && products.length > 0) {
      setLoading(false); // Data has loaded
    }
  }, [products]);

  return (
      
    <div>       
        <section className='py-16'>
          <div className='container mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0'>
                {loading ? (
                  // Show a loading indicator while data is being fetched
                  <div>Loading...</div>
                ) : (
                  // Data is available, render the products
  <>                    {products.map((product) => (
                      <Product key={product.productId} product={product} />
                    ))}
</>

                )}
            </div> 
          </div>
        </section>
      </div>
  );
}
