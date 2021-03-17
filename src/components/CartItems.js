import React from "react";
import { connect } from "react-redux";
import { INCREASE, DECREASE, REMOVE } from "../actions";

const CartItems = ({
  img,
  title,
  price,
  amount,
  //ownProps
  remove,
  increase,
  decrease,
}) => {
  return (
    <div className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>Title</h4>
        <h4 className="item-price">${price}</h4>
        {/* remove button */}
        <button className="remove-btn" onClick={() => remove()}>
          remove
        </button>
      </div>
      <div>
        {/* increase amount */}
        <button className="amount-btn" onClick={() => increase()}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z" />
          </svg>
        </button>
        {/* amount */}
        <p className="amount">{amount}</p>
        {/* decrease amount */}
        <button className="amount-btn" onClick={() => decrease()}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => {
  //ownProps = original props received by the component
  const { id, amount } = ownProps;
  return {
    //remove,increase,decrease whcih will be sent to your actual component(cartItems) as a props
    remove: () =>
      dispatch({
        type: REMOVE,
        payload: { id },
      }),
    increase: () => dispatch({ type: INCREASE, payload: { id } }),
    decrease: () => dispatch({ type: DECREASE, payload: { id, amount } }),
  };
};

//if we dont want to update store, keep value as null
export default connect(null, mapDispatchToProps)(CartItems);