import { render, screen, fireEvent } from "@testing-library/react"
import Header from "../Header";
// import {Provider} from "react-redux";
// import appStore from "../../utils/";
import {ThemeContext, ThemeProvider} from '../../contexts/ThemeContext';
import { BrowserRouter } from "react-router-dom";
import"@testing-library/jest-dom";




it("should render Header Component with a login button", ()=>{
     render(
        <ThemeProvider>
        <BrowserRouter>
                    <Header/>
        </BrowserRouter>
        </ThemeProvider>
     )

    const loginButton = screen.getByText("LOGIN");
    fireEvent.click(loginButton)
    const logoutButton = screen.getByText("LOGOUT");
    expect(logoutButton).toBeInTheDocument()
})

it("should render Header Component with a cart items", ()=>{
     render(
         <ThemeProvider>
         <BrowserRouter>
                     <Header/>
         </BrowserRouter>
         </ThemeProvider>
     )
 
    const cartItems = screen.getByText("Cart");
 
    expect(cartItems).toBeInTheDocument()
})
// we can also use regex inside a screen.getByText only
// const cartItems = screen.getByText(/cart/);

it("should change login Button to logout on click", ()=>{
    render(
         <ThemeProvider>
         <BrowserRouter>
                     <Header/>
         </BrowserRouter>
         </ThemeProvider>
    )
    const loginButton = screen.getByText("LOGIN");
    expect(loginButton).toBeInTheDocument()
})