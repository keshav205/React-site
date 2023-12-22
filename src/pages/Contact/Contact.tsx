import AnimatedLetters from '@components/AnimatedLetters/AnimatedLetters';
import React, { useState, useEffect, useRef } from 'react';
import './contact.scss';
import Map, { Marker } from 'react-map-gl';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const nameArray = [...'CONTACT US'];

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);
  });

  const form = useRef<HTMLFormElement>(null);

  const inputRef1 = useRef<HTMLInputElement>(null);
  const inputRef2 = useRef<HTMLInputElement>(null);
  const inputRef3 = useRef<HTMLTextAreaElement>(null);

  const sendEmail = (e: any) => {
    e.preventDefault();

    if (form.current !== null) {
      emailjs.sendForm('service_clrfl7q', 'template_56ibui7', form.current, 'hWYBLhSzbCLzcSlTF')
        .then(() => {
          window.alert('Mail Sent Successfully!!!');
        }, (error) => {
          window.alert('Mail Not Sent!!!');
        });
    }

    if (inputRef1.current !== null) inputRef1.current.value = '';
    if (inputRef2.current !== null) inputRef2.current.value = '';
    if (inputRef3.current !== null) inputRef3.current.value = '';
  };

  return (
    <div className='contact'>
      <div className='contact__left'>
        <span className='tag' style={{ padding: '0rem' }}>&lt;body&gt;</span>
        <h1 className='about__headingPrimary'>
          <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
        </h1>
        
        <div className='form'>
          <form ref={form} onSubmit={sendEmail}>
            <div className='form__group'>
              <input name='user_name' ref={inputRef1} type='text' className='form__input' id='name' placeholder='Full Name' required />
              <label htmlFor='name' className='form__label'>Full Name</label>
            </div>
            <div className='form__group'>
              <input type='email' ref={inputRef2} name='user_email' className='form__input' id='email' placeholder='Enter Your Email Address' required />
              <label htmlFor='email' className='form__label'>Email Address</label>
            </div>
            <div className='form__group'>
              <textarea name='message' ref={inputRef3} className='form__input' id='message' placeholder='Message' required />
              <label htmlFor='message' className='form__label'>Message</label>
            </div>
            <button type='submit' value='Send' className='intro__button'>
              Send Mail
            </button>
          </form>
        </div>
        <span className='tag' style={{ padding: '0rem' }}>&lt;body&gt;</span>
      </div>
      
    </div>
  );
};

export default Contact;
