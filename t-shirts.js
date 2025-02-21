const tshirts = [
  {
    title: 'Blue T-Shirt',
    image: 'blue-t-shirt.jpg',
    price: 7.99,
    stock: 4,
    quantity: 1
  },
  {
    title: 'Bright Purple T-Shirt',
    image: 'bright-purple-t-shirt.jpg',
    price: 5.99,
    stock: 1,
    quantity: 1
  },
  {
    title: 'Cobalt Blue T-Shirt',
    image: 'cobalt-blue-t-shirt.jpg',
    price: 9.99,
    stock: 5,
    quantity: 1
  },
  {
    title: 'Green T-Shirt',
    image: 'green-t-shirt.jpg',
    price: 6.99,
    stock: 0,
    quantity: 1
  },
  {
    title: 'Grey T-Shirt',
    image: 'blue-t-shirt.jpg',
    price: 4.99,
    stock: 2,
    quantity: 1
  },
  {
    title: 'Light Green T-Shirt',
    image: 'light-green-t-shirt.jpg',
    price: 7.99,
    stock: 4,
    quantity: 1
  },
  {
    title: 'Purple T-Shirt',
    image: 'purple-t-shirt.jpg',
    price: 7.99,
    stock: 0,
    quantity: 1
  },
  {
    title: 'Red T-Shirt',
    image: 'red-t-shirt.jpg',
    price: 6.99,
    stock: 3,
    quantity: 1
  },
  {
    title: 'Teal T-Shirt',
    image: 'teal-t-shirt.jpg',
    price: 7.99,
    stock: 2,
    quantity: 1
  }
]

const TshirtStore = () => {
  const [items, setItems] = React.useState(tshirts);

  const handleBuy = (index, quantity) => {
    setItems((prevItems) =>
      prevItems.map((item, i) =>
        i === index ? { ...item, stock: item.stock - quantity } : item
      )
    );
  };

  return (
    <div>
      <h1>T-Shirt Store</h1>
      <div className="store-container">
        {items.map((tshirt, index) => (
          <Tshirt
            key={index}
            tshirt={tshirt}
            index={index}
            handleBuy={handleBuy}
            setItems={setItems}
          />
        ))}
      </div>
    </div>
  );
};

const Tshirt = (props) => {
  const onClickHandler = () => {
    props.handleBuy(props.index, props.tshirt.quantity);
  };
  return (
    <div className="tshirt-card">
      <img src={`images/${props.tshirt.image}`} alt={props.tshirt.title} />
      <h3>{props.tshirt.title}</h3>
      <p className="price-tag">$ {props.tshirt.price}</p>

      {props.tshirt.stock > 0 ? (
        <React.Fragment>
          <p>{props.tshirt.stock} left!</p>
          <div className="select-container">
            <select
              value={props.tshirt.quantity}
              onChange={(e) => {
                const newQuantity = Number(e.target.value);
                setItems((prevItems) =>
                  prevItems.map((item, i) =>
                    i === index ? { ...item, quantity: newQuantity } : item
                  )
                );
              }}
            >
              {[...Array(props.tshirt.stock).keys()].map((num) => (
                <option key={num + 1} value={num + 1}>
                  {num + 1}
                </option>
              ))}
            </select>
            <button onClick={onClickHandler}>Buy</button>
          </div>
        </React.Fragment>
      ) : (
        <p className="out-of-stock">Out of Stock</p>
      )}
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<TshirtStore />);

