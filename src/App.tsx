import React from "react";
import GlobalStyles from "./styles";
import HomePage from "./Components/HomePage/HomePage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

/**
 * The top-level component that wraps the rest of the app.
 * Renders the global styles, toast container, and home page.
 *
 * @returns {ReactElement} A React element representing the app.
 */
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
