import React from 'react';

const ProductItem = ({ id, name, price, count, onIncrement, onDecrement, onDelete }) => {

  return (
    <div className='card' onDoubleClick={() => onDelete(id)}>
      <h1 className='card-title'>{name}</h1>
      <p className='card-price'>Price: {price}</p>
      <p className='card-quantity'>Count: {count}</p>
      <div>
        <button className='PM' onDoubleClick={(e) => e.stopPropagation()} onClick={() => onIncrement(id)}>+</button>
        <button className='PM' onDoubleClick={(e) => e.stopPropagation()} onClick={() => onDecrement(id)}>-</button>
      </div>
      
    </div>
    
  );
};

export default ProductItem;