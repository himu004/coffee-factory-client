import cup1 from '../../assets/images/cups/Rectangle 9.png';
const FollowUs = () => {
    return (
        <div className='w-4/5 mx-auto'>
            <div className='space-y-2'>
                <p className="text-center">Follow Us Now</p>
                <h2 className="text-center text-3xl text-[#331A15]">Follow on Instagram</h2>
                <div className='grid grid-cols-4 gap-5'>
                    <img src={cup1} alt="" />
                    <img src={cup1} alt="" />
                    <img src={cup1} alt="" />
                    <img src={cup1} alt="" />
                    <img src={cup1} alt="" />
                    <img src={cup1} alt="" />
                    <img src={cup1} alt="" />
                    <img src={cup1} alt="" />
                </div>
            </div>
        </div>
    );
};

export default FollowUs;