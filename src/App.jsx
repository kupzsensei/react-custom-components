import { useState } from "react";
import Navbar from "./components/navbar";
import ProductCard from "./components/productCard";

const productList = [
  {
    id: 1,
    name: "product 1",
    price: 200,
    description: "salksalk lsakdal sdalkdjsa",
  },
  {
    id: 2,
    name: "Komik 1",
    price: 200,
    description: "salksalk lsakdal sdalkdjsa",
  },
  {
    id: 3,
    name: "RJ45 ",
    price: 200,
    description: "salksalk lsakdal sdalkdjsa",
  },
  {
    id: 4,
    name: "Key Board  1",
    price: 200,
    description: "salksalk lsakdal sdalkdjsa",
  },
  {
    id: 5,
    name: "Key Board  1",
    price: 200,
    description: "salksalk lsakdal sdalkdjsa",
  },
  {
    id: 6,
    name: "Key Board  warrior",
    price: 200,
    description: "salksalk lsakdal sdalkdjsa",
  },
];

function App() {
  const [cartList, setCartList] = useState([]);
  return (
    <main
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "turquoise",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Navbar cartList={cartList} setCartList={setCartList} />
      <section
        style={{
          padding: "15px",
          display: "flex",
          flex: 1,
          gap: "1rem",
          minHeight: "0",
          backgroundColor: "red",
          overflowY: "auto",
          marginBottom: "20px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem",

            // width: "10000px",
          }}
        >
          {productList?.map((product) => (
            <ProductCard
              key={product.id}
              title={product.name}
              price={product.price}
              description={product.description}
              cartList={cartList}
              setCartList={setCartList}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default App;
