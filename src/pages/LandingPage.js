import React from 'react'
import Navbar from '../components/Navbar'
import bgImg from '../assets/priscilla-du-preez-XkKCui44iM0-unsplash.jpg'
import { LiaShareAltSolid } from 'react-icons/lia'
import telescope from '../assets/telescope.png'
import { useNavigate } from 'react-router-dom'
import { BsCloudDownloadFill } from 'react-icons/bs'
import ContactCards from '../components/ContactCards'

const LandingPage = () => {
  return (
    <div>
      <Navbar />

      {/* page description */}
      <div>
        <div className="relative">
          <div className="bg-gray-800/70">
            <img src={bgImg} className="w-full object-cover opacity-20" />
          </div>
          <div className="absolute top-40 flex flex-col ">
            <p className="text-5xl font-extrabold text-white w-[80%] text-center m-auto leading-[80px]">
              We offer the best place to store any form of your file. And the
              opportunity to share your files with others with just a click
            </p>
            <button className="p-[1.5rem] w-fit self-center m-auto mt-[20px]">
              Get Started
            </button>
          </div>
        </div>
      </div>
      <div className="p-8 mt-[50px]">
        <div className="font-extrabold text-5xl text-center mb-[20px]">
          How to enjoy our services
        </div>

        <div className="cards flex justify-between ">
          <div className="view justify-center shadow-lg w-[30%] rounded-lg align-center">
            <img src={telescope} className="w-[120px] h-[120px] m-auto" />
            <h1 className="font-semibold text-3xl text-center mb-[10px] ">
              View
            </h1>
            <p className="text-center w-[60%] m-auto mb-[20px]">
              You can view files on the page. Viewed files can be in text, pdf,
              audio, video and/or images format
            </p>
            <button className="ml-[5rem] xl:ml-[7.8rem] px-[1.5rem] py-2 mb-[20px]">
              Learn More
            </button>
          </div>

          <div className="share justify-center shadow-lg w-[30%] rounded-lg ">
            <LiaShareAltSolid className="w-[120px] h-[120px] m-auto" />
            <h1 className="font-semibold text-3xl text-center mb-[10px]">
              Share
            </h1>
            <p className="text-center w-[60%] m-auto mb-[20px]">
              Share files for others on the platform to access. Shared files can
              be in text, pdf, audio, video and/or images format
            </p>
            <button className="ml-[5rem] xl:ml-[7.8rem]  px-[1.5rem] py-2 mb-[20px]">
              Learn More
            </button>
          </div>

          <div className="download justify-center shadow-lg w-[30%] rounded-lg ">
            <BsCloudDownloadFill className="w-[120px] h-[120px] m-auto mb-[15px]" />
            <p className="font-semibold text-3xl text-center mb-[10px]">
              Download
            </p>
            <p className="text-center w-[60%] m-auto mb-[20px]">
              Download your shared and other shared files on this platform.
            </p>
            <button className="ml-[5 xl:ml-[7.8rem] px-[1.5rem] py-2 mb-[10px]">
              Learn More
            </button>
          </div>
        </div>

        {/* contact us */}
        <div className="font-extrabold text-5xl text-center mt-[120px] ">
          Contact Us
        </div>
        <div className=" flex justify-center align-center ">
          <div className="mr-[8rem] mt-[54px]">
            {/* phone */}
            <ContactCards title="Phone Number" details="(233) 242913171" />
            <ContactCards title="Email" details="manteyabedi@gmail.com" />
            <ContactCards title="Location" details="Northern Region" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
