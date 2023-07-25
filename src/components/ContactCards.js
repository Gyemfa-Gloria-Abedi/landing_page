import React from 'react'
import { BsFillTelephoneFill } from 'react-icons/bs'

const ContactCards = ({ title, details, icon }) => {
  return (
    <div className="flex gap-[0.5rem shadow-lg py-[16px]  w-[25rem] mb-[50px] rounded-lg">
      <div className="rounded-[50%]  ">
        <BsFillTelephoneFill className=" w-[21px] h-[21px] p-[21px]  " />
      </div>
      <div>
        <p className="font-semi-bold text-xl mt-[20px]">{title}</p>
        <p>{details}</p>
      </div>
    </div>
  )
}

export default ContactCards
