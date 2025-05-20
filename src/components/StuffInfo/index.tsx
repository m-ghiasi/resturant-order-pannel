import { IoMdMore } from "react-icons/io";
import maya2 from "../../assets/maya2.webp"
export default function StuffInfo(){
    return(
        <div className="flex items-center justify-center gap-2 border-t-1 pt-4 border-gray-500">
            <img className="w-11  rounded-full" src={maya2} alt="stuff profile image" />
            <span className="font-medium">Annalisse Wallis</span>
            <span >
                <IoMdMore  />


            </span>
        </div>
    )
}