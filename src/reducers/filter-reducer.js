const filterReducer = (state, action) => {
  if (action.type === "LOAD_PRODUCTS") {
    console.log("loading");
    let maxPriceArr = action.payload.map((item) => item.price);
    const maxPrice = Math.max(...maxPriceArr);
    return {
      ...state,
      filtered_products: [...action.payload],
      all_products: [...action.payload],
      filters: {
        ...state.filters,
        max_price: maxPrice,
        price: maxPrice,
      },
    };
  }
  if (action.type === "UPDATE_SORT") {
    return { ...state, sort: action.payload };
  }
  if (action.type === "SORT_PRODUCTS") {
    const { filtered_products } = state;
    let tempProductsArr = [...filtered_products];
    if (state.sort === "price-lowest") {
      tempProductsArr = tempProductsArr.sort((a, b) => a.price - b.price);
    }
    if (state.sort === "price-highest") {
      tempProductsArr = tempProductsArr.sort((a, b) => {
        if (a.price < b.price) {
          return 1;
        }
        if (a.price > b.price) {
          return -1;
        }
        return 0;
      });
    }
    if (state.sort === "nameAZ") {
      tempProductsArr = tempProductsArr.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
    }
    if (state.sort === "nameZA") {
      tempProductsArr = tempProductsArr.sort((a, b) => {
        return b.name.localeCompare(a.name);
      });
    }
    return { ...state, filtered_products: tempProductsArr };
  }
  if (action.type === "FILTER_PRODUCTS") {
    let tempProducts = [...state.all_products];
    console.log(tempProducts);
    const { text, category, company, color, price, shipping } = state.filters;
    if (text) {
      tempProducts = tempProducts.filter((product) => {
        return product.name.toLowerCase().startsWith(text);
      });
    }
    if (category !== "all") {
      console.log(tempProducts);
      console.log(category);
      tempProducts = tempProducts.filter(
        (product) => product.category === category
      );
    }
    if (company !== "all") {
      tempProducts = tempProducts.filter(
        (product) => product.company === company
      );
    }
    if (color !== "all") {
      tempProducts = tempProducts.filter((product) => {
        return product.colors.find((cor) => cor === color);
      });
    }
    tempProducts = tempProducts.filter((product) => product.price <= price);
    if (shipping) {
      tempProducts = tempProducts.filter(
        (product) => product.shipping === true
      );
    }
    return { ...state, filtered_products: tempProducts };
  }
  if (action.type === "UPDATE_FILTERS") {
    const { name, value } = action.payload;
    console.log(name);
    return { ...state, filters: { ...state.filters, [name]: value } };
  }
  if (action.type === "CLEAR_FILTERS") {
    return {
      ...state,
      filtered_products: [],
      filters: {
        ...state.filters,
        text: "",
        company: "all",
        category: "all",
        color: "all",
        price: state.filters.max_price,
        shipping: false,
      },
    };
  }
  if (action.type === "SET_GRID_VIEW") {
    return { ...state, grid_view: true };
  }
  if (action.type === "SET_LIST_VIEW") {
    return { ...state, grid_view: false };
  }
};

export default filterReducer;
