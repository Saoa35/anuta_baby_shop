function App() {
  return (
    <div className="wrapper">

      <div className="cart-overlay">
      <div className='cart'>
        <h2>Cart</h2>

        <div className="cartItem">
          <img src="" alt=""/>
        </div>
      </div>
      </div>

      <header>
        <div className="headerLeft">
          <img src='/img/logo.png' width={40} heigth={40} style={{borderRadius:'20px'}} alt='logo'/>
          <div className="headerInfo">
            <h3>Anuta Baby Shop</h3>
            <p>The best goods for adults and children</p>
          </div>
        </div>
        <ul className="headerRight">
          <li>
            <img src="/img/cart.svg" width={25} height={25} alt='cart'/>
            <span style={{margin:' 0 15px'}}>1250 uah</span>
          </li>
          <li>
          <img src="/img/user.svg" width={25} height={25} alt='user'/>
          </li>
        </ul>
      </header>
      <div className="content">
        <div className="content-header">
          <h1>All goods</h1>
          <div className="search-block">
            <img src='/img/search.svg' alt='Search'/>
            <input placeholder="Searh..."/>
          </div>
        </div>
       
        <div className='goods'>
          <div className="card">
            <div className='favorite'>
              <img src='/img/unliked.svg' alt="Unliked"/>
            </div>
            <img width={200} height={160} style={{borderRadius:'10px'}}  src="/img/Goods/1.jpg" alt="Goods"/>
            <h5>Fighter Aircraft Hawker Tempest</h5>
            <div className='cardBottom'>
              <div className="cardPrice">
                <span>Price:</span>
                <b>200 uah</b>
              </div>
              <button className='button'>
                <img src='/img/plus.svg' width={11} height={11} alt='Plus'/>
              </button>
            </div>
          </div>
          <div className="card">
            <img width={200} height={160} style={{borderRadius:'10px'}}  src="/img/Goods/2.jpg" alt="Goods"/>
            <h5>Messerschmitt Bf.110 Night Fighter</h5>
            <div className='cardBottom'>
              <div className="cardPrice">
                <span>Price:</span>
                <b>300 uah</b>
              </div>
              <button className='button'>
                <img src='/img/plus.svg' width={11} height={11} alt='Plus'/>
              </button>
            </div>
          </div>
          <div className="card">
            <img width={200} height={160} style={{borderRadius:'10px'}}  src="/img/Goods/3.jpg" alt="Goods"/>
            <h5>Bomber Boeing B-29 Superfortress</h5>
            <div className='cardBottom'>
              <div className="cardPrice">
                <span>Price:</span>
                <b>500 uah</b>
              </div>
              <button className='button'>
                <img src='/img/plus.svg' width={11} height={11} alt='Plus'/>
              </button>
            </div>
          </div>
          <div className="card">
            <img width={200} height={160} style={{borderRadius:'10px'}}  src="/img/Goods/4.jpg" alt="Goods"/>
            <h5>Carrier-based Fighter Grumman F6F Hellcat</h5>
            <div className='cardBottom'>
              <div className="cardPrice">
                <span>Price:</span>
                <b>350 uah</b>
              </div>
              <button className='button'>
                <img src='/img/plus.svg' width={11} height={11} alt='Plus'/>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
