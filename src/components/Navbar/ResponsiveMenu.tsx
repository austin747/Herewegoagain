import { NavLink } from "../../constant/Navlink"
import { Logo } from "../../image"


type ResponsiveMenuProps ={
    showMenu : boolean
}
const ResponsiveMenu = ({showMenu}: ResponsiveMenuProps) => {
  return (
    <div className={`${showMenu ? "left-0" : "left-[-100%]"}
    fixed top-0 dark:bg-gray-900 dark:text-white h-screen w-[75%] flex flex-col py-8 px-8 z-50
    bg-white`}>
        <div className="mt-10">
            <img src={Logo} alt="" className="w-20" />
        </div>

        <div>
            <ul className="flex flex-col gap-5">
                {NavLink.map((navbar)=>(
                    <li key={navbar.id} className="text-lg font-semibold border-b border-gray-100
                   hover:text-primary dark:border-gray-800 duration-300 ">
                        <a href={navbar.path}>{navbar.name}</a>
                    </li>
                ))}
            </ul>
        </div>
        <div className="mt-auto">
            <button className="primary-btn w-full py-3">join now</button>
        </div>
    </div>
  )
}

export default ResponsiveMenu
