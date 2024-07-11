import { ShoppingCartOutlined } from "@ant-design/icons";
import { Badge, Input } from "antd";
import Image from "next/image";
import Link from "next/link";
import { TbMapPin } from "react-icons/tb";
import SearchBar from "../ui/SearchBar";
const { Search } = Input;

const DashboardNavigationBar = () => {
  return (
    <header
      style={{
        transition: "top 0.3s ease-in-out",
        borderBottom: "5px solid var(--primaryColor)",
      }}
      className={`bg-white shadow  `}
    >
      <div className="container:md mx-auto p-4 flex flex-row items-center">
        <div className="flex items-center flex-1">
          <Image src="/logo.png" alt="logo" width={200} height={40} />
        </div>

        <div className="flex-1">
          <SearchBar />
        </div>

        <div className="flex-1 justify-end">
          <div className="flex items-center justify-between">
            <span className="text-xl flex mx-10 md:mr-4  items-center">
              <TbMapPin style={{ color: "var(--secondaryColor)" }} /> Sirajganj
            </span>
            <Badge
              count={4}
              className="mr-2 md:mr-4"
              style={{ backgroundColor: "var(--secondaryColor)" }}
            >
              <ShoppingCartOutlined
                className="text-white text-2xl p-2 rounded-full cursor-pointer"
                style={{
                  backgroundColor: "var(--primaryColor)",
                  color: "white",
                }}
              />
            </Badge>
            <div
              style={{ backgroundColor: "var(--primaryColor)" }}
              className="p-3 rounded-xl font-semibold mx-4"
            >
              <span className="text-white text-md">
                <Link href={"/login"} className="text-white">
                  Login
                </Link>
              </span>
              <span className="text-white text-md mx-2">/</span>
              <span className="text-white text-md">
                <Link href={"/register"} className="text-white">
                  Sign up
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardNavigationBar;
