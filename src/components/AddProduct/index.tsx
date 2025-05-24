import Button from "../Button";
import { FaPlus } from "react-icons/fa";
type PropType={
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Addproduct(prop:PropType) {
  const {onClick}=prop
  return (
    <div className="  flex bg-gray-200 rounded-2xl w-[22%] justify-center flex-col items-center gap-1 p-3">
      <div>
        <Button onClick={onClick} className="w-30 flex flex-col items-center justify-center">
          <FaPlus color="gray"/>
          
          <span className="font-medium">Add New Product</span>
        </Button>
      </div>
      
    </div>
  );
}
