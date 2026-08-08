import React from 'react'
import {projects} from "./Data";
import { useState } from "react";
const ProjectBox=() =>
{
  
    const [show,setShow]=useState(null)
    function handleShow(id)
    {
 setShow(id)
  }
  return (
    <>
          {
              projects.map((project,id) =>
              {
             return (
               <div
                 key={id}
                 className="p-6 rounded-xl border-2 border-white/10 hover:-translate-y-1 hover:border-blue-500/30 transition-all hover:shadow-[0_2px_8px_rgba(59,130,246,0.5)]"
               >
                 <h3 className="text-xl font-bold mb-2 uppercase text-white">
                   {project.title}
                 </h3>
                 <div className="w-full transition-opacity transform-content duration-300 ease">
                   {show === id && (
                     <>
                       <div className="py-2 capitalize first-letter:capitalize">
                         <h2 className="font-bold">issue:</h2>
                         <span>{project.problem}.</span>
                       </div>
                       <div className="first-letter:capitalize ">
                         <h2 className=" font-bold capitalize">solution:</h2>
                         <span>{project.solution}.</span>
                       </div>
                       <div className="py-2 first-letter:capitalize">
                         <h2 className="font-bold">impact:</h2>
                         <span>{project.impact}.</span>
                       </div>
                     </>
                   )}

                   {show !== id && (
                     <button
                       onClick={() => handleShow(id)}
                       type="button"
                       className="rounded-xl p-1  hover:bg-blue-400  cursor-pointer text-blue-600 font-medium  w-15 capitalize transition-colors "
                     >
                       more
                     </button>
                   )}
                 </div>

                 {/* <p className="text-gray-300 mb-4">
                   Beautiful innovative project ideas that caught attentions
                   with designs scaling skills.
                 </p> */}
                 <div className="w-full flex gap-x-2 flex-wrap gap-y-2 h-fit max-h-auto  mt-3 items-center transition duration-500 ease-in-out">
                   {project.tech.map((tech) => {
                     return (
                       <span
                         key={tech}
                         className="bg-blue-500/12 text-blue-400 py-1 px-3 rounded-full text-sm hover:bg-blue-300
                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.5)] transition-transform hover:text-blue-900 cursor-default
                    "
                       >
                         {tech}
                       </span>
                     );
                   })}
                 </div>
                 <div className="flex justify-between items-center  mt-8 px-2">
                   <a
                     target="_self"
                     href={project.live}
                     className="text-blue-800 border rounded px-2 py-1.5 hover:text-gray-500  transition-colors"
                   >
                     live demo↗
                   </a>
                   <a
                     target="_blank"
                     href={project.github}
                     className="text-blue-800 border rounded px-2 py-1.5 hover:text-gray-500  transition-colors"
                   >
                     github page↗
                   </a>
                 </div>
               </div>
             );
         })     
      }
    </>
  );
}

export default ProjectBox