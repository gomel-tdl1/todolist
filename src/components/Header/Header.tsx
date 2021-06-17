import React from "react";
import {Avatar} from "antd";
import logo from '../../assets/images/ying-Yang.svg'
import { NavLink } from "react-router-dom";

const Header = React.memo((props: any) => {
    const handleMenuClick = () => {

    }
    return <div className="text-white w-full h-full flex justify-between  items-center">
        <Avatar size={"large"} src={logo}/>
        <div>
            <div>
                <NavLink to={'/'}>Home</NavLink>

            </div>
            <div>

            </div>
        </div>
    </div>
})
export default Header;