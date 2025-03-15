import RestrauntCard from "./RestrauntCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [resList, setResList] = useState([]);
  const [filterRestaurant, setfilterRestaurant] = useState([]);
  const [search, setSearch] = useState([""]);

  useEffect(() => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser");
    } else {
      navigator.geolocation.getCurrentPosition(fetchData, error);
    }
    fetchData();
  }, []);

  function error() {
    alert("Geolaocation Coordinate not found");
  }

  //Whenever state variables update react triggers a reconcillation cycle;
  const fetchData = async (position) => {
    const latitude = position?.coords?.latitude;
    const longitude = position?.coords?.longitude;
    const data = await fetch(
      `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${latitude}&lng=${longitude}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`
    );
    const resp = await data.json();
    let filteredData = resp.data?.cards?.filter(
      (item) => item.card.card.id == "restaurant_grid_listing"
    );

    if (!filteredData || filteredData.length === 0) {
      console.error("No restaurant data found");
      setResList([]);
      setfilterRestaurant([]);
      return;
    }

    setResList(
      filteredData[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilterRestaurant(
      filteredData[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  // when component renders then after that useEffect callback function run
  const handleClick = () => {
    let newArr = filterRestaurant.filter((item) => item.info.avgRating > 4);
    setfilterRestaurant(newArr);
  };

  const filterData = () => {
    let filterRes = resList.filter((item) =>
      item.info.name.toLowerCase().includes(search.toLowerCase())
    );
    setfilterRestaurant(filterRes);
  };

  const onlineStatus =useOnlineStatus()

  // console.log("res", resList)

  if(onlineStatus === false) return( <h1 className=" font-bold flex justify-center items-center h-screen text-2xl">Looks Like you are not connected to internet</h1>)

  return resList.length == 0 ? (
    <Shimmer />
  ) : (
    <main>
      <div className="font-medium text-xl flex justify-between items-center p-4 m-4">
        <button
          className="px-8 py-4 rounded-full bg-orange-300 text-white"
          onClick={() => {
            handleClick();
          }}
        >
          Top Rated Restraunts
        </button>
        <div>
          <input
            data-testid = "searchinput"
            type="text"
            className="px-8 py-3 mx-3 rounded-full border-2 border-gray-300 "
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            value={search}
          />
          <button
            className="px-8 py-4 rounded-full bg-orange-300  text-white"
            onClick={() => {
              filterData();
            }}
          >
            Search
          </button>
        </div>
      </div>
      <div className="flex flex-wrap justify-evenly">
        {filterRestaurant.map((item, index) => (
          <Link
            key={item.info.id}
            to={"/restaurant/" + item.info.id}
            className="card_link"
          >
            <RestrauntCard
              name={item.info.name}
              key={index}
              avgRating={item.info.avgRating}
              cuisines={item.info.cuisines}
              cloudinaryImageId={item.info.cloudinaryImageId}
              areaName={item.info.areaName}
              id={item.info.id}
            />
          </Link>
        ))}
      </div>
    </main>
  );
};

export default Body;
