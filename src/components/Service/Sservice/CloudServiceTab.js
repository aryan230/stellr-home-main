import React from "react";
import Sectitle from "../../Title/Sectitle";
import Tabitem from "./CloudServiceTabItem";

const CloudServiceTab = () => {
  return (
    <section className="software_service_area sec_pad">
      <div className="container">
        <Sectitle
          Title="How Stellr's ELN Adapts to Your Unique Needs"
          sClass="sec_title text-center mb_70"
        />
        <div className="row">
          <div className="col-lg-3 col-md-3">
            <ul
              className="nav nav-tabs software_service_tab"
              id="myTab"
              role="tablist"
            >
              <li className="nav-item">
                <a
                  className="nav-link active"
                  id="de-tab"
                  data-toggle="tab"
                  href="#de"
                  role="tab"
                  aria-controls="de"
                  aria-selected="true"
                >
                  Biotech
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="saas-tab"
                  data-toggle="tab"
                  href="#saas"
                  role="tab"
                  aria-controls="saas"
                  aria-selected="false"
                >
                  Cell & Gene Therapy
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="ma-tab"
                  data-toggle="tab"
                  href="#ma"
                  role="tab"
                  aria-controls="ma"
                  aria-selected="true"
                >
                  Educational Institutions:
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-9 col-md-9">
            <div className="tab-content software_service_tab_content">
              <div
                className="tab-pane fade show active"
                id="de"
                role="tabpanel"
                aria-labelledby="de-tab"
              >
                <div className="row">
                  <Tabitem
                    ticon="ti-user"
                    text="Collaborative Research"
                    description="Crikey blow off chap knackered gosh bobby geeza gormless well, Charles cheeky bugger I cor blimey guvnor hanky panky jolly good."
                  />
                  <Tabitem
                    colClass="offset-lg-2"
                    ticon="ti-basketball"
                    text="Data Analysis"
                    description="Crikey blow off chap knackered gosh bobby geeza gormless well, Charles cheeky bugger I cor blimey guvnor hanky panky jolly good."
                  />
                  <Tabitem
                    ticon="ti-face-smile"
                    text="Inventory Management"
                    description="Crikey blow off chap knackered gosh bobby geeza gormless well, Charles cheeky bugger I cor blimey guvnor hanky panky jolly good."
                  />
                  <Tabitem
                    colClass="offset-lg-2"
                    ticon="ti-harddrives"
                    text="Advanced Search"
                    description="Crikey blow off chap knackered gosh bobby geeza gormless well, Charles cheeky bugger I cor blimey guvnor hanky panky jolly good."
                  />
                  {/* <Tabitem
                    colClass="offset-lg-2"
                    ticon="ti-harddrives"
                    text="Customizable Reports & Dashboards"
                    description="Crikey blow off chap knackered gosh bobby geeza gormless well, Charles cheeky bugger I cor blimey guvnor hanky panky jolly good."
                  /> */}
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="saas"
                role="tabpanel"
                aria-labelledby="saas-tab"
              >
                <div className="row">
                  <Tabitem
                    ticon="ti-face-smile"
                    text="Material Management"
                    description="Crikey blow off chap knackered gosh bobby geeza gormless well, Charles cheeky bugger I cor blimey guvnor hanky panky jolly good."
                  />
                  <Tabitem
                    colClass="offset-lg-2"
                    ticon="ti-harddrives"
                    text="Collaborative Research"
                    description="Crikey blow off chap knackered gosh bobby geeza gormless well, Charles cheeky bugger I cor blimey guvnor hanky panky jolly good."
                  />
                  <Tabitem
                    ticon="ti-user"
                    text="Data Analysis"
                    description="Crikey blow off chap knackered gosh bobby geeza gormless well, Charles cheeky bugger I cor blimey guvnor hanky panky jolly good."
                  />
                  <Tabitem
                    colClass="offset-lg-2"
                    ticon="ti-basketball"
                    text="Analytical Research"
                    description="Crikey blow off chap knackered gosh bobby geeza gormless well, Charles cheeky bugger I cor blimey guvnor hanky panky jolly good."
                  />
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="ma"
                role="tabpanel"
                aria-labelledby="ma-tab"
              >
                <div className="row">
                  <Tabitem
                    ticon="ti-user"
                    text="Team Management"
                    description="Crikey blow off chap knackered gosh bobby geeza gormless well, Charles cheeky bugger I cor blimey guvnor hanky panky jolly good."
                  />
                  <Tabitem
                    colClass="offset-lg-2"
                    ticon="ti-basketball"
                    text="Global Availability"
                    description="Crikey blow off chap knackered gosh bobby geeza gormless well, Charles cheeky bugger I cor blimey guvnor hanky panky jolly good."
                  />
                  <Tabitem
                    ticon="ti-face-smile"
                    text="Cluster Deployments"
                    description="Crikey blow off chap knackered gosh bobby geeza gormless well, Charles cheeky bugger I cor blimey guvnor hanky panky jolly good."
                  />
                  <Tabitem
                    colClass="offset-lg-2"
                    ticon="ti-harddrives"
                    text="Backups & Snapshots"
                    description="Crikey blow off chap knackered gosh bobby geeza gormless well, Charles cheeky bugger I cor blimey guvnor hanky panky jolly good."
                  />
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="secure"
                role="tabpanel"
                aria-labelledby="secure-tab"
              >
                <div className="row">
                  <Tabitem
                    ticon="ti-user"
                    text="Team Management"
                    description="Crikey blow off chap knackered gosh bobby geeza gormless well, Charles cheeky bugger I cor blimey guvnor hanky panky jolly good."
                  />
                  <Tabitem
                    colClass="offset-lg-2"
                    ticon="ti-basketball"
                    text="Global Availability"
                    description="Crikey blow off chap knackered gosh bobby geeza gormless well, Charles cheeky bugger I cor blimey guvnor hanky panky jolly good."
                  />
                  <Tabitem
                    ticon="ti-face-smile"
                    text="Cluster Deployments"
                    description="Crikey blow off chap knackered gosh bobby geeza gormless well, Charles cheeky bugger I cor blimey guvnor hanky panky jolly good."
                  />
                  <Tabitem
                    colClass="offset-lg-2"
                    ticon="ti-harddrives"
                    text="Backups & Snapshots"
                    description="Crikey blow off chap knackered gosh bobby geeza gormless well, Charles cheeky bugger I cor blimey guvnor hanky panky jolly good."
                  />
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="scale"
                role="tabpanel"
                aria-labelledby="scale-tab"
              >
                <div className="row">
                  <Tabitem
                    ticon="ti-user"
                    text="Team Management"
                    description="Crikey blow off chap knackered gosh bobby geeza gormless well, Charles cheeky bugger I cor blimey guvnor hanky panky jolly good."
                  />
                  <Tabitem
                    colClass="offset-lg-2"
                    ticon="ti-face-smile"
                    text="Cluster Deployments"
                    description="Crikey blow off chap knackered gosh bobby geeza gormless well, Charles cheeky bugger I cor blimey guvnor hanky panky jolly good."
                  />
                  <Tabitem
                    ticon="ti-harddrives"
                    text="Backups & Snapshots"
                    description="Crikey blow off chap knackered gosh bobby geeza gormless well, Charles cheeky bugger I cor blimey guvnor hanky panky jolly good."
                  />
                  <Tabitem
                    colClass="offset-lg-2"
                    ticon="ti-basketball"
                    text="Global Availability"
                    description="Crikey blow off chap knackered gosh bobby geeza gormless well, Charles cheeky bugger I cor blimey guvnor hanky panky jolly good."
                  />
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="monitor"
                role="tabpanel"
                aria-labelledby="monitor-tab"
              >
                <div className="row">
                  <Tabitem
                    ticon="ti-user"
                    text="Team Management"
                    description="Crikey blow off chap knackered gosh bobby geeza gormless well, Charles cheeky bugger I cor blimey guvnor hanky panky jolly good."
                  />
                  <Tabitem
                    colClass="offset-lg-2"
                    ticon="ti-basketball"
                    text="Global Availability"
                    description="Crikey blow off chap knackered gosh bobby geeza gormless well, Charles cheeky bugger I cor blimey guvnor hanky panky jolly good."
                  />
                  <Tabitem
                    ticon="ti-face-smile"
                    text="Cluster Deployments"
                    description="Crikey blow off chap knackered gosh bobby geeza gormless well, Charles cheeky bugger I cor blimey guvnor hanky panky jolly good."
                  />
                  <Tabitem
                    colClass="offset-lg-2"
                    ticon="ti-harddrives"
                    text="Backups & Snapshots"
                    description="Crikey blow off chap knackered gosh bobby geeza gormless well, Charles cheeky bugger I cor blimey guvnor hanky panky jolly good."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CloudServiceTab;
