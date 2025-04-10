import logo from "../../images/logo1.png";
import { useState, useEffect, useContext} from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import Switch from '@mui/material/Switch';
import {ThemeContext} from '../contexts/ThemeContext';
import { styled } from '@mui/material/styles';
import { useSelector } from "react-redux";
import { FaBars, FaTimes } from "react-icons/fa";


const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(22px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff',
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode == 'dark' ? 'red' : 'lightgrey',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: theme.palette.mode === 'dark' ? 'pink' : 'RGB(40,44,53)',
    width: 32,
    height: 32,
    '&:before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        '#fff',
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: theme.palette.mode === 'dark' ? 'pink' : '#aab4be',
    borderRadius: 20 / 2,
  },
}));
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);


  let [login, setLogin] = useState(true);
  const online = useOnlineStatus()
  //if no dependency array  => useeffect will called on every render
  //if dependency array is empty = []  => useeffect will called on initial render(just once)
  //if dependency array is not empty  = [btnNameReact]  => useeffect will called everytime btnnumber is updated
  // Subscribing to store using a Selector

  const cartItems = useSelector((store)=>store.cart.items)
  return (
    // <div className="flex border-2 border-red-500 justify-between items-center p-4 bg-white shadow-md md:px-6">
    // <header class="md:shrink-0" >
    //   <img src={logo} alt="logo_image" className="w-16 md:w-20 rounded-full" />
    // </header>

    // <button className="md:hidden text-2xl border-2 border-green-400" onClick={() => setMenuOpen(!menuOpen)}>
    //   {menuOpen ? <FaTimes /> : <FaBars />}
    // </button>

    // <div className={`md:flex border-2 border-red-600 items-center font-medium ${menuOpen ? "block" : "hidden"} md:block`}>
    //   <MaterialUISwitch onChange={toggleTheme} />

    //   <ul className="flex flex-col md:flex-row flex-wrap gap-2 md:space-x-8 p-4 m-2 text-lg text-center bg-white rounded-md">
    //     <li>Online Status: {online ? "🟢" : "🔴"}</li>
    //     <li><Link to="/" className="hover:text-orange-500">Home</Link></li>
    //     <li><Link to="/about" className="hover:text-orange-500">About</Link></li>
    //     <li><Link to="/contact" className="hover:text-orange-500">Contact</Link></li>
    //     <li><Link to="/grocery" className="hover:text-orange-500">Grocery</Link></li>
    //     <li><Link to="/cart" className="hover:text-orange-500">Cart</Link></li>

    //     <li className="relative">
    //       <span className="absolute -right-3 -top-3 bg-orange-500 text-white text-xs font-bold rounded-full px-2 py-1">
    //         {cartItems.length}
    //       </span>
    //       🛒
    //     </li>
    //   </ul>

    //   <button className="bg-orange-300 rounded-full px-6 py-2" 
    //     onClick={() => setLogin((prev) => !prev)}>
    //     {login ? "LOGIN" : "LOGOUT"}
    //   </button>
    // </div>
    // </div>

    <div className="flex justify-between items-center p-4 md:px-6">
    <header className="md:shrink-0" >
      <Link to="/" >
      <img src={logo} alt="logo_image" className="w-16 md:w-20 m-2 rounded-full" />
      </Link>
    </header>
    <button className="md:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
      {menuOpen ? <FaTimes style={menuOpen ? {display : 'none'} : ''} /> : <FaBars />}
    </button>
    <div
      className={`fixed top-0  right-0 h-full transition-transform duration-300 ease-in-out transform ${
        menuOpen ? "translate-x-0 z-10 bg-white md:bg-background-app" : "translate-x-full"
      } w-64 md:w-auto md:relative md:translate-x-0`}
    >
      <button className="absolute top-8 right-4 text-xl md:hidden" onClick={() => setMenuOpen(false)}>
        <FaTimes />
      </button>
      <div className="flex flex-col md:flex-row md:items-center font-medium p-6 space-y-4 md:space-y-0 md:space-x-6">
        <MaterialUISwitch onChange={toggleTheme} />
        <ul className="flex flex-col flex-wrap md:flex-row md:space-x-6 text-lg text-center">
          <li>Online Status: {online ? "🟢" : "🔴"}</li>
          <li><Link to="/" className="hover:text-orange-500">Home</Link></li>
          <li><Link to="/about" className="hover:text-orange-500">About</Link></li>
          <li><Link to="/contact" className="hover:text-orange-500">Contact</Link></li>
          {/* <li><Link to="/grocery" className="hover:text-orange-500">Grocery</Link></li> */}
          <li><Link to="/cart" className="hover:text-orange-500">Cart</Link></li>
          <li className="relative">
            <span className ={`absolute ${ menuOpen ? "-right-3 -top-7" : "-right-0 -top-3"} md:-right-0 md:-top-3  bg-orange-500 text-white text-xs font-bold rounded-full px-2 py-1`}>
              {cartItems.length}
            </span>
          </li>
        </ul>
        <button className="bg-orange-300 rounded-full px-6 py-2 text-lg md:text-xl" 
          onClick={() => setLogin((prev) => !prev)}>
          {login ? "LOGIN" : "LOGOUT"}
        </button>
      </div>
    </div>
  </div>
  );
};

export default Header;
