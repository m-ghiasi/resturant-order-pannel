
import { FaSearch } from "react-icons/fa";
import { useProductStore } from "../../store/productStore";

export default function Search() {
 const searchName = useProductStore((state) => state.searchName);
  const setSearchName = useProductStore((state) => state.setSearchName);


 

  return (
    <div className="flex  border-b border-gray-400 w-[60%] h-12 items-center px-3 mt-4">
      <FaSearch color="gray"size={25} />
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
