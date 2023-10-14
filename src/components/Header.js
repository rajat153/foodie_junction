import img from "../../images/logo1.png";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  let [login, setLogin] = useState(true);
  const online = useOnlineStatus()
  const {loggedInUser} =  useContext(UserContext)
 
  //if no dependency array  => useeffect will called on every render
  //if dependency array is empty = []  => useeffect will called on initial render(just once)
  //if dependency array is not empty  = [btnNameReact]  => useeffect will called everytime btnnumber is updated

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
          <li>Cart</li>
        </ul>
      </div>
      <button onClick={() => setLogin((prev) => !prev)} className="login_btn">
        {login ? "LOGIN" : "LOGOUT"}
      </button>
      <p>{loggedInUser}</p>
     
    </div>
  );
};

export default Header;
