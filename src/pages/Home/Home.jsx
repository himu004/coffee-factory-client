import Banner from "../../components/Banner/Banner";
import BannerCard from "../../components/Banner/BannerCard";
import CoffeeSection from "../../components/CoffeeSection";
import FollowUs from "../../components/FollowUs/FollowUs";


const Home = () => {
    return (
        <div>
            <Banner/> 
            <BannerCard/>
            <CoffeeSection/>
            <FollowUs/>
        </div>
    );
};

export default Home;