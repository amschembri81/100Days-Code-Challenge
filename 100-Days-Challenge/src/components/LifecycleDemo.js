import React, { Component } from 'react';

class LifecycleDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
    console.log('Constructor: Component is being created');
  }

  componentDidMount() {
    console.log('ComponentDidMount: Component has been mounted');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('ComponentDidUpdate: Component has been updated');
  }

  componentWillUnmount() {
    console.log('ComponentWillUnmount: Component is being unmounted');
  }

  incrementCounter = () => {
    this.setState((prevState) => ({ counter: prevState.counter + 1 }));
  };

  render() {
    console.log('Render: Component is being rendered');
    return (
      <div className="lifecycle">
        <h2>Lifecycle Demo Component</h2>
        <p>Counter: {this.state.counter}</p>
        <button onClick={this.incrementCounter} className="button">
          Increment Counter
        </button>
      </div>
    );
  }
}

export default LifecycleDemo;