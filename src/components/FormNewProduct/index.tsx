type FormType = {
  className: string;
  onClose:()=>void
};
import { IoMdClose } from "react-icons/io";

export default function FormNewProduct(props: FormType) {
  const { className, onClose } = props;
  const handelClose = (e: React.MouseEvent<HTMLElement>) => {
    onClose()
  };
  return (
    <div
      className={`absolute w-[25%] h-screen right-0 top-0 bottom-0 z-10 bg-white p-5 ${className}`}
    >
      <div className="flex items-center justify-between ">
        <p>Add New Product</p>
        <span onClick={handelClose}>
          <IoMdClose color="gray" size={25} />
        </span>
      </div>
    </div>
  );
}
