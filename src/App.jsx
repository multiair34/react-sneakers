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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fethData() {
      const cartRespone = await axios.get(
        "https://67e3d5cd2ae442db76d1ce46.mockapi.io/cart"
      );
      const favoritesRespone = await axios.get(
        "https://67e3d5cd2ae442db76d1ce46.mockapi.io/cart"
      );
      const itemsResponse = await axios.get(
        "https://67e3d5cd2ae442db76d1ce46.mockapi.io/items"
      );

      setIsLoading(false);

      setItems(itemsResponse.data);
      setCartItems(cartRespone.data);
      setFavorites(favoritesRespone.data);
    }
    fethData();
  }, []);

  const onAddToCart = (obj) => {
    try {
      if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
        axios.delete(`https://67e3d5cd2ae442db76d1ce46.mockapi.io/cart/${id}`);
        setCartItems((prev) =>
          prev.filter((item) => Number(item.id) !== Number(obj.id))
        );
      } else {
        axios.post("https://67e3d5cd2ae442db76d1ce46.mockapi.io/cart", obj);
        setCartItems((prev) => [...prev, obj]);
      }
    } catch (error) {}
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
              cartItems={cartItems}
              searchValue={searchValue}
              onChangeSearchInput={onChangeSearchInput}
              onAddFavorite={onAddToFavorite}
              onAddToCart={onAddToCart}
              isLoading={isLoading}
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
