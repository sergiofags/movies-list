import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { CreateMoviePage } from "./pages/CreateMoviePage";
import { ListMoviesPage } from "./pages/ListMoviesPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ListMoviesPage />,
  },
  {
    path: "/create",
    element: <CreateMoviePage />,
  },
]);

export function App() {
 return <RouterProvider router={router}/>
}