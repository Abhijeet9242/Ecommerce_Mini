const initState = {
  cartproducts: [],
  totalPrice: 0,
  totalQuantites: 0,
};

// console.log(action.payload.product.id)

const CartReducer = (state = initState, action) => {
  let findPro;
  let index;

  switch (action.type) {
    case "ADD_TO_CART":
      const { product, quantity } = action.payload;
      console.log(product.id, quantity);
      const checkitem = state.cartproducts.find((pr) => pr.id === product.id);
      if (checkitem) {
        return state;
      } else {
        const Tprice = state.totalPrice + product.discountPrice * quantity;
        // console.log(Tprice)
        const Tquantities = state.totalQuantites + quantity;
        product.quantity = quantity;
        return {
          ...state,
          cartproducts: [...state.cartproducts, product],
          totalPrice: Tprice,
          totalQuantites: Tquantities,
        };
      }

    case "INC":
      findPro = state.cartproducts.find(
        (product) => product.id === action.payload
      );
      index = state.cartproducts.findIndex(
        (product) => product.id === action.payload
      );
      if (findPro.quantity < 10) {
        findPro.quantity += 1;
        state.cartproducts[index] = findPro;
        return {
          ...state,
          totalPrice: state.totalPrice + findPro.discountPrice,
          totalQuantites: state.totalQuantites + 1,
        };
      } else {
        return state;
      }

    case "DEC":
      findPro = state.cartproducts.find(
        (product) => product.id === action.payload
      );
      index = state.cartproducts.findIndex(
        (product) => product.id === action.payload
      );
      if (findPro.quantity > 1) {
        findPro.quantity -= 1;
        state.cartproducts[index] = findPro;
        return {
          ...state,
          totalPrice: state.totalPrice + findPro.discountPrice,
          totalQuantites: state.totalQuantites - 1,
        };
      } else {
        return state;
      }

    case "REMOVE":
      findPro = state.cartproducts.find(
        (product) => product.id === action.payload
      );
      const filtered = state.cartproducts.filter(
        (product) => product.id !== action.payload
      );
      return {
        ...state,
        cartproducts: filtered,
        totalPrice: state.totalPrice - findPro.discountPrice * findPro.quantity,
        totalQuantites: state.totalQuantites - findPro.quantity,
      };

    default: {
      return state;
    }
  }
};

export default CartReducer;
