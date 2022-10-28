import { useState } from 'react';
import styles from './Card.module.scss';
import ContentLoader from 'react-content-loader';

export function Card({ id, title, img, price, onPlus, onFavorite, isFavorite = false, wasAdded = false }) {

  const [isAdded, setIsAdded] = useState(wasAdded);
  const [isLiked, setIsLiked] = useState(isFavorite);

  const onClickPlus = () => {
    onPlus({id, title, img, price})
    setIsAdded(!isAdded);
  };

  const onClickFavorite = () => {
    onFavorite({id, title, img, price})
    setIsLiked(!isLiked);
  }

  return(
    <div className={styles.card}>
      <div className={styles.favorite} onClick={onClickFavorite}>
        <img src={isLiked ? '/img/liked.svg' : '/img/unliked.svg'} 
             alt='Heart' 
             title={!isLiked ? "Set as Favorite" : 'Delete from Favorite'}/>
      </div>
      <img width={170} height={140} style={{borderRadius:'10px'}}  src={img} alt="Goods"/>
      <h5>{title}</h5>
      <div className={styles.cardBottom}>
        <div className={styles.cardPrice}>
          <span>Price:</span>
          <b>{price} UAH</b>
        </div>
        <img className={styles.plus} 
             onClick={onClickPlus} 
             src={isAdded ? '/img/btn-checked.svg' : '/img/btn-plus.svg'} 
             alt='Plus' 
             title={!isAdded ? "Add to Cart" : 'Delete from Cart'}/>
      </div>
    </div>
  )
}