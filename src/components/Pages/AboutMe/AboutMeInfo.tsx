import React from 'react';

interface AboutMeInfoProps {
  personInfo: any[];
}

function AboutMeInfo({ personInfo }: AboutMeInfoProps) {
  return (
    <article className='page-container'>
      {personInfo.map((item) => {
        return <p key={item}>{item}</p>;
      })}
    </article>
  );
}

export default AboutMeInfo;
