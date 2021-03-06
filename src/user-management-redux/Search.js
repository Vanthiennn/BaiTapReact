import React, { Component } from "react";
import { connect } from "react-redux"
import {actGetKeyword} from "./../redux/action"

class Search extends Component {
  handleOnchange = (event) => {
    const {value} = event.target ;
    this.props.keyword(value) ;
  }

  render() {
    return <input type="text" className="form-control mb-3 w-50" onChange={this.handleOnchange} />;
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    keyword : (key) => {
      dispatch(actGetKeyword(key))
    }
  }
}

export default connect(null,mapDispatchToProps) (Search);
