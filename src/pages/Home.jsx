import  { Card }  from "../components/Card";

function Home({ cartItems, serchValue, items, onChangeInput, onAddToFavorite, onAddToCart }) {

  return(
    <div className="content">
      <div className="content-header">
        <h1>{serchValue ? `Serching: ${serchValue}` : 'All Items'}</h1>
        <div className="search-block">
          <img src='/img/search.svg' alt='Search'/>
          <input onChange={onChangeInput} value={serchValue} placeholder="Searh..."/>
        </div>
      </div>
      
      <div className='goods'>

        {items
          .filter(item => item.title.toUpperCase().includes(serchValue.toUpperCase()))
          .map((item, index) => 
            <Card 
              key={index} 
              id={item.id}
              title={item.title} 
              img={item.imgUrl} 
              price={item.price} 
              wasAdded={cartItems.some(obj => obj.id === item.id)}
              onFavorite={obj => onAddToFavorite(obj)}
              onPlus={obj => onAddToCart(obj)}
            />
          )
        }
      </div>
    </div>
  )
}

export default Home;