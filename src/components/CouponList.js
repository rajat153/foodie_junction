import React from 'react'
import { COUPONLIST_URL } from '../utils/constant'

const CouponList = ({couponArray}) => {
  return (
    <div className='flex overflow-x-auto scroll-smooth no-scrollbar space-x-4'  style={{scrollbarWidth :'none'}}>
       { couponArray.map((item)=>{
        return(
          <div className="min-w-[250px] bg-white border border-gray-200 rounded-lg shadow-sm flex items-center justify-between">
            <img
              src={COUPONLIST_URL + `${item.info.offerLogo}`}
              alt="Offer Logo"
              className="w-10 h-10 mx-2"
            />
            <div>
              <h1 className="text-sm font-bold px-2">
                {item.info.header}
              </h1>
              <p className="text-xs text-gray-500 px-2">
                {item.info.couponCode} | {item.info.description}
              </p>
           </div>
          </div>
        )
    })}
    </div>
  )
}

export default CouponList