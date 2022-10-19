
function Cart() {

    return(
        <div className='cart'>
          <h2>Cart<img className="removeBtn" src="/img/btn-remove.svg" alt="Remove"  title="Remove from Cart"/></h2>

          <div className="items">

            <div className="cartItem">
              <img width={80} height={65} style={{borderRadius:'10px', marginRight:'20px'}} src="/img/Goods/1.jpg" alt="Goods"/>
              <div style={{marginRight:'15px'}}>
                <p>Fighter Aircraft Hawker Tempest</p>
                <b>200 uah</b>
              </div>
              <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove"  title="Remove from Cart"/>
            </div>

            {/* <div className="cartItem">
              <img width={80} height={65} style={{borderRadius:'10px', marginRight:'20px'}} src="/img/Goods/4.jpg" alt="Goods"/>
              <div style={{marginRight:'15px'}}>
                <p>Carrier-based Fighter Grumman F6F Hellcat</p>
                <b>350 uah</b>
              </div>
              <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" title="Remove from Cart"/>
            </div> */}

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
    )
}

export default Cart;