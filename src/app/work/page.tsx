import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  githubLink: string;
  liveLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageUrl, technologies, githubLink, liveLink }) => {
 return (
    <div className="my-10" style={{ opacity: 1, transform: 'none' }}>
      {/* <div className="w-auto bg-dark px-5 py-3 font-light">
        <h1 className="text-2xl font-semibold">{title}</h1>
        <div className="grid gap-4 grid-cols-4">
          <p className="mt-8 mb-5 col-span-4 lg:col-span-3">{description}</p>
          <div className="hidden lg:block h-full">
            {imageUrl && <img src={imageUrl} alt={title} />}
          </div>
        </div>
        <p>
          <span className="font-bold text-highlight">Technologies Used:</span> {technologies}
        </p>
        <div className="flex mt-5 justify-end">
          <ProjectLink githubLink={githubLink} liveLink={liveLink} />
        </div>
      </div> */}
    </div>
  );
};

interface ProjectLinkProps {
  githubLink: string;
  liveLink: string;
}

const ProjectLink: React.FC<ProjectLinkProps> = ({ githubLink, liveLink }) => { return (
    <>
      {/* {githubLink && (
        <a className="mr-3" href={githubLink}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 hover:text-highlight" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
          </svg>
        </a>
      )}
      {liveLink && (
        <a className="mr-3" href={liveLink}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 hover:text-highlight" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      )} */}
    </>
  );
};

const WorkPage = () => {
  return (
    <div className="flex">
      {/* <div className="mt-20 text-info mx-10">
        <h1 className="text-4xl font-bold">Projects</h1>

       
        <ProjectCard
          title=""
          description=""
          imageUrl="https://drive.google.com/uc?id=1-KRcGs8A8dVTAprVQLgb-fQmKP0zF3aw"
          technologies="Python 3, Flask, HTML, CSS, Javascript, Bootstrap 4"
          githubLink=""
          liveLink=""
        />
      </div> */}
    </div>
  );
};

export default WorkPage;
