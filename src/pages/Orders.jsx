import React from "react";
import { useContext } from "react";
import { Card } from "../components/Card";
import AppContext from "../context";


function Orders() {

  const { favorites, onAddToFavorite } = useContext(AppContext);

  return(
    <div className="content">

      <div className="content-header">
       <h1>My Favorites</h1>
      </div>
      
      <div className='goods'>

        {favorites.map((item, index) => (
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