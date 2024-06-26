import bg from '../../assets/images//more/24.jpg';
import logo from '../../assets/images/more/logo1.png';

const Footer = () => {
  return (
    <div className='bg-base-200'>
      <footer className="footer p-10 w-4/5 mx-auto text-base-content mt-10">
        <aside>
          <img className='w-[70px] h-[80px]' src={logo} alt="" />
          <p>
            Coffee Factory
            <br />
            We Provide Quality Coffee World Wide 
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
      <div style={{ backgroundImage: `url(${bg})` }} className="h-[50px] bg-cover bg-center flex justify-center items-center">
        <p className='text-white'>Copyright Himu Chowdhury || All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
