"use client";
import DashboardNavigationBar from "@/components/NavigationBar/DasboardNavigationBar";
import DashboardSideBar from "@/components/SadeBar/DashboardSidebar";
import FooterSection from "@/components/ui/Footer";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Row, Space, Spin } from "antd";
import { Content, Footer } from "antd/es/layout/layout";
import React, { useState } from "react";

const items = [
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  UserOutlined,
].map((icon, index) => ({
  key: String(index + 1),
  icon: React.createElement(icon),
  label: `nav ${index + 1}`,
}));

const DasboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const [isLoading, setIsLoading] = useState<boolean>(true);
  if (!isLoading) {
    return (
      <Row
        justify="center"
        align="middle"
        style={{
          height: "100vh",
        }}
      >
        <Space>
          <Spin tip="Loading" size="large"></Spin>
        </Space>
      </Row>
    );
  }

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <DashboardNavigationBar />
      <Layout>
        <DashboardSideBar />
        <Layout>
          <Content style={{ margin: "24px 16px 0" }}>
            <div
              style={{
                padding: 24,
                minHeight: 360,
                background: "#fff",
                borderRadius: "borderRadiusLG",
              }}
            >
              {children}
            </div>
          </Content>
        </Layout>
      </Layout>
      <Footer className="!p-0">
        <FooterSection />
      </Footer>
    </Layout>
  );
};

export default DasboardLayout;
