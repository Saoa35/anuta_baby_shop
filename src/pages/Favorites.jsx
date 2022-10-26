import { Card } from "../components/Card";


function Favorites({ items, onAddToFavorite, onAddToCart }) {

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