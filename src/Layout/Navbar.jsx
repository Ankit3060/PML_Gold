import React,{useContext,useState} from 'react';
import {NavLink} from 'react-router-dom';
import {RxHamburgerMenu} from 'react-icons/rx';
import {IoMdClose} from 'react-icons/io';
import {AuthContext} from '../context/AuthContext';

const item=[
    {title:'Home',path:'/'},
    {
        title:'Partner With Us',path:'/partner-with-us'
    },
    {
        title:'Contact Us',path:'/contact-us'
    },
    {
        title:'Login',path:'/login'
    },
    {
        title:'Signup',path:'/login'
    }
];
export default function Navbar(){
    const{isLogin}=useContext(AuthContext)||{isLogin:false};
    const username='Akanksha';
    const[isClicked,setClicked]=useState(false);
    const toggle=()=>setClicked(s=>!s);
   const link_d = ({ isActive }) =>
  `p-2 rounded text-xl font-semibold text-[#D4AF37] 
   ${isActive ? 'underline underline-offset-4 decoration-[var(--gold-color)]' : ''} 
   hover:scale-105 transition-transform duration-200 hover:bg-[var(--bg-color)]`;

const link_m= ({ isActive }) =>
  `px-2 rounded my-1 whitespace-nowrap block font-semibold text-[#D4AF37] 
   ${isActive ? 'underline underline-offset-4 decoration-[var(--gold-color)]' : ''} 
   hover:scale-105 transition-transform duration-200 hover:bg-[var(--bg-color)]`;
   return(
    <>
    {/*Desktop Navbar */}
    <div className='hidden sm:block'>
        <div className='flex gap-4 items-center '>
            {
                item.filter(i=>i.title!=='Login' && i.title!=='Signup')
                .map(i=>(
                    <NavLink key={i.title} to={i.path} className={link_d}>
                        {i.title}
                        </NavLink>
                ))
            }
             {isLogin ? (
            <div className="flex gap-2 items-center">
              
              <p title={username} className="ml-[-10px]">{username.slice(0, 3)}...</p>
            </div>
          ) : (
            <>
              <NavLink to="/login" className={link_d}>Login</NavLink>
              <NavLink to="/login" className={link_d}>Signup</NavLink>
            </>
          )}

        </div>

    </div>
     <div className="relative block md:hidden">
        <button onClick={toggle}>
          {!isClicked ? <RxHamburgerMenu /> : <IoMdClose />}
        </button>
        <div className={`absolute -right-[35px] top-[50px] w-[200px] overflow-hidden transition-all bg-white duration-300 ${isClicked ? 'h-screen p-4' : 'h-0'}`}>
          {item
            .filter(i => i.title !== 'Login' && i.title !== 'Signup')
            .map(i => (
              <NavLink key={i.title} to={i.path} className={link_m}>
                {i.title}
              </NavLink>
            ))}
          {isLogin ? (
            <div className="flex gap-1 items-center mt-2">
              {/* <UserMenu /> */}
              <p title={username} className="ml-[-15px] text-[12px]">{username}</p>
            </div>
          ) : (
            <>
              <NavLink to="/login" className={link_m}>Login</NavLink>
              <NavLink to="/login" className={link_m}>Signup</NavLink>
            </>
          )}
        </div>
      </div>
    </>
   )

}
