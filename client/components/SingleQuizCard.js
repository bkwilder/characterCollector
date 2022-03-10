import React, { Component } from "react";


export default class SingleQuizCard extends Component {
  constructor() {
    super();
    this.state = {
      hover: false,
    };
    this.handleHover = this.handleHover.bind(this);
  }
  handleHover(event) {
    event.stopPropagation();
    event.nativeEvent.stopImmediatePropagation();
    this.setState({ hover: !this.state.hover });
  }
  render() {
    const props = this.props;
    if (!this.state.hover)
      return (
        <div
          className="place-holder"
          style={props.style}
          onMouseEnter={this.handleHover}
          onMouseLeave={this.handleHover}
        ></div>
      );
    return (
      <div
        onMouseEnter={this.handleHover}
        onMouseLeave={this.handleHover}
        className="single-quiz-card"
        style={{...props.style, fontSize: '10px', backgroundColor:'white'}}
      >
          <div >
        <h2>{props.quiz.name}</h2>
        {/* <img src={props.quiz.image} /> */}
        <p>{props.quiz.description}</p>
        </div>
      </div>
    );
  }
}
