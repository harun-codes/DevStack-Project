import { use } from "react";
import type { TechType } from "../../types/types";
import AvailableTechnology from "./AvailableTechnology";


interface TechProps {
    TechPromise: Promise<TechType[]>
}


const Technology = ({TechPromise}: TechProps) => {
    
    const Tech = use(TechPromise);

    

    return (
        <>
        <div className="container mx-auto">
        <div >
            <h2 className="text-3xl font-extrabold ">Explore the <span className="text-[#ec4899]">Technologies</span></h2>
            <p className="mt-2 text-sm max-w-lg text-slate-500">Pick one technology per category to build your ideal stack.</p>
        </div>
        
        <AvailableTechnology Tech={Tech}></AvailableTechnology>
        </div>
            
            
            
        </>
    );
};

export default Technology;