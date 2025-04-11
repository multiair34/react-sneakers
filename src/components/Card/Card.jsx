// Карточки товаров
import { useEffect, useState } from "react";
import styles from "./Card.module.scss";

export default function Card({ id, name, price, img, onFavorite, onPlus }) {
  const [isAdded, setIsAdded] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const onClickPlus = () => {
    onPlus({ name, price, img });
    setIsAdded(!isAdded);
  };

  const onClickFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={styles.card}>
      <div className={styles.favorite} onClick={onClickFavorite}>
        <img
          src={isFavorite ? "img/heart-liked.svg" : "/img/heart-unliked.svg"}
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
    </div>
  );
}
