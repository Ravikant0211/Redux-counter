// import { useSelector, useDispatch } from 'react-redux';

// const Counter = () => {
//   const dispatch = useDispatch();

//   const showCounter = useSelector(state => state.showCounter);
//   const counter = useSelector(state => state.counter);

//   const incrementHandler = () => {
//     dispatch({ type: 'increment' });
//   }

//   const decrementHandler = () => {
//     dispatch({ type: 'decrement' });
//   }

//   const increaseHandler = () => {
//     dispatch({ type: 'increase', amount: 5 });
//   }

//   const toggleHandler = () => {
//     dispatch({ type: 'toggle' });
//   }

//   return <main>
//     <h1>Redux Counter</h1>
//     {showCounter && <h2>{counter}</h2>}
//     <button onClick={incrementHandler}>Increament</button>
//     <button onClick={decrementHandler}>Decrement</button>
//     <button onClick={increaseHandler}>Increase By 5</button>
//     <button onClick={toggleHandler}>Toggle Counter</button>
//   </main>
// };

// export default Counter;

// =========== xxxxxxxxxxxxxxxxx =================
// REDUX COUNTER WITH CLASS COMPONENTS\
import { Component } from "react";
import { connect } from "react-redux";

class Counter extends Component {
  incrementHandler() {
    this.props.increment();
  }

  decrementHandler() {
    this.props.decrement();
  }

  increaseHandler() {
    this.props.increase();
  }

  toggleHandler() {
    this.props.toggle();
  }

  render() {
    return (
      <main>
        <h1>Redux Counter</h1>
        {this.props.showCounter && <h2>{this.props.counter}</h2>}
        <button onClick={this.incrementHandler.bind(this)}>Increament</button>
        <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
        <button onClick={this.increaseHandler.bind(this)}>
          Increase By 10
        </button>
        <button onClick={this.toggleHandler.bind(this)}>Toggle Counter</button>
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
    showCounter: state.showCounter
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({ type: "increment" }),
    decrement: () => dispatch({ type: "decrement" }),
    increase: () => dispatch({ type: "increase", amount: 10 }),
    toggle: () => dispatch({ type: "toggle" })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
