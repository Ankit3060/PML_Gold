import React from 'react';
import FooterLogo from '/LoginLeftIcon.svg';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { LuCopyright } from "react-icons/lu";
import { Link,NavLink } from 'react-router-dom';

function Footer() {
    const link_1 = ({ isActive }) =>
  `block p-1 transition-all duration-300 transform 
   hover:scale-105 hover:text-[#D4AF37]
   ${isActive ? "text-[#D4AF37] underline underline-offset-4 decoration-[#D4AF37]" : "text-[#ffffff]"}`;
    return (
        <div className='bg-[#456682]'>
            <div className='flex p-6 gap-8'>
                <div className='hidden md:block lg:block w-[150px]'>
                    <img src={FooterLogo} alt='Digi Gold' />
                </div>
                <div className='flex justify-between flex-wrap gap-8'>
                    <div className='flex-1 min-w-[200px]'>
                        <h2 className='text-[#D4AF37] font-semibold text-xl pb-4'>Paul Gold - A product of Paul Merchants Limited</h2>
                        <p className='text-[#ffffff]'>SCO 829-830, PML House, Sector 22A, Chandigarh,
                            India - 160022</p>
                        {/* <hr style={{
                            border: '1px solid var(--gold-color)',
                            margin: '10px 0'
                        }} /> */}
                         <NavLink to="/contact-us" className={link_1}>Contact Us</NavLink>
      <NavLink to="/about-us" className={link_1}>About Us</NavLink>
      <NavLink to="/privacy-policy" className={link_1}>Privacy Policy</NavLink>
      <NavLink to="/terms-and-conditions" className={link_1}>Terms & Conditions</NavLink>
                    </div>
                    <div className='flex-1 min-w-[200px]'>
                        <h2 className='text-[#D4AF37] text-xl pb-4'>Email</h2>
                        <a href="mailto:care@auxivault.com"><p className='text-[#ffffff] pb-2'>care@auxivault.com</p></a>
                        <a href="mailto:info@auxivault.com"><p className='text-[#ffffff]'>info@auxivault.com</p></a>
                        <h3 className='text-[#D4AF37] pt-4 pb-1'>For Corporate sales related queries</h3>
                        <a href="mailto:corporate.sales@auxivault.com"><p className='text-[#ffffff]'>corporate.sales@auxivault.com</p></a>

                    </div>
                    <div className='flex-1 min-w-[200px]'>
                        <h2 className='text-[#D4AF37] text-xl pb-4'>Toll Free</h2>
                        <p className='text-[#ffffff] pb-2'>1800-313-2928XX</p>
                        <p className='text-[#ffffff] pb-2'>(9AM-8PM IST, Mon-Sat)</p>
                        <p className='text-[#ffffff]'>Accessible from Indian (+91) numbers only</p>
                    </div>
                    <div className='flex-1 min-w-[200px]'>
                        <h2 className='text-[#D4AF37] text-xl pb-4'>Follow Us</h2>
                        <div className='flex items-center gap-4 text-white'>
                            <a href='#' className='bg-[#D4AF37] rounded-full p-2'><FaFacebookF /></a>
                            <a href='#' className='bg-[#D4AF37] rounded-full p-2'><FaInstagram /></a>
                            <a href='#' className='bg-[#D4AF37] rounded-full p-2'><FaLinkedinIn /></a>
                            <a href='#' className='bg-[#D4AF37] rounded-full p-2'><BsTwitterX /></a>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex items-center gap-2 justify-center py-6 border-t-[2px] border-[#D4AF37]'>
                <LuCopyright color='#D4AF37' />
                <h2 className='text-[#D4AF37]'>Paul Gold - PML 2025, All Rights Reserved</h2>
            </div>
        </div>
    )
}

export default Footer;