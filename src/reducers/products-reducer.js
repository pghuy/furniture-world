const productsReducer = (state, actions) => {
  if (actions.type === "OPEN_SLIDEBAR") {
    return { ...state, isSlideBarOpen: true };
  }
  if (actions.type === "CLOSE_SLIDEBAR") {
    return { ...state, isSlideBarOpen: false };
  }
  if (actions.type === "GET_PRODUCTS_BEGIN") {
    return { ...state, products_loading: true };
  }
  if (actions.type === "GET_PRODUCTS_ERROR") {
    return { ...state, products_loading: false, products_error: true };
  }
  if (actions.type === "GET_PRODUCTS_SUCCESS") {
    const featured_products = actions.payload.filter(
      (product) => product.featured === true
    );
    return {
      ...state,
      products_loading: false,
      products_error: false,
      single_product_error: false,
      products: actions.payload,
      featured_products,
    };
  }
  if (actions.type === "GET_SINGLE_PRODUCT_BEGIN") {
    return {
      ...state,
      single_product_loading: true,
      single_product_error: false,
    };
  }
  if (actions.type === "GET_SINGLE_PRODUCT_ERROR") {
    return {
      ...state,
      single_product_loading: false,
      single_product_error: true,
    };
  }
  if (actions.type === "GET_SINGLE_PRODUCT_SUCCESS") {
    return {
      ...state,
      single_product_loading: false,
      single_product_error: false,
      single_product: actions.payload,
    };
  }
};

export default productsReducer;
