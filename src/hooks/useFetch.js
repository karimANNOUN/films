import { useState ,useEffect} from 'react'

export const useFetch = ({apiPath},queryTerm="") => {
    const [data,setData]=useState([]);

    const url= `https://api.themoviedb.org/3/${apiPath}?api_key=3204316f961d21c241ac01af0ce3a321&query=${queryTerm}`;
   
    useEffect(()=>{
      async function fetchMovies (){
        const response =await fetch(url);
        const Json = await response.json();
        setData(Json.results) 
      }
      fetchMovies()
    
      
    },[url])

  return {data}
}
