import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from './pages/Home'
import ProductsPage from "./pages/Products";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import ProductDetailPage from "./pages/ProductDetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      { path: "/", element: <HomePage></HomePage> },
      { path: "/product", element: <ProductsPage></ProductsPage>},
      { path: "/product/:productId", element: <ProductDetailPage></ProductDetailPage>}
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App;
