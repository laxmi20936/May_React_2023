import { useState } from "react";
// import cards from "../utils/mockData";

const searchFilter = (search, allRes) => {
    const dataOfArr= allRes.filter(x => x.data.name.toLowerCase().includes(search.toLowerCase()))
    return dataOfArr;
}
const Search = ({allRes, setMockData}) => {
    console.log(allRes, "allRes")
    const[search, setSearch] = useState("");

    const submitHandler = (e)=>{
        e.preventDefault();
        console.log("sub,itted")
        const filterdata = searchFilter(search, allRes);
        setMockData(filterdata)
    }
    const changeHandler = (e) =>{
        console.log(e.target.value, "llll")
        setSearch(e.target.value)
        // setMockData(cards)

    }
    return(
        <div>
            <form onSubmit={submitHandler}>
                <input type ="text"  value = {search} onChange={(e)=>changeHandler(e)}/>
                <button>Search Restaurants</button>
            </form>
            
        </div>
        
    )
}

export default Search;