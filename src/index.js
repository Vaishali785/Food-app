import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import './index.css';
import CartContextProvider from "./store/context/CartProvider";
import { Provider } from "react-redux";
import { store } from "./store/redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    // <CartContextProvider>
    //     <App />
    // </CartContextProvider>
    <Provider store={store}>
        <App />
    </Provider>
)