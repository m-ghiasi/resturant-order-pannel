import Button from "../Button";
import { FaPlus } from "react-icons/fa";


export default function Addproduct() {
  
  return (
    <div className="  flex bg-gray-200 rounded-2xl w-[30%] border-2 border-gray-400  justify-center items-center">
      <div>
        <Button className="w-30 flex flex-col items-center justify-center">
          <FaPlus color="gray"/>
          
          <span className="font-medium">Add New Product</span>
        </Button>
      </div>
      
    </div>
  );
}
