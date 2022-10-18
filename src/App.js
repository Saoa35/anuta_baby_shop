function App() {
  return (
    <div className="wrapper">

      <div className="cart-overlay">
        <div className='cart'>
          <h2>Cart</h2>

          <div className="items">
            <div className="cartItem">
              <img width={80} height={65} style={{borderRadius:'10px', marginRight:'20px'}} src="/img/Goods/1.jpg" alt="Goods"/>
              <div style={{marginRight:'15px'}}>
                <p>Fighter Aircraft Hawker Tempest</p>
                <b>200 uah</b>
              </div>
              <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove"  title="Remove from Cart"/>
            </div>

            <div className="cartItem">
              <img width={80} height={65} style={{borderRadius:'10px', marginRight:'20px'}} src="/img/Goods/4.jpg" alt="Goods"/>
              <div style={{marginRight:'15px'}}>
                <p>Carrier-based Fighter Grumman F6F Hellcat</p>
                <b>350 uah</b>
              </div>
              <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" title="Remove from Cart"/>
            </div>
          </div>

          <ul className="cartFooter">
            <li>
              <span>Total price:</span>
              <div></div>
              <b>530 uah</b>
            </li>
            <li>
              <span>Discount:</span>
              <div></div>
              <b>20 uah</b>
            </li>
          </ul>
          <button>Place an order</button>

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
              <img src='/img/unliked.svg' alt="Unliked" title="Set as Favorite"/>
            </div>
            <img width={200} height={160} style={{borderRadius:'10px'}}  src="/img/Goods/1.jpg" alt="Goods"/>
            <h5>Fighter Aircraft Hawker Tempest</h5>
            <div className='cardBottom'>
              <div className="cardPrice">
                <span>Price:</span>
                <b>200 uah</b>
              </div>
              <button className='button'>
                <img src='/img/plus.svg' width={11} height={11} alt='Plus' title="Add to Cart"/>
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
                <img src='/img/plus.svg' width={11} height={11} alt='Plus' title="Add to Cart"/>
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
                <img src='/img/plus.svg' width={11} height={11} alt='Plus' title="Add to Cart"/>
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
                <img src='/img/plus.svg' width={11} height={11} alt='Plus' title="Add to Cart"/>
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
