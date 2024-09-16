import React from 'react'
import Lang from '../utils/LanguageConstants'

const GptSearchBar = () => {
  return (
    <div className='pt-[20%] flex justify-center'>
      <form className='m-4 w-1/2 bg-black grid grid-cols-12'>
    <input type="text"
     className='p-4 m-4 col-span-9'
      placeholder={Lang.hindi.GptPlaceHolder} />
    <button className='col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg'> Search</button>
      </form>
    </div>
  )
}

export default GptSearchBar;
