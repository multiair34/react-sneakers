// Карточки товаров

export default function Card({ name, price, img }) {
  return (
    <div className="card">
      <div className="favorite">
        <img src="/img/heart-unliked.svg" alt="unliked" />
      </div>
      <img width={133} height={112} src={img} alt={name} />
      <h5>{name}</h5>
      <div className="cardBottom d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{price}</b>
        </div>
        <button className="button">
          <img src="/img/plusPos.svg" alt="" />
        </button>
      </div>
    </div>
  );
}
