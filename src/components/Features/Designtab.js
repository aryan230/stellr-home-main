import React from "react";
import Sectitle from "../Title/Sectitle";

const Designtab = () => {
  return (
    <section className="design_tab_area sec_pad">
      <div className="container">
        <Sectitle
          sClass="sec_title text-center mb_70"
          Title="Sneak Peek into Stellr’s Capabilities"
          TitleP="Explore the App in Action: Key Features"
        />
        <div className="row">
          <div className="col-lg-4 d-flex align-items-center">
            <ul className="nav nav-tabs design_tab support_tab" role="tablist">
              <li className="nav-item wow fadeInUp" data-wow-delay="0.4s">
                <a
                  className="nav-link active"
                  id="one-tab"
                  data-toggle="tab"
                  href="#one"
                  role="tab"
                  aria-controls="one"
                  aria-selected="true"
                >
                  <h5>Home Page</h5>
                  {/* <p>
                    Design to development,
                    <br /> automated
                  </p> */}
                </a>
              </li>
              <li className="nav-item wow fadeInUp" data-wow-delay="0.6s">
                <a
                  className="nav-link"
                  id="two-tab"
                  data-toggle="tab"
                  href="#two"
                  role="tab"
                  aria-controls="two"
                  aria-selected="false"
                >
                  <h5>AI - Search</h5>
                  {/* <p>
                    Design to development,
                    <br /> automated
                  </p> */}
                </a>
              </li>
              <li className="nav-item wow fadeInUp" data-wow-delay="0.8s">
                <a
                  className="nav-link"
                  id="three-tab"
                  data-toggle="tab"
                  href="#three"
                  role="tab"
                  aria-controls="three"
                  aria-selected="false"
                >
                  <h5>Sample Management</h5>
                  {/* <p>
                    Design to development,
                    <br /> automated
                  </p> */}
                </a>
              </li>
              <li className="nav-item wow fadeInUp" data-wow-delay="0.8s">
                <a
                  className="nav-link"
                  id="four-tab"
                  data-toggle="tab"
                  href="#four"
                  role="tab"
                  aria-controls="four"
                  aria-selected="false"
                >
                  <h5>Notebook Entry</h5>
                  {/* <p>
                    Design to development,
                    <br /> automated
                  </p> */}
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-8">
            <div className="tab-content support_tab_content">
              <div
                className="tab-pane fade show active"
                id="one"
                role="tabpanel"
                aria-labelledby="one-tab"
              >
                <div className="tab_img">
                  <img src={require("../../img/n.png")} alt="" />
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="two"
                role="tabpanel"
                aria-labelledby="two-tab"
              >
                <div className="tab_img">
                  <img src={require("../../img/n-3.png")} alt="" />
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="three"
                role="tabpanel"
                aria-labelledby="three-tab"
              >
                <div className="tab_img">
                  <img src={require("../../img/n-2.png")} alt="" />
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="four"
                role="tabpanel"
                aria-labelledby="four-tab"
              >
                <div className="tab_img">
                  <img src={require("../../img/n-4.png")} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Designtab;
