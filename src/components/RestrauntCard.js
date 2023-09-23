import { CDN_URL } from "../utils/constant";

const RestrauntCard = (props) => {
  return (
    <div className="card-container">
      <img
        src={CDN_URL + `${props.cloudinaryImageId}`}
        alt=""
        className="card_img"
      />
      <h2>{props.name}</h2>
      <span>⭐{props.avgRating}</span>
      <h3>{props.cuisines?.join(",")}</h3>
      <h5>{props.areaName}</h5>
    </div>
  );
};

export default RestrauntCard;
