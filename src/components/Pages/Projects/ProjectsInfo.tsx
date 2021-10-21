import React from 'react';

interface ProjectsInfoProps {
  projectsInfo: any[];
}

function ProjectsInfo({ projectsInfo }: ProjectsInfoProps) {
  return (
    <article className='page-container'>
      {projectsInfo.map((item) => {
        return (
          <div key={item.title}>
            <p>
              <a className='project-link' href={item.url}>
                {item.title}
              </a>{' '}
              - {item.description}
            </p>
          </div>
        );
      })}
    </article>
  );
}

export default ProjectsInfo;
