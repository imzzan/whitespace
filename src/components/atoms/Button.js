import React from 'react'

const Button = ({name, bgColor}) => {
  return (
    <button className={`py-2 lg:py-4 px-6 lg:px-10 rounded-[8px] text-[16px] lg:text-[18px] leading-[23px] font-[500] ${bgColor}`}>{name}</button>
  )
}

export default Button