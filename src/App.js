import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import Cart from "./components/Cart";
import Header from "./components/Header";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";

const url = 'https://63540251e64783fa827d56c7.mockapi.io';

function App() {

  const [cartOpened, setCartOpened] = useState(false);
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [serchValue, setSerchValue] = useState('');
  const [favorites, setFavorites] =useState([]);

  useEffect(() => {
    fetch(`${url}/items`)
      .then(res => res.json())
      .then(data => setItems(data))
      .catch(error => console.log(error.mesage));

    fetch(`${url}/cart`)
      .then(res => res.json())
      .then(data => setCartItems(data))
      .catch(error => console.log(error.mesage));

    fetch(`${url}/favorites`)
    .then(res => res.json())
    .then(data => setFavorites(data))
    .catch(error => console.log(error.mesage));
  },[]);

  const onAddToCart = (obj) => {
    fetch(`${url}/cart`, {
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
    fetch(`${url}/cart/${id}`, {
      method: 'DELETE',
      })
      .then(response => response.json())

    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const onChangeInput = (event) => {
    setSerchValue(event.target.value);
  };

  const onAddToFavorite = (obj) => {
    fetch(`${url}/favorites`, {
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
        
      <Route path="/" exact>
        <Home 
          serchValue={serchValue} 
          items={items}
          onChangeInput={onChangeInput}
          onAddToFavorite={onAddToFavorite}
          onAddToCart={onAddToCart} />
      </Route>

      <Route path="/favorites" exact>
        <Favorites items={favorites} onAddToFavorite={onAddToFavorite} />
      </Route>
      
    </div>
  );
}

export default App;
