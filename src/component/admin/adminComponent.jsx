import React from "react";
import { Outlet } from "react-router-dom";
import SiderBarComponent from "./siderBarComponent";
import { Layout } from "antd";

const AdminComponent = () => {
  return (
    <Layout className="max-w-full mt-5 px-[10px] sm:px-[20px] md:px-[50px] lg:px-[100px] bg-white">
      <SiderBarComponent className="hidden" />
      <Layout className="bg-white pl-3">
        <Outlet /> 
      </Layout>
    </Layout>
  );
};

export default AdminComponent;
