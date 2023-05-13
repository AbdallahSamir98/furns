import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ShoppingCartContext from "./Context/ShoppingCartContext";

import About from "./Components/About/About";
import Collection from "./Components/Collection/Collection";
import Home from "./Components/Home/Home";
import Render from "./Components/Render/Render";
import  Cart  from "./Components/Cart/Cart";
import AllProducts from "./Components/HomeProducts/AllProducts";
import Blogs from "./Components/Blogs/Blogs";
import ExampleContext from "./Context/ExampleContext";
import NotFoundPage from "./Components/NotFoundPage/NotFoundPage";
import Login from "./Components/Contacts/Login";
import Register from "./Components/Contacts/Register";
import Chair from "./Components/NavBar/MainNavbar/Chair";
import Living from "./Components/NavBar/MainNavbar/Living/Living";
import Hospitial from "./Components/NavBar/MainNavbar/Hospitail/Hospitial";
import ProductDetail from "./Components/Products/ProductDetail/ProductDetail";


function App() {


  const routers = createBrowserRouter(
   
   
    [
      {
        path:'',element:
          <ShoppingCartContext>
            <ExampleContext>
        <Render/>
            </ExampleContext>
            </ShoppingCartContext>

 

        ,children:[
          {path:'',element:<Home/>},
          {path:'/home',element:<Home/>},
          {path:'/about',element:<About/>},
          {path:'/collection',element:<Collection/>},
          {path:'/cart',element:<Cart/>},
          {path:'/products',element:<AllProducts/>},
          {path:'/register',element:<Register/>},
          {path:'/login',element:<Login/>},
          {path:'/chair',element:<Chair/>},
          {path:'/living',element:<Living/>},
          {path:'/hospitial',element:<Hospitial/>},
          {path:'/productdetail',element:<ProductDetail/>},
         

          {path:'/blogs',element:
          
          <Blogs/>

          
          
          ,children:[
            {path:':name'},
            {path:':description'},
          ]},
          {path:'*',element:<NotFoundPage/>},

        ]
      }
    ]
  )
  return (
   <>
   <RouterProvider router={routers} />
   
    </>
  );
}

export default App;
