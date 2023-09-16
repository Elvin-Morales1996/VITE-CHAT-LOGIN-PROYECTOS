import { createBrowserRouter } from "react-router-dom"
import Home from "./Home"
import NoRuta from "./NoRuta"
import Dashboard from "./Dashboard"
import Logi from "./Logi"
import Signup from "./Signup"


const router = createBrowserRouter([
    {
        path: '/',
        element:<Home/>
    },
    {
        path: '/login',
        element:<Logi/>
    },
    {
        path:'/registrarse',
        element: <Signup/>
    },
    
    {
        path: '*',
        element: <NoRuta/>
    },
    {
        path: '/das',
        element: <Dashboard/>
    }
   
   
])

export default router