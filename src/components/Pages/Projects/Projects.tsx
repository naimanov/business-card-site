import React from 'react';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import ProjectsInfo from './ProjectsInfo';

function Projects() {
  const projectsInfo = useTypedSelector(
    (state) => state.personReducer.person_projects
  );

  return <ProjectsInfo projectsInfo={projectsInfo} />;
}

export default Projects;
