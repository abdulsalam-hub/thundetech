import {Revalscroll} from "../RevalScroll";
import Work from "/src/assets/work.jpeg";
import Edu from "/src/assets/edu.png";
import {advanced, basicLists,frontLists} from "../../components1/Data";
import { SkillBox } from "../../components1/SkillBox";
import Education from "../../components1/Education";
import ExperienceBox from "../../components1/ExperienceBox";
export const About = () => {
  
  return (
    <>
      <section
        title="About page"
        id="about"
        className="min-h-screen w-full  py-20 md:mt-15 mt-5"
      >
        <Revalscroll>
          <div className="max-w-7xl mx-auto w-full  px-4">
            <h2 className="text-3xl font-bold mb-8 bg-linear-to-r from-blue-700 to-gray-300 bg-clip-text text-transparent text-center">
              About Me
            </h2>
            <div className="glassphormism  rounded-xl p-4 border-white/9 border hover:translate-y-2 transition-all hover:shadow-[1px_3px_12px_rgba(0,0,255,0.2)]">
              <p
                title="about developer"
                className="text-gray-400 text-center text-lg py-6"
              >
                A passionate developer with expertise in building scalable web
                applications and creating innovative solutions.
              </p>
              <h2
                title="developer skill points"
                className="text-center text-lg bg-gray-800 my-7 py-1 rounded font-bold hover:text-blue-300 transition-all text-shad"
              >
                SKILLS
              </h2>
              <div
                title="developer skills"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4 mt-2"
              >
                <SkillBox type="basic levels" list={basicLists} />

                <SkillBox type="design levels" list={frontLists} />
                <SkillBox type="advance level" list={advanced} />
              </div>
              <div className="w-full mt-4">
                <div className="p-4 w-full rounded-xl border-white/10 border my-8 hover:-translate-y-1 transition-all hover:shadow-[0_2px_8px_rgba(255,255,246,0.2)]">
                  <h3
                    title="developer educational background"
                    className="text-xl  uppercase text-blue-300 font-bold mb-4"
                  >
                    <img
                      src={Edu}
                      alt="education image"
                      loading="auto"
                      className="w-9 h-9 rounded-full bg-blue-500 shadow-[0_2px_8px_rgba(59,130,246,0.5)] p-1 mb-2 transition-all hover:-translate-y-1 hover:ring"
                    />{" "}
                    education
                  </h3>
                  <div className="grid grid-cols-1 gap-8 p-2 mt-2 w-full">
                    <Education
                      school="udemy alumi"
                      certificate="react & nextjs development certificate"
                      year="2025"
                      work="react,typescript, nextjs dev."
                    />
                    <Education
                      school="Olatech enterprise"
                      certificate="CERTIFICATE in basic Web Development"
                      year="2024"
                      work="software startup, web Development."
                    />
                    <Education
                      school="ICS high school"
                      certificate="WASSCE"
                      year="2025"
                      work="school department."
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              title="experience"
              className="p-4 rounded-xl border-white/10 border hover:-translate-y-1 transition-all hover:shadow-[0_2px_8px_rgba(255,255,246,0.2)] my-4"
            >
              <h3
                title="developer experience"
                className="text-xl text-blue-300 font-bold mb-4 uppercase"
              >
                <img
                  src={Work}
                  alt="working status image"
                  className="w-9 h-9 rounded-[100%]  mb-2  bg-clip-text bg-blue-500 shadow-[0_2px_8px_rgba(59,130,246,0.5)] p-1.5 transition-all hover:-translate-y-1 hover:border"
                />{" "}
                Work experience
              </h3>
              <ExperienceBox />
            </div>
          </div>
        </Revalscroll>
      </section>
    </>
  );
};
