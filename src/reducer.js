const initialState = {
  searchText: ''
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'updateSearchText':
      return {
        ...state,
        searchText: action.searchText
      };
    default:
  }
  return state;
};

export default reducer;
