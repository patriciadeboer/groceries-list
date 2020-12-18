import {createStore} from 'redux';

export const ADD_GROCERY = 'ADD_GROCERY';

let nextId=0;
export const addGrocery = (text) => ({
  type: ADD_GROCERY,
  id: nextId++,
  text,
});

export const TOGGLE_GROCERY = 'TOGGLE_GROCERY'

export const toggleGrocery = (id) => ({
  type: TOGGLE_GROCERY,
  id
})

const initialState={groceries:[]};
export const reducer = (state = initialState, action) => {
  console.log(state)
  console.log(action)
  switch (action.type) {
    case ADD_GROCERY:
      const newGrocery = {
        id: action.id,
        text: action.text,
        bought: false,
      };
      return {
        ...state,
        groceries:[...state.groceries, newGrocery]
      };
    case TOGGLE_GROCERY:
      const groceries = state.groceries.map(grocery => {
        if (grocery.id === action.id) {
          return {...grocery, bought: !grocery.bought};
        } else {
          return grocery;
        }
      });
      return {...state, groceries};

    default:
      return state
  }
}
const store = createStore(reducer)

//temporary
store.dispatch(addGrocery("Milk"))
store.dispatch(addGrocery("Cookies"))
store.dispatch(toggleGrocery(0))

export default store;
