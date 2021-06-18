import React from 'react';
import { NavLink } from 'react-router-dom';

const Common = (props) => {
  return (
    <>
      <section id="header" className="head d-flex align-item-center">
        <div className="container-fluid ">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className=" pt-5 pt-lg-0  order-2 order-lg-first d-flex justify-content-center flex-column">
                  <h1>
                    {props.name}
                    <strong className="brand-name"> Akshay Malaviya</strong>
                  </h1>
                  <h4 className="my-3">
                    We are the team of talented developers making websites
                  </h4>
                  <div className="mt-3">
                    <NavLink
                      exact
                      to={props.visit}
                      className="btn-get-started "
                    >
                      {props.btname}
                    </NavLink>
                  </div>
                </div>
                <div classname=" mt-lg-10 order-1 order-lg-last header-img mx-auto">
                  <img
                    src={props.imgsrc}
                    alt="image"
                    className="img-fluid animated"
                    width={props.width}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Common;
