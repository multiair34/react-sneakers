import CartItems from "./CartItems";

export default function Drawer({ onCartClose, items = [] }) {
  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="d-flex justify-between mb-30">
          Корзина{" "}
          <img onClick={onCartClose} src="/img/btn-remove.svg" alt="Close" />
        </h2>
        {/* Сделать gap и переписать стили в SCSS */}
        <div className="items">
          {items.map(
            (obj) => (
              (<CartItems name={obj.name} price={obj.price} img={obj.img} />),
              (<CartItems name={obj.name} price={obj.price} img={obj.img} />)
            )
          )}
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
