import CartCard from "./cart-card";

export default function CartPopover({ cartList, setCartList }) {
  return (
    <div
      style={{
        position: "absolute",
        width: "200px",
        height: "300px",
        backgroundColor: "white",
        transform: "translateX(-100%)",
        display: "flex",
        flexDirection: "column",
        gap: "5px",
        padding: "1rem",
        overflowY: "auto",
      }}
    >
      {cartList?.map((product) => (
        <CartCard
          key={product.name}
          title={product.name}
          price={product.price}
          quantity={product.qty}
          cartList={cartList}
          setCartList={setCartList}
        />
      ))}
    </div>
  );
}
