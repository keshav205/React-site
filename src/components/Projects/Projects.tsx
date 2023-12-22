import React, { useState, useEffect } from 'react';
import './projects.scss';
import LazyLoad from 'react-lazyload';
import AnimatedLettersFast from '@components/AnimatedLettersFast/AnimatedLettersFast';

const Project = () => {
  const [letterClass, setLetterClass] = useState('text-animate-fast');
  const nameArray = [...'02. OUR PROJECTS'];

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-fast-hover');
    }, 4000);
  });
  return (
    <div className='project' id='projects'>
      <span className='sectiontag'>&lt;section&gt;</span>
      <h1 className='about__headingPrimary'>
        <AnimatedLettersFast letterClass={letterClass} strArray={nameArray} idx={15} />
      </h1>

      {/* ----------------------------------------- for desktops -------------------------- */}

      <LazyLoad once height={400}>
        <section className='project__section'>
          <div className='project__left'>
            <div className='project__img' />
          </div>
          <div className='project__right'>
            
            <div className='project__descriptionContainer'>
              <p className='project__description'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam necessitatibus ipsum ipsam officia ducimus obcaecati adipisci. Saepe aliquid atque minima laboriosam tempora similique consectetur unde quas corporis dignissimos accusamus architecto obcaecati nesciunt odio voluptatibus maxime ducimus quos reprehenderit explicabo quis, eligendi ipsa! Vitae, blanditiis hic numquam assumenda nobis id sunt?
              </p>
              
            </div>
          </div>
        </section>
      </LazyLoad>

      {/* --------------------------------------------------- for Mobiles ----------------------------------------------------------------- */}

      <ul className='projectResp__list' >
        <li className='projectResp__items projectResp__items1'>
          <div className='projectResp__card'>
            <div className='projectResp__cardTop'>
              <svg className='projectResp__cardFolder'>
                <use href='icons/symbol-defs.svg#icon-folder' />
              </svg>
              
            </div>
            <div className='projectResp__cardBody'>
              <div className='projectResp__cardBodyHeading'>PROJECT गुलसैर</div>
              <p className='projectResp__cardBodyDescription'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam necessitatibus ipsum ipsam officia ducimus obcaecati adipisci. Saepe aliquid atque minima laboriosam tempora similique consectetur unde quas corporis dignissimos accusamus architecto obcaecati
              </p>

            </div>
          </div>
        </li>
      </ul>

      <span className='sectiontag'>&lt;/section&gt;</span>

    </div>
  );
};

export default Project;
