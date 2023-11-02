import React, { Component } from "react";

class DeveloperTab extends Component {
  render() {
    return (
      <section className="developer_product_area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 d-flex align-items-center">
              <div className="developer_product_content">
                <h2
                  className="f_600 f_size_30 l_height30 t_color3 mb_50 wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  How Stellr's ELN Adapts to Your Unique Needs
                </h2>
                <ul
                  className="nav nav-tabs develor_tab mb-30"
                  id="myTab2"
                  role="tablist"
                >
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      data-tab="tab_one"
                      id="ruby-tab"
                      data-toggle="tab"
                      href="#ruby"
                      role="tab"
                      aria-controls="ruby"
                      aria-selected="true"
                    >
                      Biotech{" "}
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      data-tab="tab_two"
                      id="curl-tab"
                      data-toggle="tab"
                      href="#curl"
                      role="tab"
                      aria-controls="curl"
                      aria-selected="false"
                    >
                      {" "}
                      Cell & Gene Therapy
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      data-tab="tab_three"
                      data-toggle="tab"
                      href="#resize"
                      role="tab"
                      aria-controls="resize"
                      aria-selected="true"
                    >
                      Educational Institutions
                    </a>
                  </li>
                </ul>
                <div className="tab-content developer_tab_content">
                  <div
                    className="tab-pane fade show active"
                    id="ruby"
                    role="tabpanel"
                    aria-labelledby="ruby-tab"
                  >
                    <ul>
                      <li>
                        <strong> Collaborative Research:</strong> Real-time data
                        sharing, saving 12 hours a week, and accelerating
                        discoveries.
                      </li>
                      <li>
                        <strong> Data Analysis:</strong> Enhance decision
                        accuracy by 45% with data visualization, a key to
                        successful research.
                      </li>
                      <li>
                        <strong> Inventory Management:</strong> Trim costs by
                        15% and save up to $10,000 annually, crucial for
                        budget-conscious biotech firms.
                      </li>
                      <li>
                        <strong> Advanced Search:</strong> Increase research
                        productivity by 25% and reduce search time by 40%, a
                        game-changer for fast-paced biotech projects.
                      </li>
                      <li>
                        <strong> Customizable Reports & Dashboards:</strong>{" "}
                        Elevate data comprehension by 40% and streamline report
                        creation, critical for biotech research documentation.
                      </li>
                    </ul>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="curl"
                    role="tabpanel"
                    aria-labelledby="curl-tab"
                  >
                    <ul>
                      <li>
                        <strong> Material Management:</strong> Efficiently
                        manage cell lines, reagents, and vectors, reducing costs
                        by up to 20% (e.g., reducing material wastage).
                      </li>
                      <li>
                        <strong> Collaborative Research:</strong> Foster
                        real-time collaboration and data sharing among
                        researchers, potentially improving research productivity
                        by 30%.
                      </li>
                      <li>
                        <strong> Data Analysis:</strong> Perform data analysis
                        and visualization for data-driven decisions, reducing
                        data processing time by 40%.
                      </li>
                      <li>
                        <strong> Analytical Research:</strong> Document methods
                        and ensure research traceability, resulting in a 25%
                        improvement in research reproducibility.
                      </li>
                      <li>
                        <strong>Insights Generation:</strong> Extract insights
                        for therapy development, potentially accelerating
                        development timelines by 15%.
                      </li>
                    </ul>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="resize"
                    role="tabpanel"
                    aria-labelledby="resize-tab"
                  >
                    <h6>For Students</h6>
                    <ul>
                      <li>
                        <strong> Structured Learning:</strong> Our ELN enhances
                        scientific understanding and boosts academic performance
                        by 15%.
                      </li>
                      <li>
                        <strong> Remote Access:</strong> Enables flexible
                        learning schedules for 90% of students.
                      </li>
                      <li>
                        <strong> Data Integrity:</strong> Minimizes errors and
                        data loss by 80%.
                      </li>
                      <li>
                        <strong> Collaboration:</strong> Improves teamwork
                        abilities by 30%.
                      </li>
                      <li>
                        <strong>Feedback & Evaluation:</strong> Improves student
                        performance by 25%.
                      </li>
                    </ul>
                    <h6>For Professors</h6>
                    <ul>
                      <li>
                        <strong> Efficient Grading:</strong> Cuts grading time
                        by 50%.
                      </li>
                      <li>
                        <strong> Real-time Monitoring:</strong> Tailors support
                        for up to 95% of students.
                      </li>
                      <li>
                        <strong> Standardization:</strong> Elevates experiment
                        quality with a 90% adherence rate.
                      </li>
                      <li>
                        <strong> Data Insights:</strong> Enhances teaching
                        effectiveness by 20%.
                      </li>
                      <li>
                        <strong>Resource Sharing:</strong> Enriches the
                        educational experience for 100% of students.
                      </li>
                    </ul>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="doctl"
                    role="tabpanel"
                    aria-labelledby="doctl-tab"
                  >
                    <p className="mb_40">
                      Tickety-boo cheers plastered twit chimney pot off his nut
                      hotpot spend a penny have it, so I said squiffy A bit of
                      how's your father mufty pukka knees up absolutely
                      bladdered brown bread, James Bond boot spiffing ummm I'm
                      telling vagabond arse over tit burke. He lost his bottle
                      mush old spend a penny wellies gormless bite.!
                    </p>
                    <a href="/#" className="details_btn">
                      API Documentation
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default DeveloperTab;
