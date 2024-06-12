import bgImage from '../../assets/images/more/6.jpeg';
const Home = () => {
    return (
        <div style={{ backgroundImage: `url(${bgImage})` }} className="bg-cover bg-center h-screen flex items-center -scale-x-100">
            {/* Banner Have to move on external components */}
            <div className='w-[724px] text-white -scale-x-100 flex flex-col justify-items-start space-y-5'>
                <h2 className='text-4xl'>Would you like a Cup of Delicious Coffee?</h2>
                <p className='text-gray-400'>
                Its coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.
                </p>
                <button className='text-[#242222] border border-transparent w-[130px] bg-[#E3B577] py-3 transition hover:text-white hover:border hover:border-white hover:bg-transparent'>Learn More</button>
            </div>
            
        </div>
    );
};

export default Home;