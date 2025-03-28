// Карточки товаров в корзине

export default function CartItems(props) {
  return (
    <div className="cartItem d-flex align-center mb-20">
      <img
        className="mr-20"
        width={70}
        height={70}
        src={props.img}
        alt={props.name}
      />
      <div className="mr-20">
        <p className="mb-5">{props.name}</p>
        <b>{props.price}</b>
      </div>
      <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
    </div>
  );
}
