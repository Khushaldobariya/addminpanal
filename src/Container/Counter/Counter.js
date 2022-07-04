import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {incrementCounter, decrementCounter} from "../Redux/Reducer/Counter.Reducer";

function Counter(props) {
  const C = useSelector((state) => state.Counter);
  const dispatch = useDispatch();

  const handleDecrement = () => {
    dispatch(incrementCounter());
  };
  const handleIncrement = () => {
    dispatch(decrementCounter());
  };
  return (
    <div className="container">
      <button
        type="button"
        className="btn btn-outline-warning p-2 my-2 btn-default"
        onClick={handleIncrement}
      ></button>

      <p className="fw-bold">{C.Counter}</p>
      <button
        type="button"
        className="btn btn-outline-warning p-2 my-2 btn-default"
        onClick={handleDecrement}
      ></button>
    </div>
  );
}

export default Counter;
