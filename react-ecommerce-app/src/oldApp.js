import React, { useState, useReducer } from 'react';
import { Route, useHistory } from 'react-router-dom';

// Style Imports Here
import './static/css/bootstrap-custom.css';
import './static/plugins/fancybox/fancybox.min.css';
import './static/plugins/prism/prism.css';
import './static/css/uikit.css';
import './static/css/responsive.css';

// Font Awesome Icons and Material Icons Imports Here
import './static/fonts/fontawesome/css/fontawesome-all.min.css';
import './static/fonts/material-icons/material-icons.css';

import LandingPage from './pages/LandingPage/LandingPage';
import ProductPage from './pages/Products/ProductPage'
import LoginPage from './pages/Auth/LoginPage';
import RegisterPage from './pages/Auth/RegisterPage';
import ProductDetailPage from './pages/Products/ProductDetailPage';
import CartPage from './pages/Cart/CartPage';
import { storeContext, storeReducer, initialStore } from "./reducers/storeReducer";
import {accountReducer, initialAccounts, accountContext} from "./reducers/accountReducer";
import SuccessPage from "./pages/Auth/RegistrationSuccess";


function App() {
  //
  // const [user, setUser] = useState(window.sessionStorage.user ? JSON.parse(window.sessionStorage.user) : null);
  // const [users, setUsers] = useState([{first_name: "Kali", username: 'kali@email.com', password: 'pass'}]);

  const [cart, setCart] = useState([]);
  const [notifyAddToCart, setNotifyAddToCart] = useState(false);

  const [wishlist, setWishlist] = useState([]);
  const [notifyAddToWishlist, setNotifyAddToWishlist] = useState(false);

  const [loading, setLoading] = useState(false);

  const history = useHistory();

  const navigate = route => {
    console.log("Routing to: ", route)
    history.push(route);
  }

  // const logout = (e) => {
  //   window.sessionStorage.removeItem("user");
  //   setUser(null);
  //   console.log("Working")
  // }

  // const addItemToCartorWishlist = (itemId, type) => {
  //   user !== null ? fetch(`https://fakestoreapi.com/products/${itemId}`)
  //   .then(response=> response.json()
  //   .then(data=> {
  //     if (type === "cart"){
  //       let cartItems = cart;
  //       cartItems.push(data);
  //       setCart(cartItems);
  //       setNotifyAddToCart(true);
  //
  //     } else if (type === "wishlist"){
  //       let wishlistItems = wishlist;
  //       wishlistItems.push(data);
  //       setWishlist(wishlistItems);
  //       setNotifyAddToWishlist(true);
  //     }
  //
  //   })) : navigate("/login")
  // }

  const unSetNotifyAddToCart = () => {
    setNotifyAddToCart(false);
  }

  const unSetNotifyAddToWishList = () => {
    setNotifyAddToWishlist(false);
  }

  const [store, dispatchStore] = useReducer(storeReducer, initialStore);
  const [accounts, dispatchAccounts] = useReducer(accountReducer, initialAccounts);


  return (
      <div className="App">
        {/* <Switch> */}
        <accountContext.Provider value={{accounts: accounts, dispatchAccount: dispatchAccounts, navigate: navigate}}>
          <Route exact={true} path="/" render={()=> <LandingPage cart={cart} />} />
          <Route path="/login" render={()=> <LoginPage navigate={navigate} />} />
          <Route path="/register" render={()=> <RegisterPage navigate={navigate} />} />
          <Route path={"/register-success"} render={()=> <SuccessPage />  }/>
          <storeContext.Provider value={{store: store, dispatchStore: dispatchStore}}>
            <Route exact={true} path="/products" render={()=>
                  <ProductPage setLoading={setLoading} loading={loading} />}
            />
            <Route exact={true} path="/products/:id" render={()=> <ProductDetailPage />} />
            <Route exact={true} path="/cart/:type" render={()=> <CartPage />} />
          </storeContext.Provider>
        </accountContext.Provider>
        {/* </Switch> */}
      </div>
  );
}

export default App;
