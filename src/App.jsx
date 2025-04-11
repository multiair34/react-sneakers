import { useEffect, useState } from "react";
import axios from "axios";
import Header from "./components/Header";
import Drawer from "./components/Cart/Drawer";
import { Route, Routes } from "react-router";
import Favorites from "./components/pages/Favorites";
import Home from "./components/pages/Home";

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [cartOpened, setCartOpened] = useState(false);

  useEffect(() => {
    axios
      .get("https://67e3d5cd2ae442db76d1ce46.mockapi.io/items")
      .then((res) => {
        setItems(res.data);
      });
    axios
      .get("https://67e3d5cd2ae442db76d1ce46.mockapi.io/cart")
      .then((res) => {
        setCartItems(res.data);
      });
    axios
      .get("https://67e3d5cd2ae442db76d1ce46.mockapi.io/cart")
      .then((res) => {
        setFavorites(res.data);
      });
  }, [setItems]);

  const onAddToCart = (obj) => {
    axios.post("https://67e3d5cd2ae442db76d1ce46.mockapi.io/cart", obj);
    setCartItems((prev) => [...prev, obj]);
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://67e3d5cd2ae442db76d1ce46.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const onAddToFavorite = (obj) => {
    if (favorites.find((favObj) => favObj.id == obj.id)) {
      axios.delete(
        `https://67e3d5cd2ae442db76d1ce46.mockapi.io/cart/${obj.id}`
      );
      setFavorites((prev) => prev.filter((item) => item.id !== obj.id));
    } else {
      axios.post("https://67e3d5cd2ae442db76d1ce46.mockapi.io/cart", obj);
      setFavorites((prev) => [...prev, obj]);
    }
  };

  return (
    <div className="wrapper clear">
      {cartOpened && (
        <Drawer
          items={cartItems}
          onRemove={onRemoveItem}
          onCartClose={() => setCartOpened(false)}
        />
      )}

      <Header onClickCart={() => setCartOpened(true)} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              items={items}
              searchValue={searchValue}
              onChangeSearchInput={onChangeSearchInput}
              onAddFavorite={onAddToFavorite}
              onAddToCart={onAddToCart}
            />
          }
        />
        <Route
          path="/favorites"
          element={
            <Favorites
              items={favorites}
              onAddFavorite={onAddToFavorite}
              onAddToCart={onAddToCart}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
