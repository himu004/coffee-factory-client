import icon1 from "../../assets/images//icons/1.png";
import icon2 from "../../assets/images//icons/2.png";
import icon3 from "../../assets/images//icons/3.png";
import icon4 from "../../assets/images//icons/4.png";
const BannerCard = () => {
    return (
        <div className="relative z-1 w-full  bg-[#ECEAE3]">
        <div className="w-4/5 md:h-[250px] mx-auto grid lg:grid-cols-4 md:grid-cols-2 justify-center items-center py-5">
            <div className="">
                <img src={icon1} alt="" />
                <p>Awesome Aroma</p>
                <p>You will definitely be a fan of the design & aroma of your coffee</p>
            </div>
            <div className="">
            <img src={icon2} alt="" />
                <p>Awesome Aroma</p>
                <p>You will definitely be a fan of the design & aroma of your coffee</p>
            </div>
            <div className="">
            <img src={icon3} alt="" />
                <p>Awesome Aroma</p>
                <p>You will definitely be a fan of the design & aroma of your coffee</p>
            </div>
            <div className="">
            <img src={icon4} alt="" />
                <p>Awesome Aroma</p>
                <p>You will definitely be a fan of the design & aroma of your coffee</p>
            </div>
        </div>
            
        </div>
    );
};

export default BannerCard;