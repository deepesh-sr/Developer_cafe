import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/Header";
import Body from "./components/Body";

const AppLayout = () =>{
  return (
    <>
    <HeaderComponent/>
    <Body/>
    </>
  )
}
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
