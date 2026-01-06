import RestaurantCard from "./RestaurantCard";
import reslist from "./utils/mockData";
import { useEffect, useState } from "react";

const Body = () => {
  const [res, setres] = useState(reslist);
  useEffect(()=>{
    console.log("useEffect Called");
  },[])
  return (
    <div className="Body">
      <div className="filter">
        <div>
          <button
            className="filter-btn"
            onClick={() => {
              const filteredList = reslist.filter(
                (restaurant) => restaurant.info?.avgRating > 4.2
              );
              setres(filteredList);
            }}
          >
            Top-rated Restaurant
          </button>
        </div>
      </div>

      <div className="res-container">
        {res.map((restaurant, index) => {
          const id = restaurant?.info?.id ?? index;
          return <RestaurantCard key={id} resdata={restaurant} />;
        })}
      </div>
    </div>
  );
};

export default Body;
