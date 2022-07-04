import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {incrementCounter, decrementCounter} from "../Redux/Action/Counter.Action";

function Counter(props) {
  const C = useSelector((state) => state.Counter);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(incrementCounter());
  };
  const handleDecrement = () => {
    dispatch(decrementCounter());
  };
  return (
    <div className="container text-center">
      <button
        type="button"
        className="btn btn-outline-warning p-2 my-2 btn-default"
        onClick={handleIncrement}
      >Increment</button>

      <p className="fw-bold mt-2">{C.Counter}</p>
      <button
        type="button"
        className="btn btn-outline-danger p-2 my-2 btn-default"
        onClick={handleDecrement}
      >Decrement</button>
    </div>
  );
}

export default Counter;
