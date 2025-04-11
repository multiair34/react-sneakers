// Карточки товаров в корзине

export default function CartItems({ name, price, img, onRemove }) {
  return (
    <div className="cartItem d-flex align-center mb-20">
      <img className="mr-20" width={70} height={70} src={img} alt={name} />
      <div className="mr-20">
        <p className="mb-5">{name}</p>
        <b>{price}</b>
      </div>
      <img
        onClick={() => onRemove()}
        className="removeBtn"
        src="/img/btn-remove.svg"
        alt="Remove"
      />
    </div>
  );
}
