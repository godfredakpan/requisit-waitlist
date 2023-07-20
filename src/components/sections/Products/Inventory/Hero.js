/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/style-prop-object */
import React from "react";
import classNames from "classnames";
import Image from "../../../elements/Image";

const Hero = () => {
  const outerClasses = classNames("bg-half-170 d-table w-100 overflow-hidden");

  return (
    <section className={outerClasses}>
      <div className="container">
        <div className="row align-items-center pt-5">
          <div className="col-lg-6 col-md-6">
            <div className="title-heading center-mobile">
            <p>
                <span
                  style={{
                    color: "#1e2758",
                    backgroundColor: "#5ab5e0a1",
                    padding: "10px",
                    borderRadius: "10px",
                    fontSize:'12px',
                    marginRight: "10px"
                  }}
                >
                  #trackretailers
                </span>
                <span
                  style={{
                    color: "#1e2758",
                    backgroundColor: "#ff9b32c2",
                    padding: "10px",
                    fontSize:'12px',
                    borderRadius: "10px",
                    marginRight: "10px"
                  }}
                >
                  #productvisibility
                </span>

                <span
                  style={{
                    color: "#1e2758",
                    backgroundColor: "#ff3b32c2",
                    padding: "10px",
                    fontSize:'12px',
                    borderRadius: "10px",
                    marginRight: "10px"
                  }}
                >
                  #trackstock
                </span>

              </p>
              <h1 className="heading mb-3 center-mobile">
                {" "}
                Track and monitor your inventory in one platform!
              </h1>

              <p className="para-desc text-muted center-mobile">
              Have visibility on all your stocks.
              </p>
              <div className="mt-4 pt-2 row col-md-12">
                <div className="col-md-4 col-xs-12 center-mobile">
                  <a
                    href="contact"
                    target="_blank"
                    style={{ height: "100", fontSize: "14px" }}
                    className="btn btn-sm btn-irun btn-danger center-mobile"
                  >
                    Request a Demo
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
            <div className="classic-saas-image position-relative">
              <div className=" position-relative">
                <Image
                  src={require("../../../../assets/images/home/invenyory_bg.svg")}
                  alt="Open"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
