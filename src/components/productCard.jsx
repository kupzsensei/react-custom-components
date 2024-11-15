export default function ProductCard({
  title,
  price,
  description,
  cartList,
  setCartList,
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "5px",
        border: "2px solid black",
        width: "230px",
        height: "300px",
        overflow: "hidden",
        padding: "10px",
      }}
    >
      <h3>{title}</h3>
      <img
        src=""
        alt=""
        style={{
          border: "1px solid black",
          width: "100px",
          height: "100px",
          margin: "0 auto 0 auto",
        }}
      />
      <h4>Price : {price}</h4>
      <p style={{ textOverflow: "clip", flex: 1 }}>{description}</p>
      <button
        onClick={() => {
          if (cartList?.map((obj) => obj.name)?.includes(title)) {
            console.log("already exist");
            setCartList((prev) => {
              return prev?.map((obj) => {
                if (obj.name === title) {
                  return { ...obj, qty: obj.qty + 1 };
                }
                return obj;
              });
            });
          } else {
            setCartList([...cartList, { name: title, price: price, qty: 1 }]);
          }
        }}
      >
        add to cart
      </button>
    </div>
  );
}
