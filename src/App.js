import './App.css';
import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Toasts from "./components/Toasts";
import { addToast } from "./actions";

class App extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { addToast } = this.props.actions;
    setTimeout(() => {
      addToast({ text: "My Alert Message!" });
    }, 120000)

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <main>
            <section>
              <h1>Alert react redux app</h1>
              <p>Click the button below to dispatch an alert message after 2 minutes.</p>
              <button onClick={this.handleClick}>Dispatch</button>
            </section>
            <Toasts />
          </main>
        </header>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ addToast }, dispatch)
});

export default connect(null, mapDispatchToProps)(App);
