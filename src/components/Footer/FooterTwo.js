import React, { Component } from "react";
import AboutWidget from "./FooterWidget/AboutWidget";
import SolutionWidget from "./FooterWidget/SolutionWidget";
import TeamWidget from "./FooterWidget/TeamWidget";
import Reveal from "react-reveal/Reveal";
class FooterTwo extends Component {
  render() {
    var { fClass } = this.props;
    let FooterData = this.props.FooterData;
    return (
      <footer className={`footer_area footer_area_four f_bg ${fClass}`}>
        <p className="mb-0 f_400">© Stellr Tech Solutions Private Limited</p>
      </footer>
    );
  }
}
export default FooterTwo;
