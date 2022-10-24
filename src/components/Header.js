import { Link } from "react-router-dom";

function Header(props) {
    
    return(
        <header>
        
          <div className="headerLeft">
          <Link to='/'>
            <img src='/img/logo.png' width={30} heigth={30} style={{borderRadius:'20px'}} alt='logo'/>
          </Link>
            <div className="headerInfo">
              <h3>Anuta Baby Shop</h3>
              <p>The best goods for adults and children</p>
            </div>
          </div>
        
        
        <ul className="headerRight">
          <li>
            <img onClick={props.onClickCart} src="/img/cart.svg" width={25} height={25} alt='cart' title="Open Cart"/>
            <span style={{margin:'0 20px'}}>1250 UAH</span>
          </li>
          <li>
           <Link to="/favorites">
            <img src="/img/heart.svg" style={{marginRight:'20px'}} width={25} height={25} alt='heart' title="Open Favorites"/>
           </Link>
          </li>
          <li>
            <img src="/img/user.svg" width={25} height={25} alt='user' title="Log in"/>
          </li>
        </ul>
      </header>
    )
}

export default Header;