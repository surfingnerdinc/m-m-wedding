import React from 'react'

const GreenButton = ({content, onClick}) => {
  return (
  //  <button className="bg-[#00df9a] hover:bg-[#00c488] text-white font-semibold py-2 px-4 rounded mt-4 shadow-md transition duration-300">{content}</button>
   <button onClick={onClick} className="bg-[#d8d1ba] hover:bg-[#bbaf87] text-white font-semibold py-2 px-4 rounded mt-4 shadow-md transition duration-300">{content}</button>
  )
}

export default GreenButton