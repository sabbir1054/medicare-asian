"use client";
import NavigationBar from "@/components/NavigationBar/NavigationBar";
import Sidebar from "@/components/SadeBar/SideBar";

import React, { useState } from "react";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <NavigationBar toggleSidebar={toggleSidebar} />
        <div className="flex flex-grow">
          <Sidebar isOpen={isSidebarOpen} />
          <main
            className={`flex-grow transition-all ${
              isSidebarOpen ? "ml-64" : "ml-0"
            } p-4`}
          >
            {children}
          </main>
        </div>
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default CommonLayout;
