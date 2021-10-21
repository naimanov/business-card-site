import React from 'react';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import AboutMeInfo from './AboutMeInfo';

function AboutMe() {
  const personInfo = useTypedSelector(
    (state) => state.personReducer.person_info
  );

  return <AboutMeInfo personInfo={personInfo} />;
}

export default AboutMe;
