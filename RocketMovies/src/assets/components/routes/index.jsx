import { BrowserRouter } from "react-router-dom"
import AppRoutes from "./App.routes"


const index = () => {
  return (
    <BrowserRouter>
        <AppRoutes/>
    </BrowserRouter>
  )
}

export default index