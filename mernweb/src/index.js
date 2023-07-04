import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/auth";
import { CartProvider } from "./context/cart";
import SearchInput from "./components/Form/SearchInput";
import { SearchProvider } from "./context/search";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProvider>
    <SearchProvider>
    <CartProvider>
      
        <BrowserRouter>
          <App />
        </BrowserRouter>
      
    </CartProvider>
    </SearchProvider>
    
  </AuthProvider>
);

// // // ReactDOM.render(
// // //   <BrowserRouter>
// // //      <App />
// // //   </BrowserRouter>,
// //   document.getElementById('root')
// );
