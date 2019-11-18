import actions from "./actions";

export const initialState = Object.freeze({
  labels: ["index", "n-gram", "count"],
  data: [],
  error: null,
  filterKey: null,
  filterValue: null,
  sortKey: null,
  sortDirection: null
});

export const reducer = (state, action) => {
  switch (action.type) {
    case "handleData":
      return actions.handleData(state, action.payload);
    case "handleError":
      return actions.handleError(state, action.payload);
    case "handleFilter":
      return actions.handleFilter(state, action.payload);
    case "handleSort":
      return actions.handleSort(state, action.payload);
    case "handleReset":
      return initialState;
    default:
      return state;
  }
};