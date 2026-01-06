import { CDN_URL } from "./utils/constant";

const styleCard = {
  backgroundColor: "#E0E0E0",
};

const RestaurantCard = (props) => {
  const { resdata } = props;

  if (!resdata || !resdata.info) {
    return <div>No data found</div>;
  }

  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    sla,
  } = resdata.info;

  // ✅ Log inside component where resdata is available
  console.log("Image URL:", CDN_URL + cloudinaryImageId);

  return (
    <div className="res-card" style={styleCard}>
      <img
        className="res-logo"
        src={CDN_URL + cloudinaryImageId}
        alt={name}
      />
      <h3>{name}</h3>
      <h4>{cuisines?.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{sla?.deliveryTime} mins</h4>
    </div>
  );
};

export default RestaurantCard;
