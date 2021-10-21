import React from 'react';

interface SkillsInfoProps {
  personSkills: any[];
}

function SkillsInfo({ personSkills }: SkillsInfoProps) {
  return (
    <div className='page-container'>
      <ul>
        {personSkills.map((item) => {
          return (
            <li className='skill-container'>
              <div className='skill-marker'></div>
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default SkillsInfo;
