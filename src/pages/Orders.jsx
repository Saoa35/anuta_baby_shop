import axios from "axios";
import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Card } from "../components/Card";  
import AppContext from "../context";


function Orders() {

  const [orders, setOrders] = useState([]);

  const { onAddToCart, onAddToFavorite } = useContext(AppContext);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get('https://63540251e64783fa827d56c7.mockapi.io/orders');
      setOrders(data.reduce((prev, obj) => [...prev, obj.items], []));
      // setOrders(data.map((obj) => obj.items).flat());
    })();
  }, []);

  return(
    <div className="content">
      <div className="content-header">
       <h1>My Orders</h1>
      </div>
      
      <div className='goods'>

        {orders.map((item, index) => (
                    <Card 
                      key={index} 
                    //   isFavorite={true}
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