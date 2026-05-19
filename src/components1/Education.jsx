import React from 'react'

const Education = ({school,certificate,year,work}) => {
  return (
    <>
      <div>
        <div className=" py-2 px-2 text-gray-500 my-4  shadow shadow-blue-300  hover:border border-blue-300 rounded">
          <div className="flex items-center justify-between  capitalize font-semibold text-slate-400 my-2">
            <strong>{school}</strong> <i>nigeria</i>
          </div>
          <div className="flex py-3 justify-between items-center">
            <span>{certificate}</span> <span>{year}</span>
          </div>
         
         <strong>Relevant Work:</strong> {work}
      
        </div>
      </div>
    </>
  );
}

export default Education