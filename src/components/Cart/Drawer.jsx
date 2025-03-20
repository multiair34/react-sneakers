import CartItems from "./CartItems";

export default function Drawer() {
  return (
    <div style={{ display: "none" }} className="overlay">
      <div className="drawer">
        <h2 className="d-flex justify-between mb-30">
          Корзина <img src="/img/btn-remove.svg" alt="Remove" />
        </h2>
        {/* Сделать gap и переписать стили в SCSS */}
        <div className="items">
          <CartItems
            name={"Мужские Кроссовки Nike Air Max 270"}
            price={"12 999 руб."}
            img={"/img/sneakers/1.jpg"}
          />
          <CartItems
            name={"Мужские Кроссовки Nike Air Max 270"}
            price={"12 999 руб."}
            img={"/img/sneakers/1.jpg"}
          />
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
