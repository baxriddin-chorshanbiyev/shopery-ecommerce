import {
   createBrowserRouter,
   RouterProvider,
   createRoutesFromElements,
   Route
} from "react-router-dom";

import RootLayout from "./components/layouts";

import Blog from "./pages/Blog/Blog";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Home from "./pages/Home/Home";


export default function App() {
   const routes = createBrowserRouter(
      createRoutesFromElements(
         <Route path='/' element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path='blog' element={<Blog />} />
            <Route path='products' element={<ProductDetails />} />
         </Route>
      )
   )

   return <RouterProvider router={routes} />
}
