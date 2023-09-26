import { useContext } from "react"
import { SidebarContext } from "../context/SidebarContext"

import { BsBag } from "react-icons/bs"

function Header(){
    const  {isOpen, setIsOpen} = useContext(SidebarContext)
    return(
    <header className="bg-[#12486B]">
        <div>Header</div>
        <div className="cursor-pointer flex relative" onClick={()=>setIsOpen(!isOpen)}>
            <BsBag className="text-2xl" />
        </div>
    </header>
    )
}
export default Header