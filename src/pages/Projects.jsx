import { Link } from "react-router-dom";

import { CTA } from "../components";
import { projects } from "../constants";
import { arrow } from "../assets/icons";
import { pp } from "../constants"

const Projects = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        My{" "}
        <span className='blue-gradient_text drop-shadow font-semibold'>
          Publications, Patents and Projects
        </span>
      </h1>

      <p className='text-slate-500 mt-2 leading-relaxed'>
      I've worked on numerous projects, authored impactful publications, and contributed to innovative patents over the years. These accomplishments hold a special place in my journey. Many of them are accessible for further exploration, so if any project or idea sparks your interest, feel free to dive in, share your thoughts, or collaborate to drive these efforts forward. Your engagement and contributions are deeply appreciated!
      </p>
      <p className="h-full w-full text-center font-bold text-4xl my-20">
        Publications and Patents
      </p>

      <div className='flex flex-wrap my-20 gap-16'>
        {pp.map((pps) => (
          <div className='lg:w-[400px] w-full' key={pps.name}>
            <div className='block-container w-12 h-12'>
              <div className={`btn-back rounded-xl ${pps.theme}`} />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={pps.iconUrl}
                  alt='threads'
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>

            <div className='mt-5 flex flex-col'>
              <h4 className='text-2xl font-poppins font-semibold'>
                {pps.name}
              </h4>
              <p className='mt-2 text-slate-500'>{pps.description}</p>
              <div className='mt-5 flex items-center gap-2 font-poppins'>
               
                
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="w-full text-center font-bold text-4xl my-20">
        Projects
      </p>
      <div className='flex flex-wrap my-20 gap-16'>
        {projects.map((project) => (
          <div className='lg:w-[400px] w-full' key={project.name}>
            <div className='block-container w-12 h-12'>
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={project.iconUrl}
                  alt='threads'
                  className='w-[350px] h-[350px] object-contain'
                />
              </div>
            </div>

            <div className='mt-5 flex flex-col'>
              <h4 className='text-2xl font-poppins font-semibold'>
                {project.name}
              </h4>
              <p className='mt-2 text-slate-500'>{project.description}</p>
              <div className='mt-5 flex items-center gap-2 font-poppins'>
                <Link
                  to={project.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='font-semibold text-blue-600'
                >
                  Live Link
                </Link>
                <img
                  src={arrow}
                  alt='arrow'
                  className='w-4 h-4 object-contain'
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className='border-slate-200' />

      <CTA />
    </section>
  );
};

export default Projects;
