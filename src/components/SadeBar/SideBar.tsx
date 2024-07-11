"use client";
import { Collapse } from "antd";
import { FcBookmark } from "react-icons/fc";
import CategoryAccordion from "../ui/CategoryAccordion";
const { Panel } = Collapse;

const Sidebar = ({ isOpen }: any) => {
  return (
    <aside
      className={`fixed top-17 left-0 h-full  text-white transition-all ${
        isOpen ? "w-96" : "w-0"
      } overflow-hidden z-40`}
      style={{
        borderRight: "2px solid #424242",
        transition: "all 0.3s easi-in",
      }}
    >
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4 text-black flex  items-center">
          <FcBookmark />
          Favourites
        </h2>

        <CategoryAccordion />
      </div>
    </aside>
  );
};

export default Sidebar;
