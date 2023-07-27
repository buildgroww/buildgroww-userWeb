
import Home from "./pages/home/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from "react-router-dom";



import Account from "./pages/myAccount/Account";
import Product from "./pages/product/Product";
import Company from "./pages/company/Company";
import Search from "./pages/search/Search"

import Cart from "./pages/cart/Cart"
import CheckOut from "./pages/checkout/CheckOut";
import Orders from "./pages/orders/Orders";
import Orderdetails from "./pages/orderdetails/Orderdetails";
// import { Search } from "@mui/icons-material";


function App() {
  
  return (
    <>
      
    <Router>
      <Routes>
        <Route exact path="/" element={<Home  />} />
        <Route exact path="/search" element={<Search />} />
        <Route exact path="/account" element={<Account />} />
        <Route exact path="/:location/:company" element={<Company />} />
        <Route exact path="/:location/:company/:id" element={<Product />} />
        <Route exact path="/checkout" element={<CheckOut />} />
        <Route exact path="/orderdetails" element={<Orderdetails />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/orders" element={<Orders />} />
      </Routes>
    </Router>

   

  </>
  );
}

export default App
