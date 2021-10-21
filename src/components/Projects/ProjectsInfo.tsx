import React from 'react';

interface ProjectsInfoProps {
  projectsInfo: any[];
}

function ProjectsInfo({ projectsInfo }: ProjectsInfoProps) {
  console.log(projectsInfo);
  return (
    <div className='page-container'>
      {projectsInfo.map((item) => {
        return (
          <div>
            <p>
              <a className='project-link' href={item.url}>
                {item.title}
              </a>{' '}
              - {item.description}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default ProjectsInfo;
