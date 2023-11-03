import React, { Component } from "react";
import Player from "./videobtn";
import Forms from "../Forms";
import MainLoader from "../MainLoader";

class CloudBanner extends Component {
  state = {
    open: false,
  };

  onOpenModal = () => {
    this.setState((prevState) => ({
      open: !prevState.open,
    }));
  };
  render() {
    return (
      <section className="software_banner_area d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-flex align-items-center">
              <div className="software_banner_content">
                <h2
                  className="f_500 f_size_50 w_color wow fadeInLeft"
                  data-wow-delay="0.2s"
                >
                  Stellr - An Electronic{" "}
                  <span className="f_700">Lab Notebook</span> with Superpowers
                </h2>
                <p
                  className="w_color f_size_12 l_height30 mt_30 wow fadeInLeft"
                  data-wow-delay="0.4s"
                >
                  Ditch Paper and Go Digital with Stellr's ELN Solution,
                  fortified with AI and ML, turns your lab into a
                  decision-making powerhouse. Unleash the true potential of your
                  data and unlock a world of smarter, faster breakthroughs.
                </p>
                <div
                  className="action_btn d-flex align-items-center mt_40 wow fadeInLeft"
                  data-wow-delay="0.6s"
                >
                  <a
                    href="https://app.getstellr.io/login"
                    className="software_banner_btn"
                  >
                    Get Started
                  </a>

                  <Player
                    open={this.state.open}
                    toggleModal={this.onOpenModal}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6 relative">
              <div className="card-glass">
                <Forms />
              </div>
              <div
                className="software_img wow fadeInRight card-image"
                data-wow-delay="0.2s"
              >
                <img src={require("../../img/home5/banner_img.png")} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default CloudBanner;
