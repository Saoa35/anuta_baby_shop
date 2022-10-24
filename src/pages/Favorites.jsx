import  { Card }  from "../components/Card";

function Favorites({  }) {
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

        

      </div>
    </div>
  )
}

export default Favorites;