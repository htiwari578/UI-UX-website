import React from 'react'
import BlurArrow from '../../../public/assests/blue-button.svg'
import Image from 'next/image'
import Gradient from '../../../public/assests/Gradient.svg'
import HeroImage from '../../../public/assests/Image.svg'

const Hero = () => {
  return (
    <div className="pt-4">
        <div className="px-[20px]">
            <h1 className="text-center text-[32px] leading-[40px] font-medium text-[#36485C]">Start your monitoring your website like a pro.</h1>
            <p className="text-center pt-6 text-[#36485C]">
                 Get a birds eye view with our customizable dashboard. Stay on top of
                things! Revamp your work process with our game-changing feature. Boost
                productivity and efficiency!
            </p>
            <div className="flex w-full pt-8">
                <button className=" bg-[#4328EB] py-4 px-8 w-1/2 text-white rounded-[4px]">Try for free</button>
                <button className="w-1/2 text-[#4328EB] 
                flex items-center justify-center gap-x-2">View Pricing <span><Image src={BlurArrow} alt="view more"/></span></button>
               
            </div>
        </div>

        <div className="relative flex h-full w-full justify-center">
            <Image src={Gradient} alt="gradient" className="min-h-[500px] w-full object-cover" />
            <div className="absolute bottom-5 w-full flex-col items-center">
                <Image src={HeroImage} alt ="" />

            </div>

        </div>
    </div>
  )
}

export default Hero