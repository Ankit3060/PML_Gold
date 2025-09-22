import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from './Navbar';
import AdminLogo from '/AdminLogo.svg';
export default function Header(){
    return(
        <header className='flex justify-between items-center px-4 lg:px-8 py-3 bg-[#456682]'>
            <div className='h-13'>
                <Link to="/">
                <img src={AdminLogo} alt='DigiGold' className='h-full w-full object-fill'/>
                </Link>

            </div>
            <Navbar/>

        </header>
    )
}