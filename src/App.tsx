import './App.css'
import {Profile} from "./pages/Profile";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Home} from "./pages/Home";

function App() {
    const router = createBrowserRouter([
        {
            path: "/profile",
            element: <Profile />,
        },
        {
            path: '/',
            element: <Home/>
        }
    ]);
  return (
    <>
        <RouterProvider router={router} />
    </>
  )
}

export default App
