import {ADD_BOOK,DATA_LOADED} from "../constants/action-types"

export function addBook(payload){
    return {type: ADD_BOOK, payload}
};



export function getData() {
    return function(dispatch) {
      return fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(json => {
          dispatch({ type: "DATA_LOADED", payload: json });
        });
    };
  }