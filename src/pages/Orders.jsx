import React from "react";
import { Card } from "../components/Card";


function Orders() {

  return(
    <div className="content">
      <div className="content-header">
       <h1>My Orders</h1>
      </div>
      
      <div className='goods'>

        {[].map((item, index) => (
                    <Card 
                      key={index} 
                      isFavorite={true}
                      onFavorite={obj => onAddToFavorite(obj)}
                      // onPlus={obj => onAddToCart(obj)}
                      {...item}
                    />      
                )
            )
            }
      </div>
    </div>
  )
}

export default Orders;