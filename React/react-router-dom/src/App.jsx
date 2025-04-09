import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppLayout } from "./layout/AppLayout";
import { Home } from "./pages/home";
import { Posts } from "./pages/posts";
import { About } from "./pages/about";
import { Details } from "./pages/details";
import { Login } from "./pages/Login";
import { Error } from "./pages/error";
import { SignUp } from "./pages/signUp";
import { Form } from "./pages/form";

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/posts",
          element: <Posts />,
        },
        {
          path: "/details/:postId",
          element: <Details />,
        },
      ],
    },
    {
      element: <Login />,
      path: "/login",
    },
    {
      element: <SignUp />,
      path: "/signUp",
    },
    {
      element: <Form />,
      path: "/form",
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
