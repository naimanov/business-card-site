import React from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import AboutMeInfo from '../components/AboutMe/AboutMeInfo';

function AboutMe() {
  const personInfo = useTypedSelector(
    (state) => state.productsReducer.person_info
  );

  return (
    <div className='page-container'>
      <AboutMeInfo personInfo={personInfo} />
    </div>
  );
}

export default AboutMe;
