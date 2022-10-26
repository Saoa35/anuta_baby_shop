import { Card } from "../components/Card";


function Favorites({ items, onAddToFavorite }) {

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
                      {...item}
                //   onPlus={obj => onAddToCart(obj)}
                    />      
                )
            )
            }
      </div>
    </div>
  )
}

export default Favorites;