import React from 'react'
import Lang from "../utils/LanguageConstants"
import { useSelector } from 'react-redux';


const GptSearchBar = () => {
  const langkey = useSelector((store)=>store.config.lang) 

  return (
    <div className='pt-[20%] flex justify-center'>
      <form className='m-4 w-1/2 bg-black grid grid-cols-12'>
    <input type="text"
     className='p-4 m-4 col-span-9'
      placeholder={Lang[langkey].GptPlaceHolder} />
    <button className='col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg'>{Lang[langkey].search}</button>
      </form>
    </div>
  )
}

export default GptSearchBar;
