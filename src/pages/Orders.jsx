import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Card } from "../components/Card";  


function Orders() {

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const { data } = await axios.get('https://63540251e64783fa827d56c7.mockapi.io/orders');
  }, []);

  return(
    <div className="content">
      <div className="content-header">
       <h1>My Orders</h1>
      </div>
      
      <div className='goods'>

        {[].map((item, index) => (
                    <Card 
                      key={index} 
                    //   isFavorite={true}
                    //   onFavorite={obj => onAddToFavorite(obj)}
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