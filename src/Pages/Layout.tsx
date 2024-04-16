import { Outlet } from "react-router-dom"
import { Menu } from "../components/Menu"

export const Layout = () => {

  return (
    <div className="h-screen w-screen flex flex-row">
          <Menu />
          <Outlet/>
    </div>

  )
}
