import React, { Component } from "react";
import { connect } from "react-redux"
import { fetchQuizzes } from "../store/quizzes";


export class AllQuizzes extends Component {
    constructor() {
        super();
    }

    componentDidMount() {
        this.props.fetchQuizzes();
    }

    render() {
        console.log(this.props.quizzes)
        return(
            <h1>YOUR RINGS</h1>

        )
    }
}

const mapState = (state) => {
    return {
      quizzes: state.quizzes,
      auth: state.auth,
    };
  };
  
  const mapDispatch = (dispatch) => {
    return {
      fetchQuizzes: () => dispatch(fetchQuizzes()),
    }
  };
  
  export default connect(mapState, mapDispatch)(AllQuizzes)