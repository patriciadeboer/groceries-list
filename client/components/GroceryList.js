import React from "react";
import {connect} from "react-redux";
import GroceryItem from "./GroceryItem";

const GroceryList = (props) => (
  <ul>
    {props.groceries.map(grocery => (
      <GroceryItem key={grocery.id} {...grocery} />
    ))}
  </ul>
);

const mapStateToProps = state => ({groceries: state.groceries})

export default connect(mapStateToProps)(GroceryList);
