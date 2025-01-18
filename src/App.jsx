import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import Layout from "./Components/Layout";
import ErrorPage from "./Components/ErrorPage";
import Contacts from "./Pages/Contacts";
import AboutUs from "./Pages/AboutUs";
import CollectionBig from "./Pages/CollectionBig";

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/collection",
          element: <CollectionBig />,
        },
        {
          path: "/aboutus",
          element: <AboutUs />,
        },
        {
          path: "/contacts",
          element: <Contacts />,
        }
      ]
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
