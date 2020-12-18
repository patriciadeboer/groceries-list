import React from 'react';
import GroceryItem from './GroceryItem';
import { connect } from 'react-redux';
import { toggleGrocery } from '../store';

const GroceryList = props => (
  <ul>
    {props.groceries.map(grocery => (
      <GroceryItem
        key={grocery.id}
        {...grocery}
        onClick={() => props.toggleGrocery(grocery.id)}
      />
    ))}
  </ul>
);

const mapStateToProps = state => {
  //const filterView = state.groceries.filter(grocery=>)
  if (state.visibilityFilter === 'SHOW_ALL') {
    return { groceries: state.groceries };
  } else if (state.visibilityFilter === 'SHOW_BOUGHT') {
    return {
      groceries: state.groceries.filter(grocery => {
        return grocery.bought;
      }),
    };
  } else if (state.visibilityFilter === 'SHOW_ACTIVE') {
    return {
      groceries: state.groceries.filter(grocery => {
        return !grocery.bought;
      }),
    };
  }
};
const mapDispatchToProps = (dispatch, groceryId) => {
  console.log(groceryId);
  return {
    toggleGrocery: groceryId => dispatch(toggleGrocery(groceryId)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GroceryList);
