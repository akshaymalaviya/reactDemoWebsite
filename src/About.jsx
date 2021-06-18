import React from 'react';
import about from '../src/img/About.svg';
import Common from './Common';

const About = () => {
  return (
    <>
      <Common
        name="Welcome to About page"
        imgsrc={about}
        visit="/contact"
        btname="Contact Now"
        width="400px"
      />
    </>
  );
};

export default About;
