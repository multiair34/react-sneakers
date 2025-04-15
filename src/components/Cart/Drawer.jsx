export default function Drawer({ onRemove, onCartClose, items = [] }) {
  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="d-flex justify-between mb-30">
          Корзина{" "}
          <img onClick={onCartClose} src="/img/btn-remove.svg" alt="Close" />
        </h2>
        {/* Сделать gap и переписать стили в SCSS */}
        <div className="items">
          {items.map((obj) => (
            <div key={obj.id} className="cartItem d-flex align-center mb-20">
              <img
                className="mr-20"
                width={70}
                height={70}
                key={obj.name}
                src={obj.img}
                alt={obj.name}
              />
              <div className="mr-20">
                <p className="mb-5">{obj.name}</p>
                <b>{obj.price}</b>
              </div>
              <img
                onClick={() => onRemove(obj.id)}
                className="removeBtn"
                src="/img/btn-remove.svg"
                alt="Remove"
              />
            </div>
          ))}
        </div>

        <div className="cartTotalBlock">
          <ul className="cartTotalBlock">
            <li>
              <span>Итого:</span>
              <div></div>
              <b>21 498 руб.</b>
            </li>
            <li>
              <span>Налог 5%:</span>
              <div></div>
              <b>1074 руб.</b>
            </li>
          </ul>
          <button className="greenButton">
            Оформить заказ <img src="/img/arrow.svg" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}
