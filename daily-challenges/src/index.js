import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ApolloProvider } from "@apollo/client";
import client from "./apollo/ApolloClient"; // Import Apollo client
import App from "./App";
import store from "./components/redux/store"; // Import Redux store

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}> {/* Wrap your App with Redux Provider */}
      <App />
    </Provider>
  </ApolloProvider>,
  document.getElementById("root")
);