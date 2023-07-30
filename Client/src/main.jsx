import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./../node_modules/bootstrap/dist/js/bootstrap.bundle.js";

// locatiozation
import "./i18n";
import { UseContextProvider } from "./contextAPI/context.jsx";
//Routes
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router.jsx";

//REDUX
import { Provider } from "react-redux";
import { store } from "./store/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UseContextProvider>
      <Provider store={store}>
        <RouterProvider router={router}>
          <App />
        </RouterProvider>
      </Provider>
    </UseContextProvider>
  </React.StrictMode>
);
