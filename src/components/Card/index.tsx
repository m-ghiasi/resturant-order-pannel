import { MdVisibility } from "react-icons/md";
import { IoIosSettings } from "react-icons/io";
import vegan from "../../../src/assets/vegan.png";
import Button from "../Button";

type CardProps = {
  id: number;
  name: string;
  price: number;
  weight: string;
  ingredients: string[];
  image: string;
  onView: () => void;
  onEdit: () => void;
  isVegan: boolean;
};

export default function Card(props: CardProps) {
  const { name, price, weight, ingredients, image, onView, onEdit, isVegan } =
    props;

  return (
    <div className="bg-white rounded-2xl w-[22%] min-w-[180px] flex flex-col items-center gap-1 p-3 ">
      <div className="relative">
        <img src={image} alt={name} className="w-25 rounded-full" />
        {!isVegan ? <img className="w-10 absolute top-0 right-[-50px]" src={vegan} alt="" /> : null}
      </div>
      <h3 className="font-bold text-xl my-1">{name}</h3>
      <span className="text-gray-700">{weight}<span>g</span> </span>
      <span className="font-medium py-2 w-[70%] text-center ">
        {ingredients.join(", ")}
      </span>
      <div className="w-full  flex gap-2 justify-evenly items-center">
        <span className="font-bold text-xl">${price}</span>

        <div className="flex gap-3 my-2">
          <Button onClick={onView} className="p-3 rounded-xl border border-gray-400 ">
            <MdVisibility  size={23} />
          </Button>
          <Button onClick={onEdit} className="p-3 rounded-xl border border-gray-400  ">
            <IoIosSettings  size={23} />
          </Button>
        </div>
      </div>
    </div>
  );
}
