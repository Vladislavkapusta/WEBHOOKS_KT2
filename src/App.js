import React, { useState } from 'react';
import ProductItem from './components/ProductItem';
import './App.css';


const App = () => {
  const [data, setData] = useState([
    { id: 1, name: 'Велосипед', price: 1000, count: 1 },
    { id: 2, name: 'Самокат', price: 700, count: 1 },
    { id: 3, name: 'Ролики', price: 1300, count: 2 },
    { id: 4, name: 'Сноуборд', price: 19000, count: 4 }
  ]);

  const handleIncrement = (id) => {
    const newData = data.map((item) => {
      if (item.id === id && item.count < 25) {
        return { ...item, count: item.count + 1 };
      }
      return item;
    });
    setData(newData);
  };

  const handleDecrement = (id) => {
    // const newData = data.map((item) => {
    //   if (item.id === id && item.count > 1) {
    //     return { ...item, count: item.count - 1 };
    //   }
    //   return item;
    // });
    // setData(newData);
    // Так и не разобрался с map.....
    let changedCount = data.filter((item) =>
    item.count>=1?((item.id===id)?item.count-- : item.count) : handleDelete(id)
    )
    setData(changedCount)
  };


  
  const handleDelete = (id) => {
    const newData = data.filter((item) => item.id !== id);
    setData(newData);
  };

  // const handleAddProduct = () => {
  //   const id = Date.now();
  //   const name = prompt('Enter product name:');
  //   const price = prompt('Enter product price:');
  //   const count = +prompt('Enter product count:');
  //   const newData = [...data, { id , name, price, count }];
  //   setData(newData);
  // };

  const handleAddProduct = () => {
    const input = prompt('Введите имя и цену товара (например, "Велосипед 1000"):');
    if (input) {
    const [productName, productPrice] = input.split(' ');
    const newProduct = {
    id: Date.now(),
    name: productName,
    price: parseFloat(productPrice),
    count: 1
    };
    setData([...data, newProduct]);
    }
  };



  return (
    <div className='uppercont'>
            <button className = 'AddButton' onClick={handleAddProduct}>Add Product &#128722;</button>
            <div className='container'>
                    {data.map((item) => (
        <ProductItem
          key={item.id}
          id={item.id}
          name={item.name}
          price={item.price}
          count={item.count}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onDelete={handleDelete}
        />
      ))}
            </div>

    </div>
  );
};

export default App;
