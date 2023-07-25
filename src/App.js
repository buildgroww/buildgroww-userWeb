
import Home from "./pages/home/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from "react-router-dom";

import { useSelector } from "react-redux";
import { selectUser } from "./redux/userRedux";
import {  useEffect, useState } from "react";
import LoadingBar from 'react-top-loading-bar'
import Account from "./pages/myAccount/Account";
import Product from "./pages/product/Product";
import Company from "./pages/company/Company";
import Search from "./pages/search/Search"
// import { Search } from "@mui/icons-material";


function App() {
  const cart = useSelector((state)=>state.cart)
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    setProgress(100)
  }, [window.location.pathname])
  
  return (
    <>
      
    <Router>
      <Routes>
        <Route exact path="/" element={<Home  />} />
        <Route exact path="/search" element={<Search />} />
        <Route exact path="/account" element={<Account />} />
        <Route exact path="/company" element={<Company />} />
        <Route exact path="/product" element={<Product />} />
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
