import React from "react";
import {connect} from "react-redux"
import { setVisibilityFilter } from "../store";

const Footer = (props) => console.log(props)||(
  <div className="footer">
    <div>Show:
      <span onClick={() => props.setVisibilityFilter('SHOW_ALL')} style={props.status==="SHOW_ALL" ? {
      fontWeight: "bold", color: "orange"
    }:{fontWeight:"normal", color:"black"}}> All </span>
      <span onClick={() => props.setVisibilityFilter('SHOW_ACTIVE')} style={props.status==="SHOW_ACTIVE" ? {
      fontWeight: "bold", color: "orange"
    }:{fontWeight:"normal", color:"black"}}> Active </span>
      <span onClick={() => props.setVisibilityFilter('SHOW_BOUGHT')} style={props.status==="SHOW_BOUGHT" ? {
      fontWeight: "bold", color: "orange"
    }:{fontWeight:"normal", color:"black"}}> Bought </span>
    </div>
  </div>
);

const mapStateToProps = state => {
  return {
    status: state.status
  }
}

const mapDispatchToProps = (dispatch)=>{
  return{
    setVisibilityFilter: status=>dispatch(setVisibilityFilter(status))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Footer);
