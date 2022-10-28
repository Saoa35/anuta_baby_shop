import  { Card }  from "../components/Card";

function Home({ cartItems, serchValue, items, onChangeInput, onAddToFavorite, onAddToCart }) {

  const renderItems = () => {
    return items
        .filter(item => item.title.toUpperCase().includes(serchValue.toUpperCase()))
        .map((item, index) => (
          <Card 
            key={index} 
            id={item.id}
            title={item.title} 
            img={item.imgUrl} 
            price={item.price} 
            wasAdded={cartItems.some(obj => Number(obj.id) === Number(item.id))}
            onFavorite={obj => onAddToFavorite(obj)}
            onPlus={obj => onAddToCart(obj)}
            isLoading={false}
          />
        )); 
  }

  return(
    <div className="content">
      <div className="content-header">
        <h1>{serchValue ? `Serching: ${serchValue}` : 'All Items'}</h1>
        <div className="search-block">
          <img src='/img/search.svg' alt='Search'/>
          <input onChange={onChangeInput} value={serchValue} placeholder="Searh..."/>
        </div>
      </div>
      
      <div className='goods'>{renderItems()}</div>
    </div>
  )
}

export default Home;