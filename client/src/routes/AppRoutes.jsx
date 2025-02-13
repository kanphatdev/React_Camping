import Layout from "@/layouts/Layout";
import LayoutAdmin from "@/layouts/LayoutAdmin";
import About from "@/pages/About";
import Camping from "@/pages/admin/Camping";
import Dashboard from "@/pages/admin/Dashboard";
import Manage from "@/pages/admin/Manage";
import Notfound from "@/pages/error/Notfound";
import Home from "@/pages/Home";
import Profile from "@/pages/user/Profile";
import { BrowserRouter, Routes, Route } from "react-router";
const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* public route */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>

        {/* private Admin route */}
        <Route path="admin" element={<LayoutAdmin />}>
          <Route index element={<Dashboard />} />
          <Route path="manage/:id" element={<Manage />} />
          <Route path="camping" element={<Camping />} />
        </Route>

        {/* 404 route */}
        <Route path="*" element={<Notfound />} />

        {/* private User route */}
        <Route path="user" element={<Layout />}>
        <Route path="profile" element={<Profile />} />
        
        
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default AppRoutes;
