import updateBookList from './book-list';
import updateShoppingCart from './shopping-cart';

// const initialState = {
//   bookList: {
//     books: [],
//     loading: true,
//     error: null
//   },
//
//   shoppingCart: {
//     cartItems: [
//       // {
//       //   id: 1,
//       //   name: 'Book 1',
//       //   count: 3,
//       //   total: 150
//       // },
//       // {
//       //   id: 2,
//       //   name: 'Book 2',
//       //   count: 2,
//       //   total: 70
//       // }
//     ],
//     orderTotal: 0
//   }
// };

const reducer = (state, action) => {

  // switch (action.type) {
  //   case 'FETCH_BOOKS_REQUEST':
  //   case 'FETCH_BOOKS_SUCCESS':
  //   case 'FETCH_BOOKS_FAILURE':
  //     return {
  //       ...state,
  //       bookList: updateBookList(state, action)
  //     };
  //
  //   case 'BOOK_ADDED_TO_CART':
  //   case 'BOOK_REMOVED_FROM_CART':
  //   case 'ALL_BOOKS_REMOVED_FROM_CART':
  //     return {
  //       ...state,
  //       shoppingCart: updateShoppingCart(state, action)
  //     };
  //
  //   default:
  //     return state;
  // }

  return {
    bookList: updateBookList(state, action),
    shoppingCart: updateShoppingCart(state, action)
  };
};

export default reducer;
