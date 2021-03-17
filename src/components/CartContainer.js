import React, { useEffect } from "react";
import { connect } from "react-redux";
import CartItems from "./CartItems";
import { CLEAR_CART, GET_TOTALS } from "../actions";

export const CartContainer = ({ cart = [], total, dispatch }) => {
  useEffect(() => {
    dispatch({ type: GET_TOTALS });
  });

  if (cart.length === 0) {
    return (
      <section className="cart">
        {/* cart header */}
        <header>
          <h2>Your bag</h2>
          <h4 className="empty-cart"> is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      {/* cart header */}
      <header>
        <h2>Your bag</h2>
      </header>
      {/* cart */}
      <article>
        {cart.map((item) => {
          return <CartItems key={item.id} {...item} />;
        })}
      </article>
      {/* cart footer */}
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total<span>${total}</span>
          </h4>
        </div>
        <button
          className="btn clear-button"
          onClick={() => dispatch({ type: CLEAR_CART })}
        >
          Clear cart
        </button>
      </footer>
    </section>
  );
};
const mapStateToProps = (state) => {
  //can be any argument(state) => state gives the current state of redux store
  const { cart, total } = state;
  return { cart, total };
};
//connect() = connects both react component & redux
export default connect(mapStateToProps)(CartContainer);
