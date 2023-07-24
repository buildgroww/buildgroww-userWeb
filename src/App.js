
import Home from "./pages/home/Home";
import Category from "./pages/category/category/Category";
import Products from "./pages/category/products/Products";
import Product from "./pages/category/product/Product";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from "react-router-dom";
import Cart from "./pages/cart/Cart";
import Orders from "./pages/orders/Orders";
import CheckOut from "./pages/checkout/CheckOut";
import OrderDetails from "./pages/orders/OrderDetails";
import Profile from "./pages/profile/Profile";
import Search from "./pages/search/Search";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import Services from "./pages/services/Services"
import Address from "./pages/address/Address";
import { useSelector } from "react-redux";
import { selectUser } from "./redux/userRedux";
import CheckOutId from "./pages/checkoutId/CheckOutId";

import {  useEffect, useState ,useRef} from "react";
import Logo from "./pages/category/category/Logo";
import Package from "./pages/package/Package";
import PackageDetails from "./pages/packagedetails/PackageDetails";
import PackageDuration from "./pages/packageduration/PackageDuration";
import RateProduct from "./pages/rateProduct/RateProduct";
import Status404 from "./pages/status/404/404";
import ComingSoon from "./pages/status/comingSoon/ComingSoon";
// import CookiesPopup from "./components/cookiespopup/CookiesPopup";
import LoadingBar from 'react-top-loading-bar'
import Account from "./pages/myAccount/Account";


function App() {
  const cart = useSelector((state)=>state.cart)
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    setProgress(100)
  }, [window.location.pathname])
  
  const user = useSelector(selectUser)
  const type = "website"
  const plan = "basic"
  return (
    <>
      
    <Router>
      <Routes>
        <Route exact path="/" element={<Home  />} />
        <Route exact path="/account" element={<Account />} />
        
      
      </Routes>
    </Router>

    <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />

  </>
  );
}

export default App
