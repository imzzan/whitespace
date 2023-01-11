import React from 'react';
import { NavbarDesctop, NavbarMobile } from '../moluculs';
import { IconDownArrow } from '../../assests';

const Navbar = () => {

  const items = [
    {
      name : 'Products',
      icon : IconDownArrow,
    },
    {
      name : 'Solutions',
      icon : IconDownArrow,
    },
    {
      name : 'Resources',
      icon : IconDownArrow,
    },
    {
      name : 'Pricing',
      icon : IconDownArrow,
    }
  ]

  return (
    <div className='fixed z-50 w-full'>
      <NavbarDesctop items={items}/>
      <NavbarMobile items={items}/>
    </div>
  )
}

export default Navbar