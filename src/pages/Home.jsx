import { useContext } from "react";
import  { Card }  from "../components/Card";
import AppContext from "../context";

function Home({ cartItems, serchValue, items, onChangeInput, onAddToFavorite, onAddToCart, loading }) {

  const { isItemAdded } = useContext(AppContext);

  const renderItems = () => {

    const filteredItems = items.filter(item => item.title.toUpperCase().includes(serchValue.toUpperCase()));
    
    return (loading ? [...Array(16)] : filteredItems).map((item, index) => (
      <Card 
            key={index} 
            wasAdded={isItemAdded(item.id)}
            onFavorite={obj => onAddToFavorite(obj)}
            onPlus={obj => onAddToCart(obj)}
            isLoading={loading}
            {...item}
      />
    ));       
  };
       
       
    
          

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