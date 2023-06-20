import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";

import Home from './Pages/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Products from './Pages/Products/Products';
import Product from './Pages/Product/Product';
import './App.css';




const Layout = () =>{
 
  return(
    <div className="app">
      <Navbar />
      <Outlet />
      <Footer/>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
      path: "/",
      element: <Home/>
    },
    {
      path: "/products/:id",
      element: <Products/>,
    },
    {
      path: "/product",
      element: <Product />,
    },
   
  ]
}
]);


function App(){
  return (
  <div>
    <RouterProvider router={router} />
  </div>  
  )
}

export default App;
