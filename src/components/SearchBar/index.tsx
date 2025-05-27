import { FaSearch } from "react-icons/fa";

type PropType = {
  searchName: string;
  setSearchName: (value: string) => void;
};
export default function Search(props: PropType) {
  const { searchName, setSearchName } = props;

  return (
    <div className="flex  border-b border-gray-400 w-[60%] h-12 items-center px-3 mt-4">
      <FaSearch color="gray" size={25} />
      <input
        type="text"
        placeholder="Search"
        value={searchName}
        className="focus:outline-none w-full text-right  "
        onChange={(e) => setSearchName(e.target.value)}
      ></input>
    </div>
  );
}
