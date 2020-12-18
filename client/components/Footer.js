import React from "react";
import {connect} from "react-redux"
import { setVisibilityFilter } from "../store";

const Footer = (props) => (
  <div className="footer">
    <div>Show:
      <span onClick={() => props.setVisibilityFilter('SHOW_ALL')}> All </span>
      <span onClick={() => props.setVisibilityFilter('SHOW_ACTIVE')}> Active </span>
      <span onClick={() => props.setVisibilityFilter('SHOW_BOUGHT')}> Bought </span>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch)=>{
  return{
    setVisibilityFilter: status=>dispatch(setVisibilityFilter(status))
  }
}

export default connect(null,mapDispatchToProps)(Footer);
