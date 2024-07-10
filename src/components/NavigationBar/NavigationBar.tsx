import { ShoppingCartOutlined } from "@ant-design/icons";
import { Badge, Button, Input } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import SearchBar from "../ui/SearchBar";
const { Search } = Input;

const NavigationBar = ({ toggleSidebar }: any) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      style={{
        transition: "top 0.3s ease-in-out",
        borderBottom: "5px solid var(--primaryColor)",
      }}
      className={`bg-white shadow z-50 ${
        isScrolled ? "fixed top-0 left-0 right-0" : "relative"
      }`}
    >
      <div className="container:md mx-auto p-4 flex flex-row items-center">
        <div className="flex items-center flex-1">
          <Button
            onClick={() => toggleSidebar()}
            type="primary"
            className="mr-2 md:mr-5" // Reduced margin for smaller screens
            style={{ backgroundColor: "var(--primaryColor)", padding: "10px" }}
          >
            <HiMiniBars3BottomLeft className="text-xl cursor-pointer text-white" />
          </Button>
          <Image src="/logo.png" alt="logo" width={200} height={40} />
        </div>

        <div className="flex-1">
          <SearchBar />
        </div>

        <div className="flex-1 justify-end">
          <div className="flex items-center justify-between">
            <span className="hidden md:inline-block mx-10 md:mr-4">
              Sirajganj
            </span>
            <Badge count={4} className="mr-2 md:mr-4">
              <ShoppingCartOutlined className="text-xl cursor-pointer" />
            </Badge>
            <div
              style={{ backgroundColor: "var(--primaryColor)" }}
              className="p-3 rounded-xl font-semibold mx-4"
            >
              <span className="text-white text-md">
                <Link href={"/login"}>Login</Link>
              </span>
              <span className="text-white text-md mx-2">/</span>
              <span className="text-white text-md">
                <Link href={"/register"}>Sign up</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavigationBar;
