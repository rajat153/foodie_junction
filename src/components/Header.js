import img from "../../images/logo1.png";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {
  let [login, setLogin] = useState(true);
  const online = useOnlineStatus()
  //if no dependency array  => useeffect will called on every render
  //if dependency array is empty = []  => useeffect will called on initial render(just once)
  //if dependency array is not empty  = [btnNameReact]  => useeffect will called everytime btnnumber is updated
  
  // Subscribing to store using a Selector

  const cartItems = useSelector((store)=>store.cart.items)
  console.log(cartItems)
  return (
    <div className="header">
      <header>
        <img src={img} alt="logo_image" className="logo" />
      </header>
      <div className="nav-items">
        <ul>
          <li>Online Status : {online ? '🟢' : '🔴'}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>
           {/* <span>45</span> */}
          <span style = {{ position :"absolute",borderBottom: "20px solid orange",borderLeft: "15px solid transparent",borderRight: "15px solid transparent",
	          height: "0px",right:"190px", fontSize:"15px",width: "45px", textAlign:"center"}}>{cartItems.length}</span>
           <Link to="/cart">Cart </Link>
          </li>
        </ul>
      </div>
      <button onClick={() => setLogin((prev) => !prev)} className="login_btn">
        {login ? "LOGIN" : "LOGOUT"}
      </button>
    </div>
  );
};

export default Header;
