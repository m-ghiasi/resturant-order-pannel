import { IoMdMore } from "react-icons/io";
import maya2 from "../../assets/maya2.webp"
export default function StuffInfo(){
    return(
        <div className="flex items-center justify-center gap-2 border-t-1 pt-4 border-gray-500">
            <div className="relative">
                <img className="w-11  rounded-full" src={maya2} alt="stuff profile image" />
                <span className=" bg-gradient-to-r from-[#39d7ad] to-[#75db75] absolute rounded-2xl w-2 h-2 mt-2 top-[-10px] right-0">
        
      </span>
            </div>

            <span className="font-medium">Annalisse Wallis</span>
            <span >
                <IoMdMore  />


            </span>
        </div>
    )
}