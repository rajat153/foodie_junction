import React from "react";
import ReactDOM from "react-dom/client"
import About from "./components/About";
import Header from "./components/Header";
import Body from './components/Body';
import Error from './components/Error';
import Contact from "./components/Contact";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import  RestaurantMenu from "./components/RestaurantMenu";





const App = () => {
    return (
        <div className = "app">
            <Header/>
            <Outlet/>
            {/* <Body/> */}
        </div>
    )
}

const appRouter = createBrowserRouter(
[{
    path:"/",
    element : <App/>,
    children : [
        {
            path:"/",
            element : <Body/>
        },
        {
            path:"/about",
            element : <About/>
        },
        {
            path:"/contact",
            element : <Contact/>   
        },
        {
            path:"/restaurant/:resId",
            element : <RestaurantMenu/>
        }
    ],
    errorElement: <Error/>
},

])
const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(<App/>)
root.render(<RouterProvider router = {appRouter}/>)