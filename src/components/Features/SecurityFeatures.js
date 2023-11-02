import React from "react";
import SecurityFeaturesItem from "./SecurityFeaturesItem";

const SecurityFeatures = () => {
  return (
    <section className="h_security_area">
      <div className="container">
        <div className="hosting_title security_title text-center">
          <h2 className="wow fadeInUp" data-wow-delay="0.2s">
            Why Choose Stellr?
          </h2>
        </div>
        <div className="row">
          <SecurityFeaturesItem
            itemClass="pr_70"
            image="security_1.png"
            Title="AI-Enabled: Powered by GPT for search & data context"
            pText="AI-enabled search improves data retrieval by up to 40%, saving valuable research time. Contextualized data analytics lead to a 30% increase in identifying research trends and patterns."
          />
          <SecurityFeaturesItem
            itemClass="pl_70"
            image="security_2.png"
            Title="Modern UI/UX, scalable cloud 
            architecture, optimized performance
            "
            pText="Modern UI/UX reduces training time by 50%, ensuring rapid user adoption.

            Optimised performance yields a 25% improvement in research task completion times."
          />
          <SecurityFeaturesItem
            itemClass="pr_70"
            image="security_3.png"
            Title="Compliant with 21 CFR part 11 of FDA,
            Audit Trails and Data Security
           "
            pText="Audit trails help maintain data integrity and transparency, reducing errors by 15%.

            Stellr's data security measures result in a 99.9% reduction in data breach incidents."
          />
        </div>
      </div>
    </section>
  );
};
export default SecurityFeatures;
