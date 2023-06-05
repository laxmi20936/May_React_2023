const RestaurantCard =(props)=>{
    console.log(props, "pppppx")
    let {resData} = props;
    const {name, avgRating,costForTwo,cloudinaryImageId,cuisines,deliveryTime }= resData?.data;
   

    return(
        <div className="res-card">
            {console.log("AA")}
            <div className="res-img-cont">
                <img className="res-image" src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + cloudinaryImageId} alt="no-img-found"></img>
            </div>
            <div className="res-card-data">
                <h3>{name}</h3>
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