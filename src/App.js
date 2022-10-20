import { Card } from "./components/Card";
import Cart from "./components/Cart";
import Header from "./components/Header";

const arr = [
  {title:'Fighter Aircraft Hawker Tempest', img:'/img/Goods/1.jpg', price:'200 uah'},
  {title:'Messerschmitt Bf.110 Night Fighter', img:'/img/Goods/2.jpg', price:'300 uah'},
  {title:'Bomber Boeing B-29 Superfortress', img:'/img/Goods/3.jpg', price:'500 uah'},
  {title:'Carrier-based Fighter Grumman F6F Hellcat', img:'/img/Goods/4.jpg', price:'350 uah'}
]

function App() {
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
            <Card key={index} title={obj.title} img={obj.img} price={obj.price} />
           )}


        </div>
      </div>
    </div>
  );
}

export default App;
