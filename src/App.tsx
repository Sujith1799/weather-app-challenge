import React from "react";
import "./App.css";
import GlobalStyles from "./styles";
import HomePage from "./Components/HomePage/HomePage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <GlobalStyles />
      <ToastContainer />
      <HomePage />
    </>
  );
}
export default App;
