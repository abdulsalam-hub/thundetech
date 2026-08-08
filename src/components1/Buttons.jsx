import React from 'react'

const Buttons = ({link,title ,textColor,bgColor,name}) => {
  return (
    
      <button>
        <a
                  href={link}
                  title={title}
                  className={`bg-blue-800 rounded  px-6 ${textColor} py-3 font-bold ${bgColor} font-[consolas,arial] transition-all duration-300 
                     hover:translate-x-0.5 border border-blue-400 hover:shadow-[2px_2px_8px_rgba(0,0,255,0.3)]  hover:text-blue-700 hover:${bgColor}
                      `}
        >
         {name}
        </a>
      </button>
    
  );
}

export default Buttons