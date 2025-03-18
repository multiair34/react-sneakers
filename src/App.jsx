import { useState } from "react";
import Card from "./components/card";

function App() {
  return (
    <div className="wrapper clear">
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

      <div className="content p-40 flex-row">
        <h1 className="mb-40">Все кроссовки</h1>
        <div className="d-flex">
          <Card
            name="Мужские Кроссовки Nike Blazer Mid Suede"
            price="12 999 руб."
            img="/img/sneakers/1.jpg"
          />
          <Card
            name="Мужские Кроссовки Nike Air Max 270"
            price="12 999 руб."
            img="/img/sneakers/2.jpg"
          />
          <Card
            name="Мужские Кроссовки Nike Blazer Mid Suede"
            price="8 499 руб."
            img="/img/sneakers/3.jpg"
          />
          <Card
            name="Кроссовки Puma X Aka Boku Future Rider"
            price="8 999 руб."
            img="/img/sneakers/4.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
