import { MdVisibility } from "react-icons/md";
import { IoIosSettings } from "react-icons/io";
import vegan from "../../../src/assets/vegan.png";

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
    <div className="bg-white rounded-2xl w-[22%] flex flex-col items-center gap-1 ">
      <div className="relative">
        <img src={image} alt={name} className="w-20 rounded-full" />
        {!isVegan ? <img className="w-10 absolute top-0 right-[-50px]" src={vegan} alt="" /> : null}
      </div>
      <h3 className="font-bold">{name}</h3>
      <span className="text-gray-700">{weight}</span>
      <span className="font-medium text-gray-700 py-2 w-[70%] text-center ">
        {ingredients.join(", ")}
      </span>
      <div className="w-full  flex gap-2 justify-evenly">
        <span className="text-gray-500">${price}</span>

        <div className="flex gap-5">
          <button onClick={onView}>
            <MdVisibility color="gray" size={22} />
          </button>
          <button onClick={onEdit}>
            <IoIosSettings color="gray" size={22} />
          </button>
        </div>
      </div>
    </div>
  );
}
