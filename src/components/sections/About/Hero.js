/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/style-prop-object */
import React from "react";
import classNames from "classnames";

const Hero = () => {
  const outerClasses = classNames("bg-half d-table w-100");

  return (
    <div>
      <section className={outerClasses}>
        <div className="bg-overlay"></div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12 text-center">
              <div className="page-next-level title-heading">
                <h1 className="text-white title-dark"> About us </h1>
                <p className="text-white-50 para-desc mb-0 mx-auto">
                  Work with iRUN and enjoy a whole new level of digital
                  automation system, with iRUN you are guaranteed to enjoy a
                  whole new level of digital automation.
                </p>
                <div className="page-next">
                  <nav aria-label="breadcrumb" className="d-inline-block">
                    <ul className="breadcrumb bg-white rounded shadow mb-0">
                      <li className="breadcrumb-item">
                        <a href="/">iRUN</a>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        About
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="position-relative">
        <div className="shape overflow-hidden text-white">
          <svg
            viewBox="0 0 2880 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Hero;
