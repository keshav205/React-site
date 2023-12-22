import React, { useEffect, useState } from 'react';
import AnimatedLettersFast from '../AnimatedLettersFast/AnimatedLettersFast';
import './about.scss';

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate-fast');
  const nameArray = [...'01. ABOUT US'];

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-fast-hover');
    }, 4000);
  });
  return (
    <div className='about' id='about'>
      <div className='about__left'>
        <span className='sectiontag'>&lt;section&gt;</span>
        <h1 className='about__headingPrimary'>
          <AnimatedLettersFast letterClass={letterClass} strArray={nameArray} idx={15} />
        </h1>
        <div className='about__description'>
          Hello! We are
          {' '}
          <span className='about__link'>ENACTUS&nbsp;MSI</span>
          {' '}
          Since 2019, a student-led group empowers communities through entrepreneurship. Guided by experts, leaders execute projects for positive business-driven impact
          {/* <br />
          <br /> */}
          {/* {' '}
          Well-organised person, problem solver, focused student at
          {' '}
          <a href='https://vit.edu.in/' target='_blank' rel='noreferrer' className='intro__link'>VIT-MUMBAI</a>
          {' '}
          with high attention to detail. Fan of Gaming esports, outdoor activities, TV series and Japanese anime.
          <br />
          <br />
          Here are the few technologies that I&apos;have been working recently:
          {' '}
          <br /> */}
          {/* <ul className='about__skillsList'>
            <li className='about__skillsItems'>Javascript(ES6+)</li>
            <li className='about__skillsItems'>Python</li>
            <li className='about__skillsItems'>Scss / Sass</li>
            <li className='about__skillsItems'>Nodejs</li>
            <li className='about__skillsItems'>Expressjs</li>
            <li className='about__skillsItems'>React.js & Redux</li>
            <li className='about__skillsItems'>MongoDB</li>
            <li className='about__skillsItems'>Next.js</li>
            <li className='about__skillsItems'>Angular</li>
            <li className='about__skillsItems'>SQL</li>
            <li className='about__skillsItems'>DSA</li>
            <li className='about__skillsItems'>AngularJs</li>
          </ul> */}
        </div>
        <span className='sectiontag'>&lt;/section&gt;</span>
      </div>
      <div className='about__right'>
        <div className='stage-cube-cont'>
          <div className='cubespinner'>
            <div className='face1'>
              <svg className='about__icon'>
                <use href='icons/symbol-defs.svg#icon-pythonhttps://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg' />
              </svg>
            </div>
            <div className='face2'>
              <svg className='about__icon'>
                <use href='https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg' />
              </svg>
            </div>
            <div className='face3'>
              <svg className='about__icon'>
                <use href='https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg' />
              </svg>
            </div>
            <div className='face4'>
              <svg className='about__icon'>
                <use href='https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg' />
              </svg>
            </div>
            <div className='face5'>
              <svg className='about__icon'>
                <use href='https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg' />
              </svg>
            </div>
            <div className='face6'>
              <svg className='about__icon'>
                <use href='https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg' />
              </svg>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
