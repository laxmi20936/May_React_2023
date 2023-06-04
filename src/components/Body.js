// import {useState} from 'react';
import { useState, useEffect } from "react";
import cards from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import Search from "./Search";

// import Search from "./Search";


export const Body = () => {
    const [mockData, setMockData] = useState(cards);

    
    
    const topRatedRestaurant = () =>{
        // console.log("bhag")
        const filteredRestaurant = (mockData.filter((x) => {
            return x.data.avgRating >4
         }))

        console.log(filteredRestaurant, "aaa");
        setMockData(filteredRestaurant)
    }
    return(
        <div className="body">
            <div className="search-container">
                {/* <Search/> */}
                <Search mockData={mockData} setMockData={setMockData}/>
                <button onClick={()=> {topRatedRestaurant()} }> Top Rated Restaurant</button>
            </div>
            <div className="allRestaurant">
                {/* <RestaurantCard resData={resObj}/> */}
                {
                    mockData.map((dataObj)=> <RestaurantCard key={dataObj.data.id} resData={dataObj}/>)
                }               
            </div>
        </div>
    )
}