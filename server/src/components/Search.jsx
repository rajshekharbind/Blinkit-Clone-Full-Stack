import React, { useState ,useEffect } from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { TypeAnimation } from 'react-type-animation';
import {Link, useLocation, useNavigate } from 'react-router-dom';
import { FaArrowCircleLeft } from "react-icons/fa";
import useMobile from '../hooks/useMobile';



function Search() {
    const navigate = useNavigate()
    const location = useLocation();
    const [isSearchPage,setIsSearchPage] = useState(false);
    const [isMobile] = useMobile();

    useEffect(()=>{
        const isSearch = location.pathname === "/search"
        setIsSearchPage(isSearch)
    },[location])


    const redirectToSearchPage = ()=>{
        navigate("/search")
    }

   

  return (
<div  className='w-full  min-w-[300px] lg:min-w-[420px] h-11 lg:h-12 rounded-lg border  overflow-hidden flex items-center text-neutral-500 bg-slate-50 group focus-within:border-primary-200'>
        {/* <button  className='flex justify-center items-center h-full p-3 group-focus-within:text-primary-200'>
        <IoSearchOutline size={25} />
        </button> */}
        
        {
           ( isMobile && isSearchPage) ? (
            <Link to={"/"} className='flex justify-center group items-center h-full p-2  group-focus-within:text-yelow'>
            <FaArrowCircleLeft size={22}/>
            </Link>
           ): (
            <button  className='flex justify-center items-center h-full p-3 group-focus-within:text-primary-200  border-yellow-500'>
            <IoSearchOutline size={25} />
            </button> 
           )
        }



        
        
       <div>
        {
            !isSearchPage?(
                <div onClick={redirectToSearchPage} className='w-full h-full flex items-center'>
     <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Search "milk"',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Search "bread"',
        1000,
        'Search "sugar"',
        1000,
        'Search "panner"',
        1000,
        'Search "biscuite"',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Search "egg"',
        1000,
        'Search "tea"',
        1000,
        'Search "chocklate"',
        1000
      ]}
      wrapper="span"
      speed={50}
    //   style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />
   </div>

         ):(
            <div className='w-full'>
                <input
                            type='text'
                            placeholder='Search for atta dal and more.'
                            autoFocus
                           // defaultValue={searchText}
                            className='bg-transparent w-full h-full outline-none'
                           // onChange={handleOnChange}
                        />
            </div>
         )
        }
       </div>
  
   
</div>
  )
}

export default Search
