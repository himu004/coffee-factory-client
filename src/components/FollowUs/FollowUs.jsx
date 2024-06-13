import cup1 from "../../assets/images/cups/Rectangle 9.png";
import cup2 from "../../assets/images/cups/Rectangle 10.png";
import cup3 from "../../assets/images/cups/Rectangle 11.png";
import cup4 from "../../assets/images/cups/Rectangle 12.png";
import cup5 from "../../assets/images/cups/Rectangle 13.png";
import cup6 from "../../assets/images/cups/Rectangle 14.png";
import cup7 from "../../assets/images/cups/Rectangle 15.png";
import cup8 from "../../assets/images/cups/Rectangle 16.png";

{
  /* 
    <div className="relative overflow-hidden rounded-md">
              <img src={product.image} alt={product.name} className="w-full h-40 object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-105" />
            <div className="absolute inset-0 bg-white opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-30"></div>
    </div> 
*/
}

const FollowUs = () => {
  return (
    <div className="w-4/5 mx-auto">
      <div className="space-y-2">
        <p className="text-center text-shadow-lg">Follow Us Now</p>
        <h2 className="text-center text-3xl text-[#331A15] text-shadow-lg">
          Follow on Instagram
        </h2>
        <div className="grid md:grid-cols-4 gap-5">

          <div className="relative overflow-hidden rounded-md ">
            <img
                className="rounded-md transition-all  hover:scale-110"
                src={cup1}
                alt=""
            />
          </div>
          <div className="relative overflow-hidden rounded-md ">
            <img
                className="rounded-md transition-all  hover:scale-110"
                src={cup2}
                alt=""
            />
          </div>
          <div className="relative overflow-hidden rounded-md ">
            <img
                className="rounded-md transition-all  hover:scale-110"
                src={cup3}
                alt=""
            />
          </div>
          <div className="relative overflow-hidden rounded-md ">
            <img
                className="rounded-md transition-all  hover:scale-110"
                src={cup4}
                alt=""
            />
          </div>
          <div className="relative overflow-hidden rounded-md ">
            <img
                className="rounded-md transition-all  hover:scale-110"
                src={cup5}
                alt=""
            />
          </div>
          <div className="relative overflow-hidden rounded-md ">
            <img
                className="rounded-md transition-all  hover:scale-110"
                src={cup6}
                alt=""
            />
          </div>
          <div className="relative overflow-hidden rounded-md ">
            <img
                className="rounded-md transition-all  hover:scale-110"
                src={cup7}
                alt=""
            />
          </div>
          <div className="relative overflow-hidden rounded-md ">
            <img
                className="rounded-md transition-all  hover:scale-110"
                src={cup8}
                alt=""
            />
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default FollowUs;
