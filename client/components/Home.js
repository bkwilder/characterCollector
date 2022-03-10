import React, { Component } from "react";
import SingleQuizCard from "./SingleQuizCard";
import { connect } from "react-redux";

const quizzesEx = [
  {
    name: "7: The Enthusiast",
    description:
      "The Busy, Variety-Seeking Type: Spontaneous, Versatile, Acquisitive, and Scattered",
    image:
      "https://images.squarespace-cdn.com/content/v1/585179fe1b631b51e1837bac/1482155875727-5H6T695BP0HSOTYWTD0B/image-asset.gif?format=500w",
  },
  {
    name: "4: The Individualist",
    description:
      "The Sensitive, Introspective Type:Expressive, Dramatic, Self-Absorbed, and Temperamental",
    image:
      "https://images.squarespace-cdn.com/content/v1/585179fe1b631b51e1837bac/1481922116625-6PLCPBH7OAJA4RU1JXX2/image-asset.gif?format=500w",
  },
  {
    name: "Love Languages",
    description:
      "All the Love",
    image:
      "https://images.squarespace-cdn.com/content/v1/585179fe1b631b51e1837bac/1481922116625-6PLCPBH7OAJA4RU1JXX2/image-asset.gif?format=500w",
  }
];
const borderRadius = [
  "30% 70% 63% 37% / 68% 50% 50% 32% ",
  "63% 37% 58% 42% / 51% 76% 24% 49%",
  "62% 38% 63% 37% / 39% 50% 50% 61% ",
  "80% 20% 59% 41% / 37% 32% 68% 63% ",
  "86% 14% 63% 37% / 39% 50% 50% 61% ",
];
export class Home extends Component {
  createRings(quizzes) {
    let toRender = '';
    let i = 0;
    let size = "";
    while (i < quizzes.length) {
      size = `${100 + 40 * i}px`;
      toRender = (
        <div
          className={`tree-ring ${quizzes[i].name}`}
          style={{ height: `${size}`, width: `${size}`, borderRadius: `${borderRadius[i]}`}}
        >
          {toRender}
          <SingleQuizCard
            quiz={quizzes[i]}
            style={{ height: `${size}`, width: `${size}`, borderRadius: `${borderRadius[i]}`}}
          />
        </div>
      );
      i++;
    }
    return toRender;
  }
  render() {
    const { username } = this.props;
    let rings = this.createRings(quizzesEx);
    return (
      <div className="home-page-container">
        <h3>Welcome, {username}</h3>
        <div className="tree">{rings}</div>
      </div>
    );
  }
}


const mapState = (state) => {
  return {
    username: state.auth.username,
  };
};

export default connect(mapState)(Home);
