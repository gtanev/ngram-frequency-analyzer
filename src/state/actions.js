export default {
  handleData: (state, payload) => {
    const data = payload.map((d, i) => ({ ...d, index: i + 1 }));
    return {
      ...state,
      data: data,
      error: null
    };
  },

  handleError: (state, payload) => {
    return {
      ...state,
      data: [],
      error: payload.message || "An unexpected error occurred!"
    };
  },

  handleFilter: (state, payload) => {
    return {
      ...state,
      filterKey: payload.filterKey,
      filterValue: payload.filterValue
    };
  },

  handleSort: (state, payload) => {
    return {
      ...state,
      sortKey: payload.sortKey,
      sortDirection: payload.sortDirection
    };
  }
};