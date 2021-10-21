import React from 'react';

interface AboutMeInfoProps {
  personInfo: any[];
}

function AboutMeInfo({ personInfo }: AboutMeInfoProps) {
  return (
    <div>
      {personInfo.map((item) => {
        return <p key={item}>{item}</p>;
      })}
    </div>
  );
}

export default AboutMeInfo;
