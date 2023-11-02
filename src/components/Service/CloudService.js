import React, { Component } from "react";
import CloudServiceItem from "./CloudServiceItem";

class CloudService extends Component {
  render() {
    return (
      <section className="software_featured_area">
        <div className="container">
          <h2
            className="f_600 f_size_30 t_color3 text-center l_height40 mb_70 wow fadeInUp"
            data-wow-delay="0.3s"
          >
            Why Choose Stellr?
          </h2>
          <div className="row software_featured_info">
            <CloudServiceItem
              icon="icon1.png"
              sTitle="AI-Enabled: 
              Powered by GPT for   
              search & data context 
              "
              Sp="AI-enabled search improves data retrieval by up to 40%, saving valuable research time.

              Contextualized data analytics lead to a 30% increase in identifying research trends and patterns."
              sbtn="Learn More"
            />
            <CloudServiceItem
              icon="icon2.png"
              sTitle="Modern UI/UX, scalable cloud 
              architecture, optimized performance"
              Sp="Crikey blow off chap knackered gosh bobby geeza gormless well, Charles cheeky bugger I cor blimey guvnor hanky panky jolly good."
              sbtn="Learn More"
            />
            <CloudServiceItem
              icon="icon3.png"
              sTitle="Compliant with 21 CFR part 11 of FDA,
              Audit Trails and Data Security
             "
              Sp="Crikey blow off chap knackered gosh bobby geeza gormless well, Charles cheeky bugger I cor blimey guvnor hanky panky jolly good."
              sbtn="Learn More"
            />
          </div>
        </div>
      </section>
    );
  }
}
export default CloudService;
