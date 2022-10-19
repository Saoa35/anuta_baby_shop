import { Card } from "./components/Card";
import Cart from "./components/Cart";
import Header from "./components/Header";

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

          <Card />

          {/* <div className="card">
            <div className='favorite'>
              <img src='/img/unliked.svg' alt="Unliked" title="Set as Favorite"/>
            </div>
            <img width={170} height={140} style={{borderRadius:'10px'}}  src="/img/Goods/2.jpg" alt="Goods"/>
            <h5>Messerschmitt Bf.110 Night Fighter</h5>
            <div className='cardBottom'>
              <div className="cardPrice">
                <span>Price:</span>
                <b>300 uah</b>
              </div>
              <button className='button'>
                <img src='/img/plus.svg' width={11} height={11} alt='Plus' title="Add to Cart"/>
              </button>
            </div>
          </div>

          <div className="card">
            <div className='favorite'>
              <img src='/img/unliked.svg' alt="Unliked" title="Set as Favorite"/>
            </div>
            <img width={170} height={140} style={{borderRadius:'10px'}}  src="/img/Goods/3.jpg" alt="Goods"/>
            <h5>Bomber Boeing B-29 Superfortress</h5>
            <div className='cardBottom'>
              <div className="cardPrice">
                <span>Price:</span>
                <b>500 uah</b>
              </div>
              <button className='button'>
                <img src='/img/plus.svg' width={11} height={11} alt='Plus' title="Add to Cart"/>
              </button>
            </div>
          </div>

          <div className="card">
            <div className='favorite'>
              <img src='/img/unliked.svg' alt="Unliked" title="Set as Favorite"/>
            </div>
            <img width={170} height={140} style={{borderRadius:'10px'}}  src="/img/Goods/4.jpg" alt="Goods"/>
            <h5>Carrier-based Fighter Grumman F6F Hellcat</h5>
            <div className='cardBottom'>
              <div className="cardPrice">
                <span>Price:</span>
                <b>350 uah</b>
              </div>
              <button className='button'>
                <img src='/img/plus.svg' width={11} height={11} alt='Plus' title="Add to Cart"/>
              </button>
            </div>
          </div> */}

        </div>
      </div>
    </div>
  );
}

export default App;
