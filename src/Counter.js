import React from 'react';
import { connect } from 'react-redux';

const Counter = (props) => {
  return(
    <div>
      <h1>Hello</h1>
      <button onClick={props.onIncrementClick}>Count Up</button>
      <h2>Count: {props.count}</h2>
      <button onClick={props.onDecrementClick}>Count Down</button>
      <br />
      <br />
      <em>Simple App with Redux #2 - Redux for Beginners from Eric Sowell - Check out his YouTube Channel
      </em>
    </div>
  );
}

function mapStateToProps(state) {
  console.log('From Map State');
  return {
    count: state.count
  };
}

function mapDispatchToProps(dispatch) {
  console.log('From Map Dispatch');
  return {

    onIncrementClick: () => {
      const action = {
        type: 'INCREMENT'
      };
      dispatch(action);
    },

    onDecrementClick: () => {
      const action = {
        type: 'DECREMENT'
      };
      dispatch(action);
    },

  };
}


export default connect(mapStateToProps, mapDispatchToProps)(Counter);
