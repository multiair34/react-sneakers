import Card from "../Card/Card";

function Home({
  items,
  searchValue,
  onChangeSearchInput,
  onAddToCart,
  onAddToFavorite,
}) {
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

      <div className="table d-flex flex-wrap">
        {items
          .filter((obj) =>
            obj.name.toLowerCase().includes(searchValue.toLowerCase())
          )
          .map((obj) => (
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

export default Home;
