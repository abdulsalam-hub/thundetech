import React from 'react'

export const SkillBox = ({type,list}) => {
  return (
   <div className="rounded-xl p-6 hover:-translate-y-1 transition-all shadow capitalize shadow-current">
                     <h3 className="text-xl text-gray-300 font-bold mb-4">
                       {type}
                     </h3>
                     <div className="flex flex-wrap gap-2">
                       {list.map((tech, key) => {
                         return (
                           <span
                             key={key}
                             className="bg-blue-500/12 text-blue-400 py-1 px-3 rounded-full text-[14px] hover:text-blue-800 cursor-alias hover:bg-blue-300
                       hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-transform
                       "
                           >
                             {tech}
                           </span>
                         );
                       })}
                     </div>
                   </div>
  )
}
