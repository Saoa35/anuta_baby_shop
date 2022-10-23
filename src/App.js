import React, { useEffect, useState } from "react";
import { Card } from "./components/Card";
import Cart from "./components/Cart";
import Header from "./components/Header";

const url = 'https://63540251e64783fa827d56c7.mockapi.io/items';

function App() {

  const [cartOpened, setCartOpened] = useState(false);
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setItems(data))
      .catch(error => console.log(error.mesage))
  },[]);

  const onAddToCart = () => {
    // setCartItems
  }

  return (
    <div className="wrapper">

      {cartOpened && <Cart onCloseCart={() => setCartOpened(false)} items={cartItems} />}
      
      <Header onClickCart={() => setCartOpened(true)} />

      <div className="content">

        <div className="content-header">
          <h1>All goods</h1>
          <div className="search-block">
            <img src='/img/search.svg' alt='Search'/>
            <input placeholder="Searh..."/>
          </div>
        </div>
       
        <div className='goods'>

          {items.map((obj, index) => 
            <Card key={index} 
                  title={obj.title} 
                  img={obj.imgUrl} 
                  price={obj.price} 
                  onFavorite={() => console.log('Clicked favorite')}
                  onPlus={onAddToCart}/>
           )}

        </div>
      </div>
    </div>
  );
}

export default App;
