import React, { useReducer, useContext, useEffect } from "react";
import filterReducer from "../reducers/filter-reducer";
import { useProductsContext } from "./products-context";

const initialState = {
  filtered_products: [],
  all_products: [],
  grid_view: true,
  sort: "price-lowest",
  filters: {
    text: "",
    company: "all",
    category: "all",
    color: "all",
    min_price: 0,
    max_price: 0,
    price: 0,
    shipping: false,
  },
};

const FilterContext = React.createContext();

export const FilterProvider = (props) => {
  const [state, dispatch] = useReducer(filterReducer, initialState);
  const { products } = useProductsContext();
  useEffect(() => {
    dispatch({ type: "LOAD_PRODUCTS", payload: products });
  }, [products]);

  useEffect(() => {
    dispatch({ type: "FILTER_PRODUCTS" });
    dispatch({ type: "SORT_PRODUCTS" });
  }, [products, state.sort, state.filters]);

  const setGridView = () => {
    dispatch({ type: "SET_GRID_VIEW" });
  };
  const setListView = () => {
    dispatch({ type: "SET_LIST_VIEW" });
  };
  const updateSort = (e) => {
    const sortValue = e.target.value;
    dispatch({ type: "UPDATE_SORT", payload: sortValue });
  };
  const updateFilters = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    if (name === "category") {
      value = e.target.textContent;
      console.log(value);
    }
    if (name === "color") {
      value = e.target.dataset.color;
    }
    if (name === "price") {
      value = Number(value);
    }
    if (name === "shipping") {
      value = e.target.checked;
    }
    dispatch({ type: "UPDATE_FILTERS", payload: { name, value } });
  };
  const clearFilters = () => {
    dispatch({ type: "CLEAR_FILTERS" });
  };

  return (
    <FilterContext.Provider
      value={{
        ...state,
        setGridView,
        setListView,
        updateSort,
        updateFilters,
        clearFilters,
      }}
    >
      {props.children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
