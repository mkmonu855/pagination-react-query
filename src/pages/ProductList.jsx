/** @format */

import React from "react";

const ProductList = ({ products }) => {
  return (
    <>
      <div className='grid gap-4 md:grid-cols-3'>
        {products.map((product) => (
          <div className='card w-full bg-base-100 shadow-xl'>
            <div className='card-body'>
              <h4>#post{product.id}</h4>
              <h2 className='card-title'>{product.title}</h2>
              <p>{product.body}</p>
              <div className='card-actions justify-end'></div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductList;
