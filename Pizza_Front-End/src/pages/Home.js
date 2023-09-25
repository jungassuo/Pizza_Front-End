import React, { useContext, useEffect, useState } from 'react';
import { ProductContext } from '../context/Store';

export default function Home() {
  const { products } = useContext(ProductContext);

  // Define a state to keep track of the loading state
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if products is defined and not empty
    if (products && products.length > 0) {
      setLoading(false); // Data has loaded
      console.log(products)
    }
  }, [products]);

  return (
      <div>
        <section className='py-16'>
          <div className='container mx-auto'>
            <div className=''>

            </div> 

          </div>
        </section>
      </div>
    // <div>
    //   {loading ? (
    //     // Show a loading indicator while data is being fetched
    //     <div>Loading...</div>
    //   ) : (
    //     // Data is available, render the products
    //     <div>
    //       {products.map((product) => (
    //         <div key={product.productId}>{product.name}</div>
    //       ))}
    //     </div>
    //   )}
    // </div>
  );
}
