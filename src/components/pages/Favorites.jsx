import Card from "../Card/Card";
import { Link } from "react-router";

export default function Favorites({ items, onAddToFavorite, onAddToCart }) {
  return (
    <div className="content p-40 flex-row">
      <div className="d-flex align-center mb-40">
        {/* <Link to="/">
          <img src="/img/back-btn.png" alt="back" />
        </Link> */}
        <h1 className="">Мои закладки</h1>
      </div>
      <div className="table d-flex flex-wrap">
        {items.map((obj) => (
          <Card
            key={obj.name}
            id={obj.id}
            name={obj.name}
            price={obj.price}
            img={obj.img}
            onPlus={(item) => onAddToCart(item)}
            onFavorite={(item) => onAddToFavorite(item)}
          />
        ))}
      </div>
    </div>
  );
}
