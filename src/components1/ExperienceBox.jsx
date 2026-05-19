import React from 'react'

const ExperienceBox = () => {
  return (
    <div className="my-3 text-gray-500 ">
      <div className="flex justify-between items-center">
        <strong>intern front-end developer</strong>
        <i>lagos</i>
      </div>
      <div className="flex justify-between items-center my-2">
        <span>swift.org</span> <span>11-2025-02-2026</span>
      </div>
      <div className="py-3 w-full  ">
        <ul className="list-disc capitalize marker:bg-blue-400 marker:text-blue-500 list-inside ">
          <li>built reusable ui component with react and tailwindcss.</li>
          <li>integrated rest api for real time content</li>
          <li>reduced page load through performance optimization.</li>
        </ul>
      </div>
    </div>
  );
}

export default ExperienceBox