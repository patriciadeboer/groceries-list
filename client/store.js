import {createStore, applyMiddleware} from 'redux';
import loggerMiddleware from 'redux-logger'

export const ADD_GROCERY = 'ADD_GROCERY';

let nextId=0;
export const addGrocery = (text) => ({
  type: ADD_GROCERY,
  id: nextId++,
  text,
  quantity: 1,
});

export const TOGGLE_GROCERY = 'TOGGLE_GROCERY'

export const toggleGrocery = (id) => ({
  type: TOGGLE_GROCERY,
  id
})

export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'
const SHOW_ALL = 'SHOW_ALL';
const SHOW_BOUGHT = 'SHOW_BOUGHT';
const SHOW_ACTIVE = 'SHOW_ACTIVE';

export const setVisibilityFilter = (status) => ({
  type: SET_VISIBILITY_FILTER,
  status
})

export const SET_QUANTITY = 'SET_QUANTITY'

export const setQuantity = (number) => ({
  type: SET_QUANTITY,
  number
})

const initialState={
  groceries:[],
  status: SHOW_ALL
};

export const reducer = (state = initialState, action) => {
  console.log(state)
  console.log(action)
  switch (action.type) {
    case ADD_GROCERY:
      const newGrocery = {
        id: action.id,
        text: action.text,
        bought: false,
        quantity: 1,
      };
      return {
        ...state,
        groceries:[...state.groceries, newGrocery]
      };
    case TOGGLE_GROCERY:
      let groceries = state.groceries.map(grocery => {
        if (grocery.id === action.id) {
          return {...grocery, bought: !grocery.bought};
        } else {
          return grocery;
        }
      });
      return {...state, groceries};
    case SET_VISIBILITY_FILTER:
      return {...state, status: action.status}
    case SET_QUANTITY:
      let quantityGroceries = state.groceries.map(grocery => {
        if (grocery.id === action.id) {
          return {...grocery, quantity: action.quantity};
        } else {
          return grocery;
        }
      });
      return {...state, groceries:quantityGroceries};
    default:
      return state
  }
}
const store = createStore(reducer, applyMiddleware(loggerMiddleware))

//temporary
// store.dispatch(addGrocery("Milk"))
// store.dispatch(addGrocery("Cookies"))
// store.dispatch(toggleGrocery(0))

export default store;
