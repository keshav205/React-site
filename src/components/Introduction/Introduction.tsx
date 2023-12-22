import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AnimatedLetters from '@components/AnimatedLetters/AnimatedLetters';
import './introduction.scss';

const Introduction = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const nameArray = [...'to,'];
  const jobArray = [...'ENACTUS MSI'];

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);
  });

  return (
    <div className='intro '>
      <div className='intro__left'>
        <span className='sectiontag'>&lt;section&gt;</span>
        <h1 className='intro__headingPrimary'>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i,</span>
          &nbsp;
          <br />
          <span className={`${letterClass} _13`}>Welcome</span>
          {/* <span className={`${letterClass} _14`}> to</span> */}
          &nbsp;
          <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
          <br />
          <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={19} />
          <br />
        </h1>
        <Link to='/contact' className='intro__button'>
          CONTACT US
        </Link>
        <span className='sectiontag'>&lt;/section&gt;</span>
      </div>
      
    </div>
  );
};

export default Introduction;
