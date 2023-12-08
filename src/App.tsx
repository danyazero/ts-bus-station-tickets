import './App.css'
import {Profile} from "./pages/Profile";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Home} from "./pages/Home";
import {BookSeat} from "./pages/BookSeat";

function App() {
    const router = createBrowserRouter([
        {
            path: "/profile",
            element: <Profile />,
        },
        {
            path: '/',
            element: <Home/>
        },
        {
            path: '/book/:id',
            element: <BookSeat/>
        }
    ]);
  return (
    <>
        <RouterProvider router={router} />
    </>
  )
}

export default App
