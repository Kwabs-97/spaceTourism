/** @format */
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./routes/Root";
import ErrorPage from "./routes/ErrorPage";
import Destination from "./routes/Destination";
import Home from "./routes/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/destination",
        element: <Destination />,
      },
      {
        path: "/destination/:planetName",
        element: <Destination />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
