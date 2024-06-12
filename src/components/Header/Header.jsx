import headerImg from "../../assets/images/more/15.jpg";
import logo from "../../assets/images/more/logo1.png";

const Header = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${headerImg}`,
      }}
      className="bg-cover bg-center h-[110px] flex items-center justify-center"
    >
      <img className="w[75px] h-[90px]" src={logo} alt="" />
      <h1 className="text-white md:text-5xl">Coffee Factory</h1>
    </div>
  );
};

export default Header;
