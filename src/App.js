import "./App.css";
import NavBar from "./components/NavBar";
import CartContainer from "./components/CartContainer";
import cartItems from "./cart-items";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./reducer";
import { DECREASE, INCREASE } from "./actions";

function App() {
  //Initial state
  const initialStore = {
    cart: cartItems,
    total: 0,
    //amount is cart quantity
    amount: 0,
  };
  //store
  const store = createStore(
    reducer,
    initialStore,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return (
    <div className="App">
      {/* connects the app to the Redux store */}
      <Provider store={store}>
        <NavBar />
        <CartContainer />
      </Provider>
    </div>
  );
}

export default App;
