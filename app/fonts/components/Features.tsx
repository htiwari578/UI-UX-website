import React from 'react'
import Feature1 from '../../../public/assests/feature-1.svg'
import Feature2 from '../../../public/assests/feature-2.svg'
import Feature3 from '../../../public/assests/feature-3.svg'
import Check from '../../../public/assests/check.svg'
import Image from 'next/image'
import bluebutton from '../../../public/assests/blue-button.svg'

const Features = () => {
  return (
    <div className="flex flex-col gap-y-[56px] py-[56px]">
        <div className="flex flex-col">
            <div>
                <h3 className="font-medium text-[#3e32e6]">Sales Monitoring</h3>
                <h1 className="pt-[12px] text-2xl font-medium text-[#36485C] ">Simplify your sales monitoring</h1>
            <Image src ={Feature1} alt ="" className="pt-[24px]"/>
            <p className="py-[24px] text-[#36485C] lg:text-[18px]">
            Stay on top of things and revamp your work process with our
            game-changing feature. Get a birds eye view with our customizable
            dashboard.
          </p>
          <ul className="flex flex-col gap-y-3">
            <li className="flex items-center gap-x-2 text-[#383037]">
            <span><Image src={Check} alt=""/>
            </span>
            Lorem ipsum dolor sit amet
            </li>
            <li className="flex items-center gap-x-2 text-[#383037]">
            <span><Image src={Check} alt=""/>
            </span>
            Lorem ipsum dolor sit amet
            </li>
            <li className="flex items-center gap-x-2 text-[#383037]">
            <span><Image src={Check} alt=""/>
            </span>
            Lorem ipsum dolor sit amet
            </li>
          </ul>
          <p className="flex items-center gap-x-2 pt-[24px] font-mediu text-[#36485C]">
            Learn more <span><Image src={bluebutton} alt=""  /></span>
            </p>
                
            </div>
        </div>
    </div>
  )
}

export default Features