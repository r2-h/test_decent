import React from "react"
import ReactDOM from "react-dom/client"
import App from "./components/App.tsx"
import "./index.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import CountryDetails from "./components/CountryDetails.tsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/:countryName",
    element: <CountryDetails />,
  },
])

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div className="scroll-offset mx-auto min-h-screen w-screen max-w-screen-xl bg-neutral-200/70 p-4 sm:p-8 md:p-12 lg:p-16">
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
)
