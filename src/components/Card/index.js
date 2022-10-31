import { useContext, useState } from 'react';
import styles from './Card.module.scss';
import ContentLoader from 'react-content-loader';
import AppContext from '../../context';

export function 
        Card({ 
          id, 
          title, 
          imgUrl, 
          price, 
          onPlus, 
          onFavorite, 
          isFavorite = false, 
          isLoading = false }) {

  const [isLiked, setIsLiked] = useState(isFavorite);

  const { isItemAdded } = useContext(AppContext);

  const onClickPlus = () => {
    onPlus({id, title, imgUrl, price})
  };

  const onClickFavorite = () => {
    onFavorite({id, title, imgUrl, price})
    setIsLiked(!isLiked);
  }

  return(
    <div className={styles.card}>
      {isLoading ? (
          <ContentLoader 
              speed={0}
              width={210}
              height={285}
              viewBox="0 0 210 285"
              backgroundColor="#f3f3f3"
              foregroundColor="#ecebeb">
              <rect x="0" y="0" rx="10" ry="10" width="170" height="140" /> 
              <rect x="92" y="199" rx="0" ry="0" width="1" height="0" /> 
              <rect x="0" y="173" rx="0" ry="0" width="170" height="20" /> 
              <rect x="0" y="204" rx="0" ry="0" width="100" height="20" /> 
              <rect x="0" y="263" rx="0" ry="0" width="80" height="25" /> 
              <rect x="134" y="256" rx="5" ry="5" width="32" height="32" />
          </ContentLoader>
        ) : (
        <>
          <div className={styles.favorite} onClick={onClickFavorite}>
          <img src={isLiked ? '/img/liked.svg' : '/img/unliked.svg'} 
              alt='Heart' 
              title={!isLiked ? "Set as Favorite" : 'Delete from Favorite'}/>
          </div>
          <img width={170} height={140} style={{borderRadius:'10px'}}  src={imgUrl} alt="Goods"/>
          <h5>{title}</h5>
          <div className={styles.cardBottom}>
            <div className={styles.cardPrice}>
              <span>Price:</span>
              <b>{price} UAH</b>
            </div>
            {onPlus && <img className={styles.plus} 
                onClick={onClickPlus} 
                src={isItemAdded(id) ? '/img/btn-checked.svg' : '/img/btn-plus.svg'} 
                alt='Plus' 
                title={!isItemAdded(id) ? "Add to Cart" : 'Delete from Cart'}
            />}
          </div>
        </>
      )}
    
    </div>
  )
}