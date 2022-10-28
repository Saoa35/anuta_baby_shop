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
      {/* <div className={styles.favorite} onClick={onClickFavorite}>
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
      </div> */}


    <ContentLoader 
          speed={0}
          width={210}
          height={295}
          viewBox="0 0 210 295"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb">
            
          <rect x="0" y="0" rx="10" ry="10" width="170" height="140" /> 
          <rect x="92" y="199" rx="0" ry="0" width="1" height="0" /> 
          <rect x="-1" y="165" rx="0" ry="0" width="170" height="20" /> 
          <rect x="0" y="195" rx="0" ry="0" width="100" height="20" /> 
          <rect x="0" y="239" rx="0" ry="0" width="80" height="25" /> 
          <rect x="134" y="234" rx="5" ry="5" width="32" height="32" />
      </ContentLoader>
    </div>
  )
}