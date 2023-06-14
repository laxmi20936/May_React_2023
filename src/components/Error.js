import { useRouteError } from "react-router-dom";
const Error = ()=>{
    const err = useRouteError();
    const {status,data, statusText} = err
    console.log(err);

    return(<>
        <div>Opps! something went wrong</div>
        <h1>{data}</h1>
        <h1>{status}</h1>
        <h1>{statusText}</h1>
    
    </>)
}

export default Error;