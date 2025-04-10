import RestrauntCard from "./RestrauntCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { LocationContext } from "../contexts/LocationContext";
import Footer from "./Footer";
import Carousel from "./carousel";
const Body = () => {
  const [resList, setResList] = useState([]);
  const [filterRestaurant, setfilterRestaurant] = useState([]);
  const [search, setSearch] = useState([""]);
  const [carauselData, setCarauselData] = useState([])
  const { lat, lng } = useContext(LocationContext)

  useEffect(() => {
    if (lat && lng) {
    fetchData();
    }
  }, [lat, lng]);

  //Whenever state variables update react triggers a reconcillation cycle;
  const fetchData = async () => {
    try{
     const data = await fetch(`https://foodie-junction-server.vercel.app/api/swiggy/restaurants?lat=${lat}&lng=${lng}`)
      if (!data.ok) {
        const err = data.status;
        throw new Error(err);
      }else{   
        const resp = await data.json();
        let filteredData = resp.data?.cards?.filter(
          (item) => item.card.card.id == "restaurant_grid_listing_v2"
        );
        const carauselData = resp.data?.cards?.filter(
          (item) => item.card.card.id == "whats_on_your_mind"
        );
        if (!filteredData || filteredData.length === 0) {
          console.error("No restaurant data found");
          setResList([]);
          setfilterRestaurant([]);
          setCarauselData([])
          return;
        }
        setResList(
          filteredData[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );
        setfilterRestaurant(
          filteredData[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );
        setCarauselData(carauselData[0]?.card?.card?.gridElements?.infoWithStyle?.info)
      } 
    }catch(err){
      console.log(err);
    }
  };

  // when component renders then after that useEffect callback function run
  const handleClick = () => {
    let newArr = filterRestaurant.filter((item) => item.info.avgRating >= 4.5);
    setfilterRestaurant(newArr);
  };

  const filterData = () => {
    let filterRes = resList.filter((item) =>
      item.info.name.toLowerCase().includes(search.toLowerCase())
    );
    setfilterRestaurant(filterRes);
  };

  const onlineStatus =useOnlineStatus()

  if(onlineStatus === false) return( <h1 className=" font-bold flex justify-center items-center h-screen text-2xl">Looks Like you are not connected to internet</h1>)

  return resList.length == 0 ? (
    <Shimmer />
  ) : (
    <main>
      <Carousel items = {carauselData}/>
      <div className="font-medium text-xl flex justify-between items-center p-4 m-4">
        <button
          className="px-8 py-2 rounded-full bg-orange-300 text-white"
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
            className="px-8 py-2 mx-3 rounded-full border-2 border-gray-300 "
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            value={search}
          />
          <button
            className="px-8 py-2 rounded-full bg-orange-300  text-white"
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
      <Footer/>
    </main>
  );
};

export default Body;
