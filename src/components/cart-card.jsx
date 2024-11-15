import { useEffect, useState } from "react";


export default function CartCard({
  quantity,
  title,
  price,
  cartList,
  setCartList,
}) {
  const [qty, setQty] = useState(quantity || 1);
 
  // sycData
  useEffect(() => {
    setCartList((prev) => {
      return prev.map((obj) => {
        console.log(obj.title, title);
        if (obj.name === title) {
          return { ...obj, qty: qty };
        }
        return obj;
      });
    });
  }, [qty]);

  const increment = () => {
    setQty((prev) => prev + 1);
  };

  const decrement = () => {
    if (qty > 1) {
      setQty((prev) => prev - 1);
    }
  };
  return (
    <div
      style={{
        display: "flex",
        gap: "5px",
        border: "1px solid gray",
        alignItems: "center",
        padding: "5px",
      }}
    >
      <img
        src=""
        alt=""
        style={{ width: "50px", height: "50px", border: "1px solid black" }}
      />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <span>{title}</span>
        <span style={{ fontSize: "12px" }}>{price}</span>
        <div style={{ display: "flex", gap: "5px", alignItems: "center" }}>
          <button
            style={{ paddingLeft: "5px", paddingRight: "5px" }}
            onClick={decrement}
          >
            -
          </button>
          <span style={{ fontSize: "12px" }}>{qty}</span>
          <button
            style={{ paddingLeft: "5px", paddingRight: "5px" }}
            onClick={increment}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
