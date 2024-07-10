import { Input } from "antd";
const { Search } = Input;

const SearchBar = () => {
  return (
    <>
      <Search
        placeholder="Search your medicine / ঔষধ  ও পণ্য সার্চ করুন"
        enterButton
        className="flex-grow mx-4 placeholder:text-red-300"
      />
    </>
  );
};

export default SearchBar;

/* 
 <div className="flex items-center mx-4">
        <input
          type="text"
          placeholder="Search your medicine / ঔষধ  ও পণ্য সার্চ করুন"
          className="flex-grow h-10 px-4 text-sm rounded-l-lg border-gray-300 focus:border-primary focus:ring focus:ring-primary"
        />
        <button className="h-10 px-4 bg-primary text-white rounded-lg bg-fuchsia-400">
          Search
        </button>
      </div>


*/
