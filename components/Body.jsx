import { info } from "../config";
import { config2 } from "../config2";
import { RestuarantCard } from "./ReactComponents";
import { useEffect, useState } from "react";

async function filterData(searchText ,RestuarantData) {  
     const filterData =await RestuarantData.filter((restuarants,index)=>{
   return  restuarants.name.toLowerCase().includes(searchText.toLowerCase());
   
  })
    return filterData;
  }

const Body = () => {
  
  const [searchText, setSearchText] = useState("KFC");
  const [RestuarantData, setRestuarantData] = useState([]);

  useEffect(()=>{
   getRestuarant();
  },[]);

  async function  getRestuarant() {
    const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=20.27060&lng=85.83340&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
    const json = await data.json();
    // console.log(json?.data.cards[4].card?.card?.gridElements?.infoWithStyle?.restaurants);
    // console.log("hi");
    setRestuarantData(json?.data.cards[4].card?.card?.gridElements?.infoWithStyle?.restaurants);
    console.log(RestuarantData);
  }
  return (
    <>
  
      <div className="searchBox">
        <input
          type="text"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
           onClick={async() => {
            const data =  await filterData(searchText, RestuarantData);
            setRestuarantData(data);
            console.log(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restuarant-card">
 
        { RestuarantData?.map((data ,index) => {
          return <RestuarantCard key={index} info={data.info} />;
        })}
      </div>
    </>
  );
};
export default Body;
