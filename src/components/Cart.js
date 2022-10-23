
function Cart({ onCloseCart, onRemove, items = [] }) {

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

          {items.map((obj, index) => (
            <div className="cartItem" key={index}>
            <img width={80} height={65} style={{borderRadius:'10px', marginRight:'20px'}} src={obj.img} alt="Goods"/>
            <div style={{marginRight:'15px'}}>
              <p>{obj.title}</p>
              <b>{obj.price} uah</b>
            </div>
            <img className="removeBtn" onClick={() => onRemove(obj.id)} src="/img/btn-remove.svg" alt="Remove"  title="Remove from Cart"/>
          </div>
          ))}

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