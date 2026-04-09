import { FaPhoneAlt } from "react-icons/fa"

import { NavLink } from "../../constant/Navlink"
import { Logo } from "../../image"
import Darkmode from "./Darkmode"
import { IoMdClose } from "react-icons/io"
import { CiMenuBurger } from "react-icons/ci"
import ResponsiveMenu from "./ResponsiveMenu"
import { useState } from "react"

const NavBar = () => {

    const [showMenu, setMenu] = useState(false);
    const handelMenuToggle = ()=> setMenu(!showMenu)

    return (
        <div >
            
              
                  <div className="bg-primary hidden lg:flex ">
                    <div className=" container   flex justify-between py-2 text-white">
                    <div className="  flex items-center gap-2">
                        <FaPhoneAlt />
                        <span>+977-8565685</span>
                    </div>
                    <div>
                        <h1>Free Shipping on Orders Above Rs. 2000</h1>
                    </div>
                  </div>
                </div>
             

                <div className="dark:bg-black dark:text-white">
                    <div className=" container flex justify-between items-center ">
                    <img src={Logo} alt="logo" className="w-20" />

                    <div className="hidden lg:flex" >
                        <ul className="flex items-center gap-10">
                            {NavLink.map((item) => (
                                <li key={item.id} className="font-semibold text-lg hover:text-orange-500 cursor-pointer duration-300">
                                    <a href={item.path}>{item.name}</a>
                                </li>
                            ))}
                            <button className="bg-primary px-5 py-1 text-white font-semibold rounded-lg">shop now</button>
                       <Darkmode/>
                        </ul>

                    </div>

                    <div className="lg:hidden flex items-center gap-3">
                        <Darkmode/>
                        {showMenu ? (
                            <IoMdClose onClick={handelMenuToggle}/>
                        ):(
                            <CiMenuBurger onClick={handelMenuToggle}/>
                        )}

                    </div>

                   
                </div>
                </div>
                <ResponsiveMenu showMenu={showMenu}/>
            </div>
      

    )
}

export default NavBar
