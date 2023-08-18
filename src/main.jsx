import React from "react";
import ReactDOM from "react-dom/client";
import Form from "./Form.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Result from "./Result.jsx";
import { FormProvider } from "./componants/FormContext.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Form />,
  },
  {
    path: "/results",
    element: <Result />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FormProvider>
      <RouterProvider router={router} />
    </FormProvider>
  </React.StrictMode>
);
