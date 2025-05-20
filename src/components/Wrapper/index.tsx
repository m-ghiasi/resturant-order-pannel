import type { ReactNode } from "react";


type WrapperProps= {
  children: ReactNode;
}

export default function Wrapper({children}: WrapperProps){
    return(
        <div className="w-[80%] overflow-x-hidden flex  flex-wrap gap-10 ">
                {children}
        </div>
    )
}