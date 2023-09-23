import React from "react";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { CDN_URL } from "../utils/constant";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constant";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const RestaurantMenu = () => {
  let initialArray = Array.from({ length: 30 }, (_, index) => index === 0);

  const [hotelmenu, setHotelMenu] = useState(null);
  const [expanded, setExpanded] = useState(initialArray);

  const handleChange = (index) => (event, isExpanded) => {
    const newExpanded = [...expanded];
    newExpanded[index] = isExpanded;
    setExpanded(newExpanded);
  };

  const resId = useParams();

  useEffect(() => {
    gettHotelMenu();
  }, []);

  const gettHotelMenu = async () => {
    const getData = await fetch(
      MENU_API + resId.resId + "&catalog_qa=undefined&submitAction=ENTER"
    );
    // const getData =  await fetch ("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING")
    const response = await getData.json();
    setHotelMenu(response.data);
  };

  if (hotelmenu === null) return <Shimmer />;

  let { name, cuisines, costForTwoMessage } =
    hotelmenu?.cards[0]?.card?.card?.info;

  let cardItems =
    hotelmenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  let menuItemsCategory = cardItems?.filter((item) => {
    return (
      item?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  });

  return (
    <div className="restraunt_menu">
      <h1>{name}</h1>
      {menuItemsCategory.map((item, index) => {
        return (
          <div className="menuItem_container">
            <Accordion
              key={index}
              expanded={expanded?.[index]}
              onChange={handleChange(index)}
            >
              <AccordionSummary
                sx={{ borderBottom: "1px solid #f0f0f0" }}
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  {item.card.card.title} ({item.card.card.itemCards.length})
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  {item.card.card.itemCards.map((c, index) => {
                    return (
                      <div className="menuItem_card" key={index}>
                        <div>
                          <h3>{c.card.info.name}</h3>
                          <span>
                            {Number(
                              c.card.info.price || c.card.info.defaultPrice
                            ) / 100}
                          </span>
                        </div>
                        <img src={CDN_URL + `${c.card.info.imageId}`} alt="" />
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
