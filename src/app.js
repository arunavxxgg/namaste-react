// const heading =React.createElement("h1",{},"Hello world from react");
// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "../components/Header";
import Body from "../components/Body";
const stylecard ={
    backgroundColor:"#E0E0E0",
}

  
 
  
 const reslist=[{
    info: {
id: "984919",
name: "Biryani By Kilo",
cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/4/59214092-2ebd-465b-bda6-a0f1fccf01cc_984919.JPG",
locality: "Gautam Budh Nagar",
areaName: "Sector 50",
costForTwo: "₹700 for two",
cuisines: [
"Biryani",
"Hyderabadi",
"North Indian"
],
avgRating: 4.2,
parentId: "130",
avgRatingString: "4.2",
totalRatingsString: "655",
sla: {
deliveryTime: 37,
lastMileTravel: 3,
serviceability: "SERVICEABLE",
slaString: "35-40 mins",
lastMileTravelString: "3.0 km",
iconType: "ICON_TYPE_EMPTY"
},
availability: {
nextCloseTime: "2025-07-22 00:00:00",
opened: true
},
badges: {
imageBadges: [
{
imageId: "newg.png",
description: "Gourmet"
}
]
},
isOpen: true,
type: "F",
badgesV2: {
entityBadges: {
imageBased: {
badgeObject: [
{
attributes: {
description: "Gourmet",
imageId: "newg.png"
}
}
]
},
textBased: { },
textExtendedBadges: { }
}
},
aggregatedDiscountInfoV3: {
header: "60% OFF",
subHeader: "UPTO ₹120"
},
orderabilityCommunication: {
title: { },
subTitle: { },
message: { },
customIcon: { }
},
differentiatedUi: {
displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
differentiatedUiMediaDetails: {
mediaType: "ADS_MEDIA_ENUM_IMAGE",
lottie: { },
video: { }
}
},
reviewsSummary: { },
displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
restaurantOfferPresentationInfo: { },
externalRatings: {
aggregatedRating: {
rating: "--"
}
},
ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
analytics: {
context: "seo-data-18d593c8-d015-4e89-a843-8802e31a827d"
},
cta: {
link: "https://www.swiggy.com/city/noida-1/biryani-by-kilo-gautam-budh-nagar-sector-50-rest984919",
text: "RESTAURANT_MENU",
type: "WEBLINK"
},
widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{

info: {
id: "647279",
name: "La Pino'z Pizza",
cloudinaryImageId: "d20fdc8c86aa8bd0638f47dd013d46f9",
locality: "Sector 51",
areaName: "Sector 51",
costForTwo: "₹400 for two",
cuisines: [
"Pizzas",
"Pastas",
"Italian",
"Desserts",
"Beverages"
],
avgRating: 4,
parentId: "4961",
avgRatingString: "4.0",
totalRatingsString: "5.5K+",
sla: {
deliveryTime: 20,
lastMileTravel: 2.3,
serviceability: "SERVICEABLE",
slaString: "15-20 mins",
lastMileTravelString: "2.3 km",
iconType: "ICON_TYPE_EMPTY"
},
availability: {
nextCloseTime: "2025-07-22 04:00:00",
opened: true
},
badges: { },
isOpen: true,
type: "F",
badgesV2: {
entityBadges: {
imageBased: { },
textBased: { },
textExtendedBadges: { }
}
},
aggregatedDiscountInfoV3: {
header: "ITEMS",
subHeader: "AT ₹49"
},
orderabilityCommunication: {
title: { },
subTitle: { },
message: { },
customIcon: { }
},
differentiatedUi: {
displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
differentiatedUiMediaDetails: {
mediaType: "ADS_MEDIA_ENUM_IMAGE",
lottie: { },
video: { }
}
},
reviewsSummary: { },
displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
restaurantOfferPresentationInfo: { },
externalRatings: {
aggregatedRating: {
rating: "3.3",
ratingCount: "98"
},
source: "GOOGLE",
sourceIconImageId: "v1704440323/google_ratings/rating_google_tag"
},
ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
analytics: {
context: "seo-data-18d593c8-d015-4e89-a843-8802e31a827d"
},
cta: {
link: "https://www.swiggy.com/city/noida-1/la-pinoz-pizza-sector-51-rest647279",
text: "RESTAURANT_MENU",
type: "WEBLINK"
},
widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
}

];

 
 

const AppLayout=()=>{
    return (
         <div className="app">
             
            <Header />
            <Body/>
         </div>
    );
    };


const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);
 