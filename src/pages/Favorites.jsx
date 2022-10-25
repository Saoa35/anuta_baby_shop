import { Card } from "../components/Card";


function Favorites({ items }) {

  return(
    <div className="content">

      <div className="content-header">
       <h1>My Favorites</h1>
      </div>
      
      <div className='goods'>

        {items.map((item, index) => (
                    <Card key={index} 
                        title={item.title} 
                        img={item.img} 
                        price={item.price} 
                //   onFavorite={obj => onAddToFavorite(obj)}
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