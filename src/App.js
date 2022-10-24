import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Cart from "./components/Cart";
import Header from "./components/Header";
import Home from "./pages/Home";

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

    setCartItems(prev => prev.filter(item => item.id !== id));
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

      
        <Switch>
          <Route path="/" exact>
              <Home serchValue={serchValue} 
                    items={items}
                    onChangeInput={onChangeInput}
                    onAddToFavorite={onAddToFavorite}
                    onAddToCart={onAddToCart} />
            </Route>
        </Switch>
    
      
    </div>
  );
}

export default App;
