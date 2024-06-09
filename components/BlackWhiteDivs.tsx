import React from "react";

const BlackWhiteDiv = () => {
  return (
    <div className='flex justify-between'>
      <div className='w-1/5 h-64 bg-black'></div>
      <div className='w-1/2 h-64 bg-white'></div>
      <div className='w-1/2 h-64 bg-black'></div>
      <div className='w-1/5 h-64 bg-white'></div>
    </div>
  );
};

export default BlackWhiteDiv;
