import { useState } from "react"

const Header =()=>{
    const [login, setLogin]=useState(true)
    const [dataAuth, setDataAuth]=useState("Login")
    const loginFn = ()=>{
      setLogin(false)
    }

    const logoutFn = ()=>{
        setLogin(true)
      }

    return(
        <div className="header">
            <div className="img-container">
                <img  className="img" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png" alt="no-img"/>
            </div>
            <div className="nav-container">
                <ul className="nav-items">
                    <li>Home</li>
                    <li>About</li>
                    {/* {login ? <li onClick={loginFn}>Login</li>: <li onClick={logoutFn}>Logout</li>} */}
                    <li onClick={()=>dataAuth === "Login" ? setDataAuth("Logout") : setDataAuth("Login")}>{dataAuth}</li>
                    <li>Carddd</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;