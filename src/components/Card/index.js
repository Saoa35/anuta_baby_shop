import { useState } from 'react';
import styles from './Card.module.scss';

export function Card(props) {

  const [isAdded, setIsAdded] = useState(false);

  const onClickPlus = () => {
    setIsAdded(!isAdded);
  };

  return(
    <div className={styles.card}>
      <div className={styles.favorite} onClick={props.onClickFavorit}>
        <img src='/img/unliked.svg' alt="Unliked" title="Set as Favorite"/>
      </div>
      <img width={170} height={140} style={{borderRadius:'10px'}}  src={props.img} alt="Goods"/>
      <h5>{props.title}</h5>
      <div className={styles.cardBottom}>
        <div className={styles.cardPrice}>
          <span>Price:</span>
          <b>{props.price} UAH</b>
        </div>
          <img onClick={onClickPlus} src={isAdded ? '/img/btn-checked.svg' : '/img/plus.svg'} width={11} height={11} alt='Plus' title="Add to Cart"/>
      </div>
      </div>
  )
}