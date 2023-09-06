/** @format */
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./routes/Root";
import ErrorPage from "./routes/ErrorPage";
import Destination from "./routes/Destination";
import Home from "./routes/Home";
import Crew from "./routes/Crew";
import CrewHome from "./components/CrewHome";
import Technology from "./routes/Technology";
import TechnologHome from "./components/TechnologHome";

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
        path: "/destination/",
        element: <Destination />,
      },
      {
        path: "/destination/:planetName",
        element: <Destination />,
      },
      {
        path: "/crew",
        element: <CrewHome />,
      },
      {
        path: "/crew/:crewName",
        element: <Crew />,
      },
      {
        path: "/technology",
        element: <TechnologHome />,
      },
      {
        path: "/technology/:techName",
        element: <Technology />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
