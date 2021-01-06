import React from "react";
import { render } from "react-dom";
import ScrollBox from "./ScrollBox";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => <ScrollBox />;

render(<App />, document.getElementById("root"));
