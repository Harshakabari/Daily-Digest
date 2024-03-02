import React from 'react';
import "./Spinner.css"


 const Spinner = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-[100px] space-y-2">
    <div className='progress'></div>
    <p className="text-bgDark text-lg font-semibold">Loading....</p>
  </div>
        
  )
}
export default Spinner