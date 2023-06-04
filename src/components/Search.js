import { useState } from "react";
// import cards from "../utils/mockData";

const searchFilter = (search, mockData) => {
    const dataOfArr= mockData.filter(x => x.data.name.includes(search))
    return dataOfArr;
}
const Search = ({mockData, setMockData}) => {
    const[search, setSearch] = useState("");

    const submitHandler = (e)=>{
        e.preventDefault();
        console.log("sub,itted")
        const filterdata = searchFilter(search, mockData);
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