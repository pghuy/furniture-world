const cart_reducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    const { id, color, amount, product } = action.payload;
    let tempItem = state.cart.find((item) => item.id === id + color);
    if (tempItem) {
      const tempCart = state.cart.map((cartItem) => {
        if (cartItem.id === id + color) {
          let newAmount = cartItem.amount + amount;
          if (newAmount > cartItem.max) {
            newAmount = cartItem.max;
          }
          return { ...cartItem, amount: newAmount };
        } else {
          return cartItem;
        }
      });
      return { ...state, cart: tempCart };
    } else {
      const newItem = {
        id: id + color,
        name: product.name,
        color,
        amount,
        image: product.images[0].url,
        price: product.price,
        max: product.stock,
      };
      console.log(newItem);
      return { ...state, cart: [...state.cart, newItem] };
    }
  }
  if (action.type === "RECOUNT_CART_TOTAL") {
    const recountResult = state.cart.reduce(
      (total, cartItem) => {
        total.total_items += cartItem.amount;
        total.total_amount += cartItem.amount * cartItem.price;
        return total;
      },
      { total_items: 0, total_amount: 0 }
    );
    const { total_amount, total_items } = recountResult;
    return { ...state, total_items, total_amount };
  }
  if (action.type === "TOGGLE_AMOUNT") {
    const { id, value } = action.payload;
    const tempCart = state.cart.map((item) => {
      if (item.id === id) {
        if (value === "increase") {
          let newAmount = item.amount + 1;
          if (newAmount > item.max) {
            newAmount = item.max;
          }
          return { ...item, amount: newAmount };
        }
        if (value === "decrease") {
          let newAmount = item.amount - 1;
          if (newAmount < 0) {
            newAmount = 1;
          }
          return { ...item, amount: newAmount };
        }
      }
      return item;
    });
    return { ...state, cart: tempCart };
  }
  if (action.type === "REMOVE_ITEM") {
    const tempCart = state.cart.filter((item) => item.id !== action.payload);
    console.log(action.payload);
    return { ...state, cart: tempCart };
  }
  if (action.type === "CLEAR_CART") {
    return { ...state, cart: [] };
  }
};

export default cart_reducer;
