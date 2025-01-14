import Layout from "@/layouts/Layout";
import LayoutAdmin from "@/layouts/LayoutAdmin";
import About from "@/pages/About";
import Dashboard from "@/pages/admin/Dashboard";
import Manage from "@/pages/admin/Manage";
import Notfound from "@/pages/error/Notfound";
import Home from "@/pages/Home";
import { BrowserRouter, Routes, Route, Outlet } from "react-router";
const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* public route */}
        <Route
          element={
         <Layout/>
          }
        >
          <Route path="/" element={<Home/>} />
          <Route path="about" element={<About/>} />
        </Route>

        {/* private route */}
        <Route
          path="admin"
          element={
          <LayoutAdmin/>
          }
        >
          
          <Route index element={<Dashboard/>} />
          <Route path="manage/:id" element={<Manage/>} />
        </Route>

        {/* 404 route */}
        <Route path="*" element={<Notfound/>} />
      </Routes>
    </BrowserRouter>
  );
};
export default AppRoutes;
