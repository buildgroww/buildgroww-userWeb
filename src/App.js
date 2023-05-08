
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
        <Route exact path="/" element={<Home setLoading={setLoading} loading={loading} />} />
        <Route exact path="/websites" element={<Category/>} />
        <Route exact path="/logos" element={<Logo/>} />
        <Route exact path="/products" element={<Products/>} />
        <Route exact path="/product/:id" element={<Product/>} />
        <Route exact path="/cart" element={<Cart/>} />
        {cart.check && <Route exact path="/checkout" element={(user.currentUser!==null && user.currentUser.data!==null) ?<CheckOut/>:<Login/>} />}
       {cart.check && <Route exact path="/checkout/:id/:id" element={<CheckOutId/>} />}
       <Route exact path="/orders" element={(user.currentUser!==null && user.currentUser.data!==null) ?<Orders/>:<Login/>} />
        <Route exact path="/orderdetails" element={<OrderDetails/>} />
        <Route exact path="/my-account/profile" element={(user.currentUser!==null && user.currentUser.data!==null) ?<Profile/>:<Login/>} />
        <Route exact path="/my-account/address" element={(user.currentUser!==null && user.currentUser.data!==null) ?<Address/>:<Login/>} />
        <Route exact path="/search" element={<Search/>} />
        {(user.currentUser===null || (user.currentUser.data && user.currentUser.data===null)) && <Route exact path="/login" element={<Login/>} />}
        {(user.currentUser===null || (user.currentUser.data && user.currentUser.data===null)) && <Route exact path="/signup" element={<Signup/>} />}
        <Route exact path="/package" element={<Package/>} />
        <Route exact path="/services-maintenance" element={<Services/>} />
        <Route exact path="/packagedetails/:category" element={<PackageDetails/>} />
        <Route exact path="/packagedetails/:category/:duration" element={<PackageDuration/>} />
        <Route exact path="/rateproduct/:id" element={<RateProduct/>} />
        <Route path="/:nitish" element={<Status404/> } />
        <Route path="/apps" element={<ComingSoon/> } />
        <Route path="/dashboards" element={<ComingSoon/> } />
        <Route path="/graphics" element={<ComingSoon/> } />
        
      
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
