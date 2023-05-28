import React, { useEffect, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import Logo from "../assets/logo.webp"


export const Header = () => {
  const ActiveClass="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500";
  const InactiveClass="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
  const navigate = useNavigate();


  const handelSubmit=(event)=>{
     event.preventDefault()
     const queryTerm = event.target.search.value;
     event.target.reset();
   return navigate(`/search/?q=${queryTerm}`);
 }
  const [hidden,setHidden] = useState(true);
 const [darkMode,setDarkMode]=useState( JSON.parse(localStorage.getItem("darkMode")) || false);
 useEffect(()=>{
  localStorage.setItem("darkMode",JSON.stringify(darkMode))

  if (darkMode) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }

 },[darkMode])

  return (
    <header>
      
<nav className='bg-white border-b-2 border-gray-200 dark:bg-gray-900'>
  <div className=" flex flex-wrap items-center justify-between mx-auto p-4">
  
   <Link to="/" className="flex items-center">
      <img src={Logo} className="h-8 mr-3  rounded-full" alt="Cinemate Logo" />
      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Cinemate</span>
  </Link>
   

  <div id='mobile-nav' className="flex md:order-2">
  <button onClick={()=>setDarkMode(!darkMode)} aria-label="Toggle dark mode" data-testid="dark-theme-toggle" type="button" className="rounded-lg p-2.5 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700">
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 20 20" aria-label="Currently light mode" className="h-5 w-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>
      </button>

    <button onClick={()=>setHidden(!hidden)} type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1" >
      <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
      <span className="sr-only">Search</span>
    </button>
    <div className="relative hidden md:block">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <svg className="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
        <span className="sr-only">Search icon</span>
      </div>
      <form onSubmit={handelSubmit}>
      <input type="text" id="search-navbar" name="search" className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." autoComplete='off'/>
      </form>
      
    </div>
    <button onClick={()=>setHidden(!hidden)} data-collapse-toggle="navbar-search" type="button" className="inline-flex items-center mr-8 p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
      <span className="sr-only">Open menu</span>
      <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
    </button>
  </div>
    <div className={`items-center justify-between ${hidden ? "hidden" :""} w-full md:flex md:w-auto md:order-1`} id="navbar-search">
      <div className="relative mt-3 md:hidden">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg className="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
        </div>

       <form onSubmit={handelSubmit}>
       <input type="text" id="search-navbar" name="search"  className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." autoComplete='off'/>
       </form>

      </div>
      <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <NavLink to="/" className={({isActive})=> isActive ? ActiveClass :InactiveClass} aria-current="page" >Home</NavLink >
        </li>
        <li>
          <NavLink to="/movies/popular" className={({isActive})=> isActive ? ActiveClass :InactiveClass}>popular</NavLink >
        </li>
        <li>
          <NavLink  to="/movies/top" className={({isActive})=> isActive ? ActiveClass :InactiveClass}>Top Rated</NavLink>
        </li>
        <li>
          <NavLink  to="/movies/upcoming" className={({isActive})=> isActive ? ActiveClass :InactiveClass}>Upcoming</NavLink >
        </li>
      </ul>
    </div>
  </div>
</nav>

    </header>
  )
}
