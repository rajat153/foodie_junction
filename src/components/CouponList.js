import React from 'react'

const CouponList = ({couponArray}) => {
  return (
    <div className='flex justify-evenly '>
       { couponArray.map((item)=>{
        return(
            <div className =" border-2 w-70 border-slate-200 rounded-md py-4 px-8 ">
                    <h1 className='text-coupon-heading  text-xl font-bold'>{item.info.header}</h1>
                    <p className="text-custom-color tracking-tighter text-lg font-medium">{item.info.couponCode} | {item.info.description}</p>
            </div>
        )

    })}
     

    </div>
    
  )
}

export default CouponList