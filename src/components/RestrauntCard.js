import { CDN_URL } from "../utils/constant";

const RestrauntCard = (props) => {
  return (
    <div data-testid="resCard" className="font-medium text-xl w-60 m-4 p-2 hover:border-2 rounded-xl hover:scale-110 hover:ease-in duration-300 break-words hover:bg-orange-300 ">
      <img
        src={CDN_URL + `${props.cloudinaryImageId}`}
        alt=""
        className="w-full h-40 rounded-2xl"
      />
      <h2 className="p-2">{props.name}</h2>
      <span>⭐{props.avgRating}</span>
      <h3 className="p-2 truncate">{props.cuisines?.join(",")}</h3>
      <h5 className="p-2">{props.areaName}</h5>
    </div>
  );
};

export default RestrauntCard;
