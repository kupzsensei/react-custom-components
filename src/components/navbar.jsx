import { useState } from "react";
import CartPopover from "./cart-popover";

export default function Navbar({ cartList, setCartList }) {
  const [cartState, setCartState] = useState(false);
  return (
    <nav
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px 15px 10px 15px",
      }}
      onMouseLeave={() => setCartState(false)}
    >
      <div>logo</div>
      <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
        <span>HOME</span>
        <span>CONTACTS</span>
        <span>ABOUT</span>
        <span style={{ position: "relative" }}>
          <h5
            style={{ cursor: "pointer" }}
            onClick={() => {
              setCartState(!cartState);
            }}
          >
            cart
          </h5>
          {cartState ? (
            <CartPopover cartList={cartList} setCartList={setCartList} />
          ) : (
            ""
          )}
        </span>
      </div>
    </nav>
  );
}
