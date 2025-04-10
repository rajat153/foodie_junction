import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../utils/cartSlice';
import { CDN_URL } from "../utils/constant";

const Cart = () => {
  const cartItems = useSelector((store)=>store.cart.items)

  console.log("cartitems",cartItems)

  const dispatch = useDispatch();

  const handleclearCart = () => {
     dispatch(clearCart())
  }

  return (
    <>
    {
        cartItems.map((c, index) => {
            return (
            <div className="menuItem_card" key={index}>
                <div>
                  <h3>{c.name}</h3>
                  <span>
                    {Number(
                      c.price || c.defaultPrice
                    ) / 100}
                  </span>
                </div>
                <div>
                {/* <button onClick={()=>handleAddItem(c..info)} style={{position:'absolute', right:"70px", backgroundColor:"black",color:"#fff"}}>ADD +</button> */}
                </div>
                <img src={CDN_URL + `${c.imageId}`} alt="" />
            </div>
            );
        })

    }

    <button onClick = {handleclearCart}>Clear cart</button>
    {cartItems.length === 0 && (<h4>Cart is Empty</h4>)}

    </>
    
    
  )
}

export default Cart;