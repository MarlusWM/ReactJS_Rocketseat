import { BrowserRouter } from "react-router-dom"
import AppRoutes from "./App.routes.jsx"


const index = () => {
  return (
    <BrowserRouter>
        <AppRoutes/>
    </BrowserRouter>
  )
}

export default index