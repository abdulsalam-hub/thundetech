import React from 'react'

const Education = ({school,certificate,year,work}) => {
  return (
    <>
      <div>
        {/* rounded-xl p-6 hover:-translate-y-1  transition shadow-[2px_3px_8px_rgba(255,255,255,0.2)] capitalize my-2 md:mx-2 */}
        <div className=" p-4 text-slate-400 w-full my-6 hover:-translate-y-1 shadow shadow-blue-300  hover:border border-blue-300 rounded-xs">
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