type CardProps = {
  name: string;
  price: number;
  weight: string;
  ingredients: string[];
  image: string;
};

import Button from "../Button";

export default function Card(props: CardProps) {
  const { name, price, weight, image, ingredients } = props;
  return (
    <div className=" bg-white rounded-2xl w-[30%]">
      <img src={image} alt={name} />
      <h3 className="font-bold">{name}</h3>
      <span className="text-gray-700 ">{weight}</span>

      <span className={` font-medium text-gray-700`}>
        {ingredients.join(", ")}
      </span>

      <div>
        <span>{price}</span>
        <Button></Button>
        <Button></Button>
      </div>
    </div>
  );
}
