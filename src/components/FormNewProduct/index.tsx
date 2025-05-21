type FormType = {
  className: string;
  onClose: () => void;
};
import { IoMdClose } from "react-icons/io";
import TextField from "../TextField";
import Button from "../Button";
import { FaPlus } from "react-icons/fa";
import { PiHamburgerFill } from "react-icons/pi";

export default function FormNewProduct(props: FormType) {
  const handelName = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const { className, onClose } = props;
  const handelClose = (e: React.MouseEvent<HTMLElement>) => {
    onClose();
  };

  const handelCheck =(e: React.ChangeEvent<HTMLElement>)=>{
    console.log("ggg")
  }
  return (
    <div
      className={`absolute w-[35%] h-screen right-0 top-0 bottom-0 z-10 bg-white p-5 ${className}`}
    >
      <div className="flex items-center justify-between ">
        <p>Add New Product</p>
        <span onClick={handelClose}>
          <IoMdClose color="gray" size={25} />
        </span>
      </div>

    <form className=" flex flex-col gap-4">
        <TextField
        className="flex flex-col"
        label="Name of the product"
        type="text"
        onChange={handelName}
        id="name"
        key="name"
      />

      {/* ingredient  */}
      <p>ingredient</p>

      <TextField type="checkbox" label="Suitable for vegans" className="flex justify-center items-center" onChange={handelCheck}/>
     <div className="flex">
       <TextField type="text" label="Weight in grams" onChange={handelName}/>
        <TextField type="text" label="Calories" onChange={handelName}/>
     </div>

      <TextField type="text" label="Price of the product" onChange={handelName} className="flex flex-col"/>
      <div>
        <p>Upload photo</p>
        <Button/>
        <p>upload loading</p>
      </div>
      <Button className="w-full bg-gray-800 text-white p-5 rounded-2xl flex items-center justify-center gap-2" label="Add product to the menue" >

      <FaPlus color="white" />
      <PiHamburgerFill color="white" />
      </Button>


    </form>
    </div>
  );
}
