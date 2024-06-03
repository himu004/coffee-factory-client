import errorImg from '../../assets/images/404/404.gif';

const ErrorPage = () => {
    return (
        <div className='w-full h-screen flex justify-center items-center'>
            <img className='w-[950px] sm:' src={errorImg} alt="Error Page 404" />
        </div>
    );
};

export default ErrorPage;