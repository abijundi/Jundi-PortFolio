import Card from '../../components/ui/Card';


const Porto = () => {
    return (
        <div className=" w-full min-h-screen relative bg-cover bg-[var(--dark2)] ">
            <div className=' pt-[65px] justify-items-center text-center' >
                <h1 className='text-[var(--white1)] w-[330px] poppins-bold h-[60px] text-5xl tracking-[8px] p-1'
                >About Me</h1>
                <p className='text-[var(--white1)] poppins text-[50px] w-[50%] pt-[50px] pb-[50px] lg:text-[18px]'>
                I’m a passionate designer specializing in UI/UX, blending creativity with functionality to craft visually stunning, user-friendly designs. From social media graphics and thumbnails to unique logos, I bring fresh perspectives to every project. Let’s collaborate and bring your ideas to life!                </p>
            </div>
            <h1 className='text-[var(--white1)] poppins-bold tracking-[8px] pt-6 text-5xl mb-4 text-center'>My Work</h1>
            <Card />
        </div>
    );
}

export default Porto;
