// Карточки товаров
import { useEffect, useState } from "react";
import styles from "./Card.module.scss";
import ContentLoader from "react-content-loader";

export default function Card({
  id,
  name,
  price,
  img,
  onFavorite,
  onPlus,
  added = false,
  loading = false,
}) {
  const [isAdded, setIsAdded] = useState(added);
  const [isFavorite, setIsFavorite] = useState(false);

  const onClickPlus = () => {
    onPlus({ id, name, price, img });
    setIsAdded(!isAdded);
  };

  const onClickFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={styles.card}>
      {loading ? (
        <ContentLoader
          speed={2}
          width={210}
          height={260}
          viewBox="0 0 210 260"
          backgroundColor="#f3f3f3"
          foregroundColor="#e8e8e8"
        >
          <rect x="5" y="15" rx="9" ry="9" width="150" height="91" />
          <rect x="79" y="127" rx="0" ry="0" width="1" height="0" />
          <rect x="6" y="113" rx="7" ry="7" width="150" height="15" />
          <rect x="6" y="135" rx="7" ry="7" width="93" height="15" />
          <rect x="7" y="203" rx="7" ry="7" width="80" height="24" />
          <rect x="118" y="194" rx="7" ry="7" width="32" height="32" />
        </ContentLoader>
      ) : (
        <>
          <div className={styles.favorite} onClick={onClickFavorite}>
            <img
              src={
                isFavorite ? "img/heart-liked.svg" : "/img/heart-unliked.svg"
              }
              alt="unliked"
            />
          </div>
          <img width={133} height={112} src={img} alt={name} />
          <h5>{name}</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>{price} руб.</b>
            </div>
            <img
              className={styles.plus}
              onClick={onClickPlus}
              src={isAdded ? "/img/btn-checked.svg" : "/img/btn-lose.svg"}
              alt="Plus"
            />
          </div>
        </>
      )}
    </div>
  );
}
