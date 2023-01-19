import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from './pages/Home'
import ProductsPage from "./pages/Products";
import RootLayout from "./pages/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
      { path: "/", element: <HomePage></HomePage> },
      { path: "/product", element: <ProductsPage></ProductsPage> },
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App;
