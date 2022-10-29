import React from "react";
import { useContext } from "react";
import { AppContext } from "../App";
import { Card } from "../components/Card";


function Favorites({ onAddToFavorite, onAddToCart }) {

  const state = useContext(AppContext);

  return(
    <div className="content">

      <div className="content-header">
       <h1>My Favorites</h1>
      </div>
      
      <div className='goods'>

        {items.map((item, index) => (
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

export default Favorites;