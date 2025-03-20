export default function Header() {
  return (
    <header className="d-flex justify-between align-center p-40">
      <div className="d-flex align-center">
        <img width={40} height={40} src="/img/logo.png" alt="#" />
        <div>
          <h3 className="text-uppercase">React Sneakers</h3>
          <p className="opacity-5">Магазин лучших кроссовок</p>
        </div>
      </div>
      <ul className="d-flex">
        <li>
          <img width={18} height={18} src="/img/cart.svg" alt="#" />
          <span>1205 руб.</span>
        </li>
        <li>
          <img width={18} height={18} src="/img/wishList.svg" alt="#" />
          <span>Избранное</span>
        </li>
        <li>
          <img width={18} height={18} src="/img/userProfile.svg" alt="#" />
          <span>Профиль</span>
        </li>
      </ul>
    </header>
  );
}
