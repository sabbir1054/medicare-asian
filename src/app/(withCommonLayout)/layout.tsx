"use client";
import NavigationBar from "@/components/NavigationBar/NavigationBar";
import Sidebar from "@/components/SadeBar/SideBar";
import FooterSection from "@/components/ui/Footer";

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
            className={`flex-grow transition-all min-h-screen ${
              isSidebarOpen ? "ml-96" : "ml-0"
            } p-4`}
          >
            {children}
          </main>
        </div>
        <FooterSection />
      </div>
    </>
  );
};

export default CommonLayout;
