import React, { useEffect } from "react";
import LoginComponent from "../components/AuthComponents/Login";

function Login() {
  useEffect(() => {
    document.title = "Mostaql Clone | Login";
  }, []);
  return <LoginComponent />;
}

export default Login;
