import LoadingImg from '../../../B12-A08-Hero-Apps/assets/logo.png'

const Loader = () => {
    return (
        <div className='h-screen w-full bg-white grid place-items-center'>
            <span className='flex items-center text-6xl gap-2.5'>L<img className='max-w-12.5 animate-spin origin-center' src={LoadingImg} alt="image here" />ading</span>
        </div>
    );
};

export default Loader;