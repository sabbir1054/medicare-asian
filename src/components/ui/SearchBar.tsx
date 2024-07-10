import { Input } from "antd";
const { Search } = Input;

const SearchBar = () => {
  return (
    <>
      <Search
        placeholder="Search your medicine / ঔষধ  ও পণ্য সার্চ করুন"
        enterButton
        className="flex-grow mx-4"
      />
    </>
  );
};

export default SearchBar;
