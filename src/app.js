import React,{lazy, Suspense, useContext} from "react";
import ReactDOM from "react-dom/client"
import Header from "./components/Header";
import Body from './components/Body';
import Error from './components/Error';
import Contact from "./components/Contact";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import  RestaurantMenu from "./components/RestaurantMenu";
import {ThemeProvider} from  './contexts/ThemeContext';
import PageWrapper from "./components/PageWrapper";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
import { LocationProvider } from "./contexts/LocationContext";



// Chunking
// code splitting
// Dynamic bundling
//lazy loading
// on demand loading
//dynamic import

const About = lazy(()=>import('./components/About'));
const Grocery = lazy(()=>import('./components/Grocery'));

const App = () => {
    //  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
    //  console.log(isDarkMode)

    return (
        <LocationProvider>
         <ThemeProvider>
            <PageWrapper>
                <Provider store={appStore} >
                    <div className = "app">
                        <Header/>
                        <Outlet/>
                        {/* <Body/> */}
                    </div>
                </Provider>
            </PageWrapper>
         </ThemeProvider>
        </LocationProvider>
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
            element : <Suspense fallback={<h1>LOADING ....</h1>}><About/></Suspense>
        },
        {
            path:"/contact",
            element : <Contact/>   
        },
        {
            path:"/grocery",
            element : <Suspense fallback={<h1>Wait...</h1>}><Grocery/></Suspense> 
        },
        {
            path:"/restaurant/:resId",
            element : <RestaurantMenu/>
        },
        {
            path : '/cart',
            element : <Cart/>
        }
    ],
    errorElement: <Error/>
},

])
const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(<App/>)
root.render(<RouterProvider router = {appRouter}/>)