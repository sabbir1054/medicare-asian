"use client";
import { Collapse } from "antd";
import { useState } from "react";
import { FcBookmark } from "react-icons/fc";
const { Panel } = Collapse;

const Sidebar = ({ isOpen }: any) => {
  const [activeKey, setActiveKey] = useState(["1"]);

  const handlePanelChange = (key: any) => {
    setActiveKey(key);
  };

  return (
    <aside
      className={`fixed top-17 left-0 h-full  text-white transition-all ${
        isOpen ? "w-64" : "w-0"
      } overflow-hidden z-40`}
    >
      <div className="p-4">
        <h2 className="text-lg font-bold mb-4 text-black flex  align-center">
          <FcBookmark className="text-2xl" />
          Favourites
        </h2>
        <Collapse activeKey={activeKey} onChange={handlePanelChange}>
          <Panel header="Common Conditions" key="1">
            <ul>
              <li className="cursor-pointer">Blood Pressure</li>
              <li className="cursor-pointer">Heart Disease</li>
            </ul>
          </Panel>
          <Panel header="Blood Pressure & Heart" key="2">
            <ul>
              <li className="cursor-pointer">Blood Pressure</li>
              <li className="cursor-pointer">Heart Disease</li>
            </ul>
          </Panel>
        </Collapse>
      </div>
    </aside>
  );
};

export default Sidebar;
