"use client";
import { Collapse } from "antd";
import { useState } from "react";
const { Panel } = Collapse;

const CategoryAccordion = () => {
  const [activeKey, setActiveKey] = useState(["1"]);

  const handlePanelChange = (key: any) => {
    setActiveKey(key);
  };

  return (
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
  );
};

export default CategoryAccordion;

function onSelectCategory(category: any) {
  throw new Error("Function not implemented.");
}
