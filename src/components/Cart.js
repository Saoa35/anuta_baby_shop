
function Cart({ onCloseCart, items }) {

  return(
    <div className="cart-overlay">
      <div className='cart'>
        <h2>
          Cart
          <img className="removeBtn" 
               onClick={onCloseCart}
               src="/img/btn-remove.svg" 
               alt="Close"  
               title="Close Cart"/>
        </h2>

        <div className="items">

          {items.map(obj => {
            <div className="cartItem">
            <img width={80} height={65} style={{borderRadius:'10px', marginRight:'20px'}} src="/img/Goods/1.jpg" alt="Goods"/>
            <div style={{marginRight:'15px'}}>
              <p>Fighter Aircraft Hawker Tempest</p>
              <b>200 uah</b>
            </div>
            <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove"  title="Remove from Cart"/>
          </div>
          })}

        </div>

        <div className="cartFooter">
          <ul>
            <li>
              <span>Total items:</span>
              <div></div>
              <b>2 items</b>
            </li>
            <li>
              <span>Total price:</span>
              <div></div>
              <b>550 uah</b>
            </li>
          </ul>
          <button className="greenButton">Place an order <img src="/img/arrow.svg" alt="Arrow"/></button>
        </div>

      </div>
  </div>
  )
}

export default Cart;