import React from "react";
import Router from "./src/router/Router";
import Toast from "react-native-toast-message";

export default function App() {
  return (
    <>
      <Router />
      <Toast />
    </>
  );
}
