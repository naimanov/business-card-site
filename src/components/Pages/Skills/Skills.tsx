import React from 'react';
import SkillsInfo from './SkillsInfo';
import { useTypedSelector } from '../../../hooks/useTypedSelector';

function Skills() {
  const personSkills = useTypedSelector(
    (state) => state.personReducer.person_skills
  );

  return <SkillsInfo personSkills={personSkills} />;
}

export default Skills;
