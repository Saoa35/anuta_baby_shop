import React, { useState } from "react";
import { Card } from "./components/Card";
import Cart from "./components/Cart";
import Header from "./components/Header";

const arr = [
  {title:'Fighter Aircraft Hawker Tempest', img:'/img/Goods/1.jpg', price:'200'},
  {title:'Messerschmitt Bf.110 Night Fighter', img:'/img/Goods/2.jpg', price:'300'},
  {title:'Bomber Boeing B-29 Superfortress', img:'/img/Goods/3.jpg', price:'650'},
  {title:'Carrier-Вased Fighter Grumman F6F Hellcat', img:'/img/Goods/4.jpg', price:'350'},
  {title:'Attack Aircraft Ilyushin IL-2', img:'/img/Goods/5.jpg', price:'450'},
  {title:'Fighter Aircraft Messershmitt Bf 109 G-2', img:'/img/Goods/6.jpg', price:'330'},
  {title:'I16 Type 18 Fighter Aircraft', img:'/img/Goods/7.jpg', price:'300'},
  {title:'Multirole Fighter-Bomber DH.98 Mosquito', img:'/img/Goods/8.jpg', price:'480'},
  {title:'High-Altitude Fighter MIG 3', img:'/img/Goods/9.jpg', price:'380'},
  {title:'Carrier-Вased Fighter F4U Corsair', img:'/img/Goods/10.jpg', price:'460'},
  {title:'Yak-9t Fighter Aircraft', img:'/img/Goods/11.jpg', price:'430'},
  {title:'Bomber Boeing B-17 Flying Fortress', img:'/img/Goods/12.jpg', price:'600'},
  {title:'Fighter Aircraft I-153 Chaika', img:'/img/Goods/13.jpg', price:'370'},
  {title:'Mitsubishi A6M Zero Fighter Aircraft', img:'/img/Goods/14.jpg', price:'420'},
  {title:'Fighter Aircraft P-51b Mustang', img:'/img/Goods/15.jpg', price:'460'},
  {title:'Heinkel He 162 Jet Fighter', img:'/img/Goods/16.jpg', price:'400'}
]

function App() {

  const [cartOpened, setCartOpened] = useState(false);

  return (
    <div className="wrapper">

      <Cart />
      
      <Header />

      <div className="content">

        <div className="content-header">
          <h1>All goods</h1>
          <div className="search-block">
            <img src='/img/search.svg' alt='Search'/>
            <input placeholder="Searh..."/>
          </div>
        </div>
       
        <div className='goods'>

          {arr.map((obj, index) => 
            <Card key={index} 
                  title={obj.title} 
                  img={obj.img} 
                  price={obj.price} 
                  // onClickPlus={() => console.log(`${obj.title} was added to cart!`)} 
                  // onClickFavorit={() => console.log(`You liked ${obj.title}`)}
                  />
           )}

        </div>
      </div>
    </div>
  );
}

export default App;
