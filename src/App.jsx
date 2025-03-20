import { useState } from "react";
import Card from "./components/card";
import Header from "./components/Header";
import Drawer from "./components/Cart/Drawer";

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />

      <div className="content p-40 flex-row">
        <div className="d-flex justify-between align-center mb-40">
          <h1>Все кроссовки</h1>
          <div className="search d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Поиск..." />
          </div>
        </div>

        <div className="table d-flex">
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
