import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  // {path: "/product" , element : <Products />}
  
])

export default router;
