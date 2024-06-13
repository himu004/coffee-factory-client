// import bgImage from '../assets/images/more/1.png';
import bgImage1 from "../assets/images/more/4.png";
import bgImage from "../assets/images/more/5.png";
import btnIcon from "../assets/images/icons/4.png";
import { Link } from 'react-router-dom';

const CoffeeSection = () => {
  const products = [
    {
      name: "Americano Coffee",
      chef: "Mr. Matin Paul",
      price: "890 Taka",
      image: "path_to_americano_image",
    },
    {
      name: "Black Coffee",
      chef: "Mr. Nibra Sweden",
      price: "890 Taka",
      image: "path_to_black_image",
    },
    {
      name: "Espresso Coffee",
      chef: "Mrs. Morisha",
      price: "890 Taka",
      image: "path_to_espresso_image",
    },
    {
      name: "Cappuccino Coffee",
      chef: "Mr. Moruti",
      price: "890 Taka",
      image: "path_to_cappuccino_image",
    },
    {
      name: "Macchiato",
      chef: "Mr. Moruti",
      price: "890 Taka",
      image: "path_to_macchiato_image",
    },
    {
      name: "Decaf Coffee",
      chef: "Mr. Moruti",
      price: "890 Taka",
      image: "path_to_decaf_image",
    },
  ];

  return (
    <div className="py-10 px-5 relative">
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
            <button 
          className="relative z-1 mt-4 px-8 py-2 bg-[#E3B577] border-2 rounded-md border-[#1B1A1A] text-white transition hover:bg-transparent hover:text-[#331A15] flex justify-center items-center mx-auto">
            Add Coffee
            <img
              className="absolute right-0 mr-2 z-2 w-[20px] h-[20px] transition-all hover:w-[80px] hover:h-[80px] hover:-translate-x-18"
              src={btnIcon}
              alt=""
            />
          </button>
          </Link>
          
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Here Will Go Added Coffee showcase */}
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg relative"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h2 className="text-xl font-bold">{product.name}</h2>
              <p className="text-gray-700">Chef: {product.chef}</p>
              <p className="text-gray-900 font-bold">{product.price}</p>
              <div className="absolute top-4 right-4 flex space-x-2">
                <button className="bg-gray-200 p-2 rounded-full">👁</button>
                <button className="bg-gray-200 p-2 rounded-full">✏️</button>
                <button className="bg-red-500 text-white p-2 rounded-full">
                  🗑
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoffeeSection;
