import React from 'react';

const ProductItem = ({ id, name, price, count, onIncrement, onDecrement, onDelete }) => {

  return (
   count !== 0 && <div className='card' onDoubleClick={() => onDelete(id)}>
      <h1 className='card-title'>{name}</h1>
      <p className='card-price'>Цена: {price}</p>
      <p className='card-quantity'>В корзине: {count}</p>
      <div>
        <button className='PM' onDoubleClick={(e) => e.stopPropagation()} onClick={() => onIncrement(id)}>+</button>
        <button className='PM' onDoubleClick={(e) => e.stopPropagation()} onClick={() => onDecrement(id)}>-</button>
      </div>
      
    </div>
    
  );
};

export default ProductItem;
