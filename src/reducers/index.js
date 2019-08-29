import { ADD_BOOK, DATA_LOADED } from "../constants/action-types"

const initialState = {
    books: [],
    remoteArticles: []
}

function rootReducer(state = initialState, action) {
    if (action.type === DATA_LOADED) {
        return Object.assign({}, state, {
          remoteArticles: state.remoteArticles.concat(action.payload)
        });
      }
    if (action.type == ADD_BOOK) {
        return Object.assign({}, state, {
            books: state.books.concat(action.payload)
        });
    }


    return state;
}


export default rootReducer