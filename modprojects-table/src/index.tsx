/* @refresh reload */
import { render } from "solid-js/web";
import { Component } from "solid-js";
import Home from "./pages/home";
import "./index.css";

const App: Component = () => {
  return (
    <>
      <Home />
    </>
  );
};

const root = document.getElementById("root");

render(() => <App />, root!);
