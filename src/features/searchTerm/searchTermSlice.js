const initialState = "";

//Reducer
const searchTermReducer = (state = initialState, action) => {
  switch (action.type) {
    case "searchTerm/setSearchTerm":
      return action.payload;
    case "searchTerm/clearSearchTerm":
      return "";
    default:
      return state;
  }
};

//Action creators
export function setSearchTerm(term) {
  return {
    type: "searchTerm/setSearchTerm",
    payload: term,
  };
}

export function clearSearchTerm() {
  return {
    type: "searchTerm/clearSearchTerm",
  };
}

//Selectors
export const selectSearchTerm = (state) => state.searchTerm;

//Exports
export default searchTermReducer;
