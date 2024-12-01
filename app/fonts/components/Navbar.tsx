import Image from 'next/image'
import React from 'react'
import Logo from '../../../public/assests/Logo.svg'
import User from '../../../public/assests/User.svg'
import Menu from '../../../public/assests/Menu.svg'



const Navitems = [
  {name:'Features'},
  {name:'Pricing'},
  {name:'Enterprise'},
  {name:'Career'},

];

const Navbar = () => {
  return (
    <nav className="flex w-full items-center justify-between px-[20px] py-[16px] lg:container lg:mx-auto lg:px-20">
        <div className="flex items-center">
            <Image  src={Logo} alt ="Logo"/>
            <div className="hidden lg:flex pl-[74px] gap-x-[56px]">
                {Navitems.map((item ,index)=>(
                    <p key={index} className="text-[#36485C] font-medium">{item.name}</p>
                   
                ))}
            </div>
        </div>
        <div className="flex gap-x-5">
            <p className="hidden lg:block font-medium text-[#36485C] pr-[56px]">Open an Account</p>
           <div className="flex items-center gap-x-2">
            <Image  src={User} alt ="User Profile"/>
            <span className="hidden font-medium text-[#36485C] lg:block">Sign in</span>
           </div>
           <Image src={Menu} alt ="Menu button " className="lg:hidden " />
        </div>

    </nav>
  )
}

export default Navbar