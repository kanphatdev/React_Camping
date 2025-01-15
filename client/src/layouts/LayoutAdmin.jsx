import Navbar from "@/components/navbar/Navbar"
import { Outlet } from "react-router"

const LayoutAdmin = () => {
  return (
    <div>
      <Navbar/>
        <Outlet/>
    </div>
  )
}
export default LayoutAdmin