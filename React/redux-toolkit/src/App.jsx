import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppLayout } from "./components/Layout/AppLayout";
import { Home } from "./pages/Home";
import { ProductList } from "./pages/ProductList";
import { Login } from "./pages/Login";
import { Cart } from "./pages/Cart";

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          element: <Home />,
          path: "/",
        },
        {
          element: <ProductList />,
          path: "/productList",
        },
        {
          element: <Cart />,
          path: "/cart",
        },
      ],
    },
    {
      element: <Login />,
      path: "/login",
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
