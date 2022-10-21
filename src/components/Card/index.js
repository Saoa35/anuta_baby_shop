import styles from './Card.module.scss';

export function Card(props) {

  return(
    <div className="styles.card">
      <div className='favorite'>
        <img src='/img/unliked.svg' alt="Unliked" title="Set as Favorite"/>
      </div>
      <img width={170} height={140} style={{borderRadius:'10px'}}  src={props.img} alt="Goods"/>
      <h5>{props.title}</h5>
      <div className='cardBottom'>
        <div className="cardPrice">
          <span>Price:</span>
          <b>{props.price} UAH</b>
        </div>
        <button className='button' onClick={() => console.log(`${props.title} was added to cart!`)}>
          <img src='/img/plus.svg' width={11} height={11} alt='Plus' title="Add to Cart"/>
        </button>
      </div>
      </div>
  )
}