import {useState} from "react";
import ProjectBox from "../../components1/ProjectBox";
import {Revalscroll} from "../RevalScroll";

export const Project=() =>
{
      const [curOpen,setCurOpen]=useState(null)
  return (
    <>
      <section
        title="project page"
        id="project"
        className="min-h-screen flex items-center justify-center py-20"
      >
        <Revalscroll>
          <div className="max-w-5xl mx-auto px-4">
            <h2
              title="devoloper first project"
              className="text-3xl font-bold mb-8 bg-linear-to-r from-blue-700 to-gray-300 bg-clip-text text-transparent text-center"
            >
              Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <ProjectBox  curOpen={curOpen} setCurOpen={setCurOpen}/>
              
             
            </div>
          </div>
        </Revalscroll>
      </section>
    </>
  );
};

