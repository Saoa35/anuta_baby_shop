function App() {
  return (
    <div className="wrapper">
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
        <h1>All goods</h1>
       
       <div className="card">
        <img src="" alt=""/>
        <p></p>
        <div>
          <span>Price:</span>
          <b>200 uah</b>
        </div>
        <button></button>
       </div>
      </div>
    </div>
  );
}

export default App;
