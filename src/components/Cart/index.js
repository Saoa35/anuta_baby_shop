import { useState } from "react";
import Info from "../Info";
import axios from "axios";
import { useCart } from "../../hooks/useCart";
import styles from "./Cart.module.scss";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function Cart({ onCloseCart, onRemove, items = [], opened }) {

  const { cartItems, setCartItems, totalPrice } = useCart();
  const [isOrderComplete, setIsOrderComplete] = useState(false);
  const [orderId, setOrderId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const onClickOrder = async () => {
    try {
      setIsLoading(true)
      const {data} = await axios.post('https://63540251e64783fa827d56c7.mockapi.io/orders', {items: cartItems});
      setOrderId(data.id);
      setIsOrderComplete(true);
      setCartItems([]);
      
        for (let i = 0; i < cartItems.length; i++) {
          const item = cartItems[i];
          await axios.delete("https://63540251e64783fa827d56c7.mockapi.io/cart/" + item.id);
          await delay(1000);
        }

    } catch (error) {
      console.log(error.mesage);
    }
    setIsLoading(false);
  };

  return(
    // <div className={`${styles.cartOverlay} ${opened ? styles.overlayVisible : ''}`}>
    <div className={styles.overlay}>
      <div className={styles.cart}>
        <h2>
          Cart
          <img className='removeBtn'
               onClick={onCloseCart}
               src="/img/btn-remove.svg" 
               alt="Close"  
               title="Close Cart"/>
        </h2>

        {items.length > 0 ? ( 
          <div className={styles.cartField}>
            <div className={styles.items}>
              {items.map((obj, index) => (
                <div className={styles.cartItem} key={index}>
                  <img width={80} height={65} style={{borderRadius:'10px', marginRight:'20px'}} src={obj.imgUrl} alt="Goods"/>
                  <div style={{marginRight:'15px'}}>
                    <p>{obj.title}</p>
                    <b>{obj.price} uah</b>
                  </div>
                  <img className="removeBtn" onClick={() => onRemove(obj.id)} src="/img/btn-remove.svg" alt="Remove" title="Remove from Cart"/>
                </div>
              ))}
            </div>
            <div className={styles.cartFooter}>
              <ul>
                <li>
                  <span>Total items:</span>
                  <div></div>
                  <b>{cartItems.length} items</b>
                </li>
                <li>
                  <span>Total price:</span>
                  <div></div>
                  <b>{totalPrice} uah</b>
                </li>
              </ul>
              <button disabled={isLoading} onClick={onClickOrder} className="greenButton">Place an order<img src="/img/arrow.svg" alt="Arrow"/></button>
            </div>
          </div>
        ) : (<Info title={isOrderComplete ? "Order is completed" : "Cart is empty"} 
              description={isOrderComplete ? 
                `Your order #${orderId} has been sent for processing, our operators will contact you shortly` 
              : "Add at least one item, to place an order"} 
              image={isOrderComplete ? "/img/complete-order.jpg" : "/img/empty-cart.png"}/>)}
      </div>
    </div>
  )
}

export default Cart;