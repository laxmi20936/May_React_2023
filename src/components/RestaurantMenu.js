import { useState,useEffect } from "react";
import Shimmer from "./Shimmer"
import {useParams, useLocation, useNavigate} from "react-router-dom";
import { img } from "../constants";
const RestaurantMenu = () =>{
    const [menu, setMenu] = useState([]);
    const [test, setTest] = useState("");
    // const[ab, setAb]= useState({})


     const nav = useNavigate();
     console.log("AAAK",history)

    const params = useParams();
    console.log(params)
    const {id,name} = params
    console.log(menu)
    const fetchMenu = async ()=>{
        const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.1623701&lng=72.9376316&restaurantId=${id}&submitAction=ENTER`)
        const json = await data?.json();
        console.log(json);
        setMenu(json?.data?.cards);
    }
    useEffect(()=>{
      fetchMenu()
      
    },[])

    // Early Return
    // if(ab){
    //     console.log(menu, "menuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu", typeof ab, ab.card);
    //     return ab.card;
    // }
    // --------------------------------------

    return menu.length === 0 ? <Shimmer/> : 
    (
        <>
        <input type="text" value={test} onChange={e => setTest(e.target.value)}/>
        <button onClick={()=> nav(test)}> Click to go </button>
        <div>{menu[0]?.card?.card?.info?.name}</div>
        <div>{menu[0]?.card?.card?.info?.city}</div>
        <img src={`${img}${menu[0]?.card?.card?.info?.cloudinaryImageId}`}/>
        {menu[1]?.card?.card?.gridElements?.infoWithStyle?.offers.map(x => <div key ={x?.info?.offerIds[0]}>{x?.info?.header}</div>)}
        {/* <div>{"ol"}</div> */}
        </>
    )
}

export default RestaurantMenu;