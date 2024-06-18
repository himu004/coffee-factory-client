// import bgImage from '../assets/images/more/1.png';
import bgImage1 from "../assets/images/more/4.png";
import bgImage from "../assets/images/more/5.png";
import btnIcon from "../assets/images/icons/4.png";
import { Link, useLoaderData } from "react-router-dom";
import CoffeeCard from "./CoffeeCard";
import { useState } from "react";

const CoffeeSection = () => {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);

  return (
    <div className="py-10 relative">
      {/* Background images */}
      <div className="hidden md:block absolute top-0 left-0 w-1/4 h-full bg-no-repeat bg-contain">
        <img className="mt-20" src={bgImage1} alt="" />
      </div>
      <div className="hidden md:block absolute bottom-0 right-0 w-1/4 h-full bg-no-repeat bg-contain">
        <img src={bgImage} alt="" />
      </div>
      <div className="block md:hidden absolute top-10 left-0 w-1/4 h-full bg-no-repeat bg-contain">
        <img src={bgImage1} alt="" />
      </div>

      <div className="w-4/5 mx-auto">
        <div className="relative z-10 text-center mb-10">
          <p>--- Sip & Savor ---</p>
          <h1 className="text-3xl font-bold text-[#331A15]">
            Our Popular Products
          </h1>
          <Link to="/addCoffee">
            <button className="relative z-1 mt-4 px-8 py-2 bg-[#E3B577] border-2 rounded-md border-[#1B1A1A] text-white transition hover:bg-transparent hover:text-[#331A15] flex justify-center items-center mx-auto">
              Add Coffee
              <img
                className="absolute right-0 mr-2 z-2 w-[20px] h-[20px] transition-all hover:rotate-45"
                src={btnIcon}
                alt=""
              />
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Here Will Go Added Coffee showcase */}
          {coffees.map((coffee) => (
            <CoffeeCard 
            key={coffee._id} 
            coffee={coffee}>
            coffees={coffees}
            setCoffees={setCoffees}  
            </CoffeeCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoffeeSection;
