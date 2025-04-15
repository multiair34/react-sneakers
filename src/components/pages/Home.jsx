import Card from "../Card/Card";

function Home({
  items,
  cartItems,
  searchValue,
  onChangeSearchInput,
  onAddToCart,
  onAddToFavorite,
  isLoading,
}) {
  const renderItems = () => {
    const filtredItems = items.filter((obj) =>
      obj.name.toLowerCase().includes(searchValue.toLowerCase())
    );

    return (isLoading ? [...Array(10)] : filtredItems).map((obj) => (
      <Card
        key={obj.name}
        id={obj.id}
        name={obj.name}
        price={obj.price}
        img={obj.img}
        onPlus={(item) => onAddToCart(item)}
        onFavorite={(item) => onAddToFavorite(item)}
        added={cartItems.some((item) => Number(item.id) === Number(obj.id))}
        loading={isLoading}
      />
    ));
  };

  return (
    <div className="content p-40 flex-row">
      <div className="d-flex justify-between align-center mb-40">
        <h1>
          {searchValue ? `Поиск по запросу: "${searchValue}"` : "Все кроссовки"}
        </h1>
        <div className="search d-flex">
          <img src="/img/search.svg" alt="Search" />
          <input
            onChange={onChangeSearchInput}
            value={searchValue}
            placeholder="Поиск..."
          />
        </div>
      </div>

      <div className="table d-flex flex-wrap">{renderItems}</div>
    </div>
  );
}

export default Home;
