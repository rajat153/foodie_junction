import React, { useContext }  from "react";
import { useState } from "react";
import Shimmer from "./Shimmer";
import { CDN_URL } from "../utils/constant";
import { useParams } from "react-router-dom";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import useRestrauntMenu from "../utils/useRestrauntMenu";
import { LocationContext } from "../contexts/LocationContext";
import { useDispatch } from "react-redux";
import { addItem, removeItem, removeSelectedItem } from "../utils/cartSlice";
import { useSelector } from "react-redux";

import CouponList from "./CouponList";


const RestaurantMenu = () => {
  let initialArray = Array.from({ length: 30 }, (_, index) => index === 0);
   const { lat, lng } = useContext(LocationContext)
  // const [hotelmenu, setHotelMenu] = useState(null);
  const [expanded, setExpanded] = useState(initialArray);

  const handleChange = (index) => (event, isExpanded) => {
    const newExpanded = [...expanded];
    newExpanded[index] = isExpanded;
    setExpanded(newExpanded);
  };

  const resId = useParams();

  const hotelmenu = useRestrauntMenu(resId, lat, lng);
  console.log(hotelmenu)

  const cartItems = useSelector((store)=>store.cart.items)
  // useEffect(() => {
  //   gettHotelMenu();
  // }, []);

  // const gettHotelMenu = async () => {
  //   const getData = await fetch(
  //     MENU_API + resId.resId + "&catalog_qa=undefined&submitAction=ENTER"
  //   );
  //   // const getData =  await fetch ("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING")
  //   const response = await getData.json();
  //   setHotelMenu(response.data);
  // };

  if (hotelmenu === null) return <Shimmer />;

  let {groupedCard} = hotelmenu?.cards[5] || hotelmenu?.cards[4]

  let {
    name,
    cuisines,
    costForTwoMessage,
    feeDetails,
    avgRating,
    veg,
    totalRatingsString,
  } = hotelmenu?.cards[2]?.card?.card?.info;

  // let cardItems =
  //   hotelmenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  //  console.log(cardItems)
  // let { name, cuisines, costForTwoMessage } =
  //   hotelmenu?.cards[0]?.card?.card?.info;

  let cardItems = groupedCard?.cardGroupMap?.REGULAR?.cards;

  console.log("cardItwms", cardItems)
  let menuItemsCategory = cardItems?.slice(2)?.filter((item) => {
    return (
      item?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  });

  const dispatch = useDispatch()

  const handleAddItem = (item)=>{
    //dispatch an action
    dispatch(addItem(item))
  }

  const handleRemoveItem = (item)=>{
    //dispatch an action
    dispatch(removeSelectedItem(item))
  }

  let couponArray =
    hotelmenu?.cards[3].card.card.gridElements.infoWithStyle.offers;
  return (
    <div className="container mx-auto py-6">
      <div className="flex flex-row justify-between items-center  border-dotted border-b-4 my-12">
        <div className="">
          <h1 className="font-bold text-2xl mx-4 py-2">{name}</h1>
          <h2 className="font-light font-sans text-lg mx-6">
            {cuisines.join(",")}
          </h2>
          <h2 className="font-thin font-sans mx-6 ">{costForTwoMessage}</h2>
          <h3 className="font-thin font-sans mx-6 mb-6 py-2">
            {feeDetails.message}
          </h3>
        </div>

        <div className="border-2 rounded-lg p-2">
          <p className="border-b-2 py-2 text-custom-color tracking-tighter text-2xl font-large">
            ⭐{avgRating}
          </p>
          <p className=" text-custom-color tracking-tighter text-xl font-semibold">
            {totalRatingsString}
          </p>
        </div>
      </div>
      <CouponList couponArray={couponArray} />
      {menuItemsCategory?.map((item, index) => {
        return (
          <div className="menuItem_container py-2">
            <Accordion
              key={index}
              expanded={expanded?.[index]}
              onChange={handleChange(index)}
            >
              <AccordionSummary
                // sx={{ borderBottom: "1px solid #f0f0f0" }}
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <h1 className="font-bold text-xl">
                  {item.card.card.title} ({item.card.card.itemCards.length})
                </h1>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  {item.card.card.itemCards.map((c, index) => {
                    return (
                      <div
                        className=" flex justify-between p-2 border-b-2 m-2"
                        key={index}
                      >
                        <div className="font-medium text-xl leading-10 py-2">
                          <h3>{c.card.info.name}</h3>
                          <div>
                            ₹
                            {Number(
                              c.card.info.price || c.card.info.defaultPrice
                            ) / 100} {
                            }
                          </div>
                          {c?.card?.info?.ratings?.aggregatedRating?.rating && <div className="flex items-center"><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" fillColor="#116649"><rect width="14" height="14" fill="white"></rect><path d="M5.67163 3.99166C6.22068 2.34179 6.49521 1.51686 7 1.51686C7.50479 1.51686 7.77932 2.34179 8.32837 3.99166L8.65248 4.96556H9.60668C11.4122 4.96556 12.315 4.96556 12.4703 5.45302C12.6256 5.94049 11.8893 6.4628 10.4167 7.50744L9.67376 8.03444L9.97544 8.94095C10.5325 10.615 10.8111 11.452 10.4033 11.754C9.99553 12.056 9.27604 11.5457 7.83705 10.5249L7 9.93112L6.16295 10.5249C4.72396 11.5457 4.00447 12.056 3.5967 11.754C3.18893 11.452 3.46747 10.615 4.02456 8.94095L4.04557 8.87783C4.18081 8.47145 4.24843 8.26825 4.18684 8.08006C4.12525 7.89187 3.94958 7.76725 3.59824 7.51802C2.11566 6.46633 1.37437 5.94049 1.52971 5.45302C1.68504 4.96556 2.5878 4.96556 4.39332 4.96556H5.34752L5.67163 3.99166Z" fill="#116649"></path></svg>
                          {c?.card?.info?.ratings?.aggregatedRating?.rating}<p>({c?.card?.info?.ratings?.aggregatedRating?.ratingCountV2})</p>
                          </div>}
                          <p className="text-base text-gray-500 text-ellipsis overflow-hidden whitespace-normal max-w-[70vw]">
                            {c.card.info.description}
                          </p>
                        </div>                        
                        {/* <div> */}
                        {/* <img src={CDN_URL + `${c.card.info.imageId}`} alt="" /> */}
                        {/* {cartItems.find((item)=> item.id == c.card.info.id) ? 
                        <div className = "adding_btn">
                          <button onClick={()=>handleRemoveItem(c.card.info)} >-</button>
                          <p>{cartItems.filter((item)=> item.id == c.card.info.id).length}</p>
                          <button  onClick={()=>handleAddItem(c.card.info)}>+</button>
                        </div>  :
                        <button className="btn1" onClick={()=>handleAddItem(c.card.info)} >ADD +</button>} */}
                        {/* </div> */}
                        {/* <img
                          className="h-40 w-40 rounded-md"
                          src={CDN_URL + `${c.card.info.imageId}`}
                          alt=""
                        /> */}
                         <div className="h-40 w-40 relative">
                          <img
                            className="h-40 w-40 rounded-md"
                            src={CDN_URL + `${c.card.info.imageId}`}
                            alt=""
                          />
                          {cartItems.find((item) => item.id == c.card.info.id) ? (
                            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-md flex items-center p-1">
                              <button onClick={() => handleRemoveItem(c.card.info)}>-</button>
                              <p className="mx-2">
                                {cartItems.filter((item) => item.id == c.card.info.id).length}
                              </p>
                              <button onClick={() => handleAddItem(c.card.info)}>+</button>
                            </div>
                          ) : (
                            <button
                              className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-white px-3 py-1 rounded-md shadow-md font-semibold"
                              onClick={() => handleAddItem(c.card.info)}
                            >
                              ADD +
                            </button>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
