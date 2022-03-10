import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchRing } from "../store/ring";
import Note from "./Note";

class SingleRing extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    console.log(this.props);
    this.props.fetchRing(this.props.match.params.id);
  }

  render() {
    console.log(this.props.ring);
    return (
      <div>
        <figure class="snip1559">
          <div class="profile-image">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample2.jpg"
              alt="profile-sample2"
            />
          </div>
          <figcaption>
            <h3>Sue Shei</h3>
            <h5>Founder</h5>
            <p>
              Which is worse, that everyone has his price, or that the price is
              always so low.
            </p>
            <div class="icons">
              <a href="#">
                <i class="ion-social-reddit"></i>
              </a>
              <a href="#">
                {" "}
                <i class="ion-social-twitter"></i>
              </a>
              <a href="#">
                {" "}
                <i class="ion-social-vimeo"></i>
              </a>
            </div>
          </figcaption>
        </figure>
        <figure class="snip1559">
          <div class="profile-image">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample7.jpg"
              alt="profile-sample7"
            />
          </div>
          <figcaption>
            <h3>Will Barrow</h3>
            <h5>Web Designer</h5>
            <p>
              I'm killing time while I wait for life to shower me with meaning
              and happiness.
            </p>
            <div class="icons">
              <a href="#">
                <i class="ion-social-reddit"></i>
              </a>
              <a href="#">
                {" "}
                <i class="ion-social-twitter"></i>
              </a>
              <a href="#">
                {" "}
                <i class="ion-social-vimeo"></i>
              </a>
            </div>
          </figcaption>
        </figure>
        <figure class="snip1559">
          <div class="profile-image">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample6.jpg"
              alt="profile-sample6"
            />
          </div>
          <figcaption>
            <h3>Indigo Violet</h3>
            <h5>Public Relations</h5>
            <p>
              The only skills I have the patience to learn are those that have
              no real application in life.{" "}
            </p>
            <div class="icons">
              <a href="#">
                <i class="ion-social-reddit"></i>
              </a>
              <a href="#">
                {" "}
                <i class="ion-social-twitter"></i>
              </a>
              <a href="#">
                {" "}
                <i class="ion-social-vimeo"></i>
              </a>
            </div>
          </figcaption>
        </figure>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    ring: state.ring,
    auth: state.auth,
  };
};

const mapDispatch = (dispatch) => {
  return {
    fetchRing: (id) => dispatch(fetchRing(id)),
  };
};

export default connect(mapState, mapDispatch)(SingleRing);
