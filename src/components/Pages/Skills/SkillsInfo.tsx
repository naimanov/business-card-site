import React from 'react';

interface SkillsInfoProps {
  personSkills: any[];
}

function SkillsInfo({ personSkills }: SkillsInfoProps) {
  return (
    <article className='page-container'>
      <ul>
        {personSkills.map((item) => {
          return (
            <li className='skill-container' key={item}>
              <div className='skill-marker'></div>
              {item}
            </li>
          );
        })}
      </ul>
    </article>
  );
}

export default SkillsInfo;
