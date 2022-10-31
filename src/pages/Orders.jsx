import axios from "axios";
import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Card } from "../components/Card";  
import AppContext from "../context";


function Orders() {

  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { onAddToCart, onAddToFavorite } = useContext(AppContext);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get('https://63540251e64783fa827d56c7.mockapi.io/orders');
        setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []));
        // setOrders(data.map((obj) => obj.items).flat());
        setIsLoading(false);
      } catch (error) {
        console.log(error.mesage);
      }
    })();
  }, []);

  return(
    <div className="content">
      <div className="content-header">
       <h1>My Orders</h1>
      </div>
      
      <div className='goods'>

        {(isLoading ? [...Array(8)] : orders).map((item, index) => (
          <Card key={index} loading={isLoading} {...item} />         
                )
            )
            }
      </div>
    </div>
  )
}

export default Orders;