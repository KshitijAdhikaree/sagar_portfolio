import React, { useEffect } from "react";
import Header from "../../components/Header";
import { Tabs } from "antd";
import AdminHome from "./AdminHome";
import AdminAbout from "./AdminAbout";
import { useSelector } from "react-redux";
import AdminDocuments from "./AdminDocuments";
import AdminContact from "./AdminContact";
import Footer from "../../components/Footer";

const { TabPane } = Tabs;
function Admin() {
  const { portfolioData } = useSelector((state) => state.root);

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      window.location.href = "/admin-login";
    }
  }, []);

  return (
    <div>
      
      <div className="flex gap-10 items-center px-5 py-3 justify-between bg-primary">
        <div className="flex gap-10 items-center">
          <h1 className="text-3xl text-white bg-primary">Portfolio Admin</h1>
          <div className="w-60 h-[1px] bg-gray-500"></div>
        </div>
        <h1
          className="underline text-white bg-primary text-xl cursor-pointer"
          onClick={() => {
            localStorage.removeItem("token");
            window.location.href = "/admin-login";
          }}
        >
          Logout
        </h1>
      </div>
      {portfolioData && (
        <div className="px-5 pb-10 text-white">
          <Header />
          <Tabs defaultActiveKey="1">
            <TabPane tab="Home" key="1">
              <AdminHome />
            </TabPane>
            <TabPane tab="About" key="2">
              <AdminAbout />
            </TabPane>
            <TabPane tab="Documents" key="3">
              <AdminDocuments />
            </TabPane>
            <TabPane tab="Contact" key="4">
              <AdminContact />
            </TabPane>
          </Tabs>
          <Footer/>
        </div>
      )}
    </div>
  );
}

export default Admin;
