import React from 'react';
import map from '../src/img/map.svg';
import Common from './Common';

const Home = () => {
  return (
    <>
      <Common
        name="Grow your business with"
        imgsrc={map}
        visit="/service"
        btname="Get Started"
        width="600px"
      />
    </>
  );
};

export default Home;
