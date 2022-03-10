import React, { Component } from "react";
import { connect } from "react-redux"
import { fetchRings } from "../store/rings";
import SingleRingCard from "./SingleRingCard";


export class AllRings extends Component {
    constructor() {
        super();
    }

    componentDidMount() {
        this.props.fetchRings();
    }

    render() {
        const rings = this.props.rings
        return(
          <div>
            <h1>YOUR RINGs</h1>
            {rings.map(ring => <SingleRingCard key={ring.id} ring={ring}/>)}
            </div>

        )
    }
}

const mapState = (state) => {
    return {
      rings: state.rings,
      auth: state.auth,
    };
  };
  
  const mapDispatch = (dispatch) => {
    return {
      fetchRings: () => dispatch(fetchRings()),
    }
  };
  
  export default connect(mapState, mapDispatch)(AllRings)