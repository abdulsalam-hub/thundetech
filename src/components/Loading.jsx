import {useEffect} from "react";
import {useState} from "react";

export const Loading=({onComplete}) =>
{
    const [text,setText]=useState("")
    const fulltext="<Welcome />";


    useEffect(() =>
    {
        let index=0;
        const interval=setInterval(() =>
        {
          setText(fulltext.substring(0,index));
          index++;
            if (index > fulltext.length) {
                clearInterval(interval)
                setTimeout(() => {
                    onComplete()
                }, 700);
            }
        },200)
        return ()=> clearInterval(interval)
    },[onComplete])
  return (
    <>
      <div className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center">
        <div className="mb-4 text-4xl font-mono font-bold">
          {text} <span className="text-blue-400 animate-blink ml-1">|</span>
              </div>
              <div className="w-[100px] h-px bg-gray-800 rounded relative overflow-hidden">
                  <div className="w-[40%] h-full bg-blue-500 shadow-[0_0_15px_#f3e56d] text-center text-white animate-loading-bar">thundetech</div>
              </div>
      </div> 
    </>
  );
};
