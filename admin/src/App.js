import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import {Routes, Route } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import Table from "./components/table/Table";
import axios from 'axios'
import { PostProduct } from "./components/postProduct/PostProduct";
import { Products } from "./components/products/Products";
import { RestoreProducts } from "./components/restoreProducts/RestoreProducts";

import { Sells } from "./components/sells/Sells";
import { SellsDetail } from "./components/sells/SellsDetails";

import { PreLogin } from "./components/login/PreLogin";
import { Notified } from "./components/notified/Notified";


axios.defaults.baseURL = 'https://pf-ecommerce-production-ed4d.up.railway.app';
//axios.defaults.baseURL = 'http://localhost:3001'

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
        <Routes>
          <Route path="/">
             <Route exact path='/' element={<PreLogin/>}/> 
              <Route exact path="notified">
                <Route index element={<Notified />}/>
              </Route>
            <Route path='/home' element={<Home />} />
              <Route exact path="addadmin" element={<New inputs={userInputs} title="Add New Admin" />} >
            </Route>
              <Route exact path="users">
                <Route index element={<List />} />
                <Route path=":userId" element={<Single />} />
              </Route>  
              <Route exact path="products">
                <Route index element={<Products />} />
                <Route path='restore' elements={<RestoreProducts />} />
                <Route path=":productId" element={<Single />} />
              </Route>
              <Route exact path="sells">
                <Route index element={<Sells />} />
                <Route path=":id" element={<SellsDetail />} />
              </Route>
              <Route exact path="restore">
                <Route index element={<RestoreProducts />} />
              </Route>
              <Route exact path="postproducts">
                <Route index element={<PostProduct />} />
                <Route path=":id" element={<PostProduct />} />
                <Route
                  path="new"
                  element={<New inputs={productInputs} title="Add New Product" />}
                />
            </Route>
          </Route>
        </Routes> 
    </div>
  );
}

export default App;
