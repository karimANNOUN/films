import React, { useEffect } from 'react'
import PageNotFound from '../assets/PageNotFound.jpg';
import { Link } from 'react-router-dom';
import { Button } from '../components';


export const Pagenotfound = () => {

useEffect(()=>{
  document.title=`pagenotfound/cinemate`
  // hadi ndirou baha title ta page ti3na
})


  return (
    <main>
      <section className='flex flex-col  justify-center px-2'>
        <div className='flex flex-col  items-center my-4'>
        <p className={ 'my-6 text-2xl text-gray-700 font-bold dark:text-white'}> 404 ,oops! </p>
         
         <div className='max-w-lg'>
         <img className='rounded' src={PageNotFound} alt=' 404 !! NotFound'/>
         </div>

        </div>

        <div className='flex justify-center my-4 '>
         <Link to="/">
         <Button>Back to Cinemate</Button>
         
         </Link>
        </div>
      </section>
    </main>
  )
}
