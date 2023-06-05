// import {useState} from 'react';
import { useState, useEffect } from "react";
// import cards from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import Search from "./Search";

// import Search from "./Search";


export const Body = () => {
    const[allRes, setAllRes] = useState([])
    const [mockData, setMockData] = useState([]);
    console.log("laxmiiii",mockData)
    
    useEffect(()=>{
        fetchAPI()
    },[])

    const fetchAPI = async () => {
        const APIData =  await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.1623701&lng=72.9376316&page_type=DESKTOP_WEB_LISTING");
        const json = await APIData?.json();
        console.log(json)
        setMockData(json?.data?.cards[2]?.data?.data?.cards)
        setAllRes(json?.data?.cards[2]?.data?.data?.cards)
    }
    
    
    const topRatedRestaurant = () =>{
        // console.log("bhag")
        const filteredRestaurant = (allRes.filter((x) => {
            return x?.data?.avgRating >4
         }))

        console.log(filteredRestaurant, "aaa");
        setMockData(filteredRestaurant)
    }
    return allRes?.length ===0 ? (<Shimmer/>) :
        (<div className="body">
            {console.log("1st")}
            <div className="search-container">
                <Search allRes={allRes} setMockData={setMockData}/>
                <button onClick={()=> {topRatedRestaurant()} }> Top Rated Restaurant</button>
            </div>
            <div className="allRestaurant">
                {mockData?.length === 0 ? <div>No data found for this Restaurant</div>: 
                mockData.map((dataObj) => <RestaurantCard key={dataObj?.data?.id} resData={dataObj}/>) }
                {/* {
                    (mockData.map((dataObj) => <RestaurantCard key={dataObj.data.id} resData={dataObj}/>))
                }                */}
            </div>
        </div>)
}