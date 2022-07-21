import React from "react";
import { useEffect } from "react";

const PromiseExmple = (props) => {
  const a = () => {
    return "one extcute";
  };
  const b = () => {
    return new Promise((resolve, reject) => {
      resolve("two extcute");
    });
  };
  const c = () => {
    return "tree extcute";
  };

  const all = () => {};

  useEffect(() => {
    all();
  }, []);

  const view = (p) => {
    console.log(p);
  }
  const sum = () => { 
    let x = 10 , y =15
    let z = x + y
    view(z)
  }
sum(view)
  return (
    <>
      <h1>promise</h1>
    </>
  );
};

export default PromiseExmple;
