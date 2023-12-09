import './App.css'
import {Profile} from "./pages/Profile";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Home} from "./pages/Home";
import {BookSeat} from "./pages/BookSeat";
import {Menu} from "./widgets/Menu";

function App() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Menu/>,
            children: [
                {
                    path: "profile",
                    element: <Profile />,
                },
                {
                    path: '',
                    element: <Home/>
                },
                {
                    path: 'book/:id',
                    element: <BookSeat/>
                }
            ]
        }
    ]);
  return (
    <>

        <RouterProvider router={router} />
    </>
  )
}

export default App


// <BrowserRouter>
// <Route path="/" element={<Home/>}/>
// <Route path="/profile" element={<Profile/>}/>
// <Route path="/book/:id" element={<BookSeat/>}/>
// </BrowserRouter>