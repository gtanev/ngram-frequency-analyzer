import { SORT_ORDER } from "../constants";

function filteredData(state) {
  const { data, filterKey, filterValue } = state;

  if (filterKey && filterValue) {
    return data.filter(
      x => String(x[filterKey]).toLocaleLowerCase().indexOf(filterValue.toLocaleLowerCase()) !== -1
    );
  }

  return data;
}

function sortedData(state) {
  const { data, sortKey, sortDirection } = state;

  if (sortDirection === SORT_ORDER.descending) {
    sortKey === "n-gram"
      ? data.sort((x, y) => y[sortKey].localeCompare(x[sortKey]))
      : data.sort((x, y) => y[sortKey] - x[sortKey] || x["index"] - y["index"]);
  } else if (sortDirection === SORT_ORDER.ascending) {
    sortKey === "n-gram"
      ? data.sort((y, x) => y[sortKey].localeCompare(x[sortKey]))
      : data.sort((y, x) => y[sortKey] - x[sortKey] || x["index"] - y["index"]);
  }

  return data;
}

export default {
  visibleData: state => sortedData({ ...state, data: filteredData(state) })
};