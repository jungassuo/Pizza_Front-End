import { useContext, useEffect, useState } from "react"
import { SidebarContext } from "../context/SidebarContext"

import { BsBag } from "react-icons/bs"

import { CartContext } from "../context/CartContext"

import {Link} from 'react-router-dom'

function Header(){

    const [isActive, setIsActive] = useState(false)
    const  {isOpen, setIsOpen} = useContext(SidebarContext)
    const {itemAmount} = useContext(CartContext)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 60 ? setIsActive(true) : setIsActive(false)
        })
    })

    return(
    <header className={`${isActive ? 'bg-[#12486B] py-4 shadow-md' : 'bg-none py-6'} z-10  fixed w-full transition-all`}>
        <div className="container mx-auto flex items-center justify-between h-full">
            <Link to={'/'}>
                <div>
                    <img className="w-[40px]" src='https://img.freepik.com/premium-vector/pizza-logo-design-vector-template_260747-62.jpg?w=2000'/>
                </div>
            </Link>
       
        <div className="cursor-pointer flex relative" onClick={()=>setIsOpen(!isOpen)}>
            <BsBag className="text-2xl" />
            <div className="absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white bg-red-500 rounded-full flex justify-center items-center">
                {itemAmount}
            </div>
        </div>
        </div>
    </header>
    )
}
export default Header