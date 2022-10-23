import React, { useEffect, useState } from "react";
import { Card } from "./components/Card";
import Cart from "./components/Cart";
import Header from "./components/Header";

const urlItems = 'https://63540251e64783fa827d56c7.mockapi.io/items';
const urlCart = 'https://63540251e64783fa827d56c7.mockapi.io/cart';
const urlFavorites = 'https://63540251e64783fa827d56c7.mockapi.io/favorites';


function App() {

  const [cartOpened, setCartOpened] = useState(false);
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [serchValue, setSerchValue] = useState('');
  const [favorites, setFavorites] =useState([]);

  useEffect(() => {
    fetch(urlItems)
      .then(res => res.json())
      .then(data => setItems(data))
      .catch(error => console.log(error.mesage));

    fetch(urlCart)
    .then(res => res.json())
    .then(data => setCartItems(data))
    .catch(error => console.log(error.mesage));
  },[]);

  const onAddToCart = (obj) => {
    fetch(urlCart, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(obj)
    });

    setCartItems(prev => [...prev, obj]);
    // setCartItems([...cartItems, obj]);
  };


  const onRemoveFromCart = (id) => {
    fetch(`${urlCart}/${id}`, {
      method: 'DELETE',
    })
    .then(response => response.json())
    .catch(err => console.log(err));

    setCartItems(prev => prev.filter(item => item.id !==id));
  };

  const onChangeInput = (event) => {
    setSerchValue(event.target.value);
  };

  const onAddToFavorite = (obj) => {
    fetch(urlFavorites, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(obj)
    });
    setFavorites(prev => [...prev, obj]);
  };

  return (
    <div className="wrapper">

      {cartOpened && <Cart onCloseCart={() => setCartOpened(false)} items={cartItems} onRemove={onRemoveFromCart} />}
      
      <Header onClickCart={() => setCartOpened(true)} />

      <div className="content">

        <div className="content-header">
          <h1>{serchValue ? `Serching: ${serchValue}` : 'All Items'}</h1>
          <div className="search-block">
            <img src='/img/search.svg' alt='Search'/>
            <input onChange={onChangeInput} value={serchValue} placeholder="Searh..."/>
          </div>
        </div>
       
        <div className='goods'>

          {items
            .filter(item => item.title.toUpperCase().includes(serchValue.toUpperCase()))
            .map((item, index) => 
              <Card key={index} 
                    title={item.title} 
                    img={item.imgUrl} 
                    price={item.price} 
                    onFavorite={obj => onAddToFavorite(obj)}
                    onPlus={obj => onAddToCart(obj)}
              />
            )
          }

        </div>
      </div>
    </div>
  );
}

export default App;
