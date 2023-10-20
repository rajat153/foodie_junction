import React from "react";
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
import CouponList from "./CouponList";

const RestaurantMenu = () => {
  let initialArray = Array.from({ length: 30 }, (_, index) => index === 0);

  // const [hotelmenu, setHotelMenu] = useState(null);
  const [expanded, setExpanded] = useState(initialArray);

  const handleChange = (index) => (event, isExpanded) => {
    const newExpanded = [...expanded];
    newExpanded[index] = isExpanded;
    setExpanded(newExpanded);
  };

  const resId = useParams();

  const hotelmenu = useRestrauntMenu(resId);

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


  let {
    name,
    cuisines,
    costForTwoMessage,
    feeDetails,
    avgRating,
    veg,
    totalRatingsString,
  } = hotelmenu?.cards[0]?.card?.card?.info;

  let cardItems =
    hotelmenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  let menuItemsCategory = cardItems?.filter((item) => {
    return (
      item?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  });

  let couponArray =
    hotelmenu?.cards[1].card.card.gridElements.infoWithStyle.offers;

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
      {menuItemsCategory.map((item, index) => {
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
                        <div className="font-medium text-xl ">
                          <h3>{c.card.info.name}</h3>
                          <span>
                            ₹
                            {Number(
                              c.card.info.price || c.card.info.defaultPrice
                            ) / 100}
                          </span>
                          <p className="text-base font-medium ">
                            {c.card.info.description}
                          </p>
                        </div>
                        <img
                          className="h-40 w-40 rounded-md"
                          src={CDN_URL + `${c.card.info.imageId}`}
                          alt=""
                        />
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
