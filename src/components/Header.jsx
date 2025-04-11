import { Link } from "react-router";

export default function Header(props) {
  return (
    <header className="d-flex justify-between align-center p-40">
      <Link to="/">
        <div className="d-flex align-center">
          <img width={40} height={40} src="/img/logo.png" alt="#" />
          <div>
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="opacity-5">Магазин лучших кроссовок</p>
          </div>
        </div>
      </Link>
      <ul className="d-flex">
        <li onClick={props.onClickCart}>
          <img width={18} height={18} src="/img/cart.svg" alt="#" />
          <span>1205 руб.</span>
        </li>
        <li>
          <Link to="/favorites">
            <img width={18} height={18} src="/img/wishList.svg" alt="#" />
            <span>Избранное</span>
          </Link>
        </li>
        <li>
          <img width={18} height={18} src="/img/userProfile.svg" alt="#" />
          <span>Профиль</span>
        </li>
      </ul>
    </header>
  );
}
