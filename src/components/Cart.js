import { useContext, useState } from "react";
import AppContext from "../context";
import Info from "./Info";

function Cart({ onCloseCart, onRemove, items = [] }) {

  const { setCartItems } = useContext(AppContext);

  const [isOrderComplete, setIsOrderComplete] = useState(false);

  const onClickOrder = () => {
    setIsOrderComplete(true);
    setCartItems([]);
  }

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

        {items.length > 0 ? ( 
          <div className="cartField">
            <div className="items">
              {items.map((obj, index) => (
                <div className="cartItem" key={index}>
                  <img width={80} height={65} style={{borderRadius:'10px', marginRight:'20px'}} src={obj.imgUrl} alt="Goods"/>
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
              <button onClick={onClickOrder} className="greenButton">Place an order <img src="/img/arrow.svg" alt="Arrow"/></button>
            </div>
          </div>
        ) : (<Info title={isOrderComplete ? "Order is completed" : "Cart is empty"} 
                   description={isOrderComplete ? "Your order has been sent for processing, our operators will contact you shortly" 
                                                : "Add at least one item, to place an order"} 
                   image={isOrderComplete ? "/img/complete-order.jpg" : "/img/empty-cart.png"}/>)}
      </div>
    </div>
  )
}

export default Cart;