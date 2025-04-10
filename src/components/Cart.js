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
    {cartItems.length !== 0  && <button className = "p-2 my-2 mx-auto block bg-orange-300 rounded-lg"onClick = {handleclearCart}>Clear cart</button>}
    {cartItems.length === 0 && (
      <div className='flex flex-col items-center'>
      <div
        className="bg-[url('https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0')] bg-no-repeat bg-contain bg-center h-96 w-full"
      >
      </div>
      <h3 className="mt-4 text-lg font-bold">Your Cart is Empty</h3>
      <h4 className='text-center'>You can go to home page to view more restaurants</h4>
      </div>
    )}
    </>
  )
}

export default Cart;