import { img } from "../constants";

const RestaurantCard =(props)=>{
    console.log(props, "pppppx")
    let {resData} = props;
    const {name, avgRating,costForTwo,cloudinaryImageId,cuisines,deliveryTime }= resData?.data;
   

    return(
        <div className="res-card">
            {console.log("AA")}
            <div className="res-img-cont">
                <img className="res-image" src={img + cloudinaryImageId} alt="no-img-found"></img>
            </div>
            <div className="res-card-data">
                <h3>{name.split(" ").join("")}</h3>
                <div className="cui">
                    <p className="cuisines">{cuisines.join(",")}</p>
                </div>
                
                <p>{avgRating}stars</p>
                <p>{deliveryTime} minutes</p>
                <p>Rs {costForTwo/100} FOR TWO</p>

            </div>
        </div>
    )
}

export default RestaurantCard;