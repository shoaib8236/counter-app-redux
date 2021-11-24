import React, { useState } from "react";
import { connect } from "react-redux";
import Button from "../../components/buttons/button";
import {
  resetCounter,
  generalizeFunction,
} from "./../../Redux/counter/counterActions";
const Home = (props) => {
  let { counter, generalizeFunction } = props;
  const [counterVal, setCounterVal] = useState(0);
  return (
    <div className="home-component">
      <div className="text-center">
        <h1 className="text-white">Counter</h1>
        <hr className="my-1" />
        <div
          onSubmit={(e) => generalizeFunction(e.target.value)}
          className="form-group text-white">
          <label className="m-0" htmlFor="usr">
            Add Number
          </label>
          <hr className="bg-light mb-2 mt-1" />
          <input
            onChange={(e) => setCounterVal(+e.target.value)}
            type="number"
            class="form-control"
            id="usr"
          />
          <Button
            onHit={() => generalizeFunction(counterVal)}
            className="mt-2 w-100"
            type="success">
            Add
          </Button>
          <Button
            onHit={() => generalizeFunction(-counterVal)}
            className="mt-2 w-100"
            type="success">
            Del
          </Button>
        </div>
        <div className="btns d-flex">
          <Button
            onHit={() => generalizeFunction(-counter)}
            className="mx-2"
            type="danger">
            Reset
          </Button>
          <Button
            onHit={() => {
              counter > 0 && generalizeFunction(-1);
            }}
            className="mx-2"
            type="danger">
            Minus
          </Button>
          <Button
            onHit={() => generalizeFunction(1)}
            className="mx-2"
            type="success">
            Plus
          </Button>
        </div>
        <h1 className="mt-3 text-white">{counter}</h1>
      </div>
    </div>
  );
};

let mapStateToProp = (state) => {
  return {
    counter: state.counter,
  };
};

let action = {
  generalizeFunction,
};

export default connect(mapStateToProp, action)(Home);
