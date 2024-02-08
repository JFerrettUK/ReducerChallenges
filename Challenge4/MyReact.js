import { useState } from "react";
import {} from "./messengerReducer";

export function useReducer(reducer, initialState) {
  const [state, setState] = useState(initialState);

  const dispatch = (action) => {
    const newState = reducer(state, action);
    setState(newState);
  };

  return [state, dispatch];
}
