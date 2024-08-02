import React from "react"
import { Outlet } from "react-router-dom"
const Profile=()=>{
    return(
        <div>
            <h1>day la trang profile</h1>
            <h1>Header</h1>
            <h1>Noi dung trang</h1>

        <Outlet/>

            <h1>Fotter</h1>
        </div>
    )
}
export default Profile