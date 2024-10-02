// import openai from "../utils/openai"
import React, { useRef } from 'react'
import Lang from "../utils/LanguageConstants"
import { useSelector } from 'react-redux';
// import { API_OPTIONS } from "../utils/constansts";
// import { addGptMoviesResult } from "../utils/gptSclice";





const GptSearchBar = () => {
  const langkey = useSelector((store)=>store.config.lang) 
  const searchText = useRef(null);
  // const dispatch = useDispatch();

  // const fetchMovieTMDB = async(movie)=>{
  //   const data = await fetch(
  //     "https://api"+movie+"jkasndjas",API_OPTIONS
  //   )
  //   const json = await data.json();
  //   return json.Results;
  // }

  const HandalGptSearchClick = async () => {
    console.log(searchText.current.value);


    //  const Gpt_Query = "Act as a movies Recomandation System give me some movies name for the Query :"+searchText.current.value +". only the names of 5 movis comma separeted like the example result given ahed example result :Gadar,Sholey,Don,GOlmal,Koi mil Gaya";
    // const gptResults = await openai.chat.completions.create({
    //   messages: [{ role: 'user', content: Gpt_Query }],
    //   model: 'gpt-3.5-turbo',
    // });
    // console.log(gptResults.choices?.[0]?.message?.content.split(","));
    // const GptMovies = gptResults.choices?.[0]?.message?.content.split(",");

   
    // const MovieDataarray = GptMovies.map((movie)=>fetchMovieTMDB(movie));

    // const results = await Promise.all(MovieDataarray);

    // dispatch(addGptMoviesResult({moviename:GptMovies,movieResults : addGptMoviesResult}))
  };

  
  
  return (
    <div className='pt-[10%] flex justify-center '>
      <form className='m-4 w-1/2 bg-zinc-900 bg-opacity-80 grid grid-cols-12 rounded-lg' onSubmit={(e)=>e.preventDefault()}>
    <input ref={searchText} type="text"
     className='p-4 m-4 col-span-9 rounded-lg'
     placeholder={Lang[langkey].GptPlaceHolder} />
      <button className='col-span-3 m-4 py-2 px-2 bg-red-700 text-white rounded-lg'
      onClick={HandalGptSearchClick}>{Lang[langkey].search}</button>
      </form>
    </div>
  )
}

export default GptSearchBar;
