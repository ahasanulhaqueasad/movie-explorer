import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import Movies from "./pages/Movies";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/movies",
    element: <Movies />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;