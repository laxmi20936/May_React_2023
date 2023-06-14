import { useParams } from "react-router-dom"

const Dummy = () =>{
    const data =useParams();
    console.log("bhagvc", data)
    // {}
    const {id,name, zz}= data
    return(
        <div>Dummy Page <span>{id + " " + name + " " + zz}</span> </div>
    )
}

export default Dummy