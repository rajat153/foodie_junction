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
    <div className="flex justify-between">
      <header>
        <img src={img} alt="logo_image" className="w-28 mx-3 rounded-full" />
      </header>
      <div className="flex items-center font-medium">
        <ul className="flex justify-between p-4 m-4 space-x-8 text-xl ">
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
        <button  className = "bg-slate-300 rounded-full px-8 py-4  text-xl " onClick={() => setLogin((prev) => !prev)}>
        {login ? "LOGIN" : "LOGOUT"}
        </button>
      </div>
      
    </div>
  );
};

export default Header;
