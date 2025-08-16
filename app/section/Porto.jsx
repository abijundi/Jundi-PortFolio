import Card from '../../components/ui/Card';

const Porto = () => {
    return (
        <div className='w-full min-h-screen relative bg-[#859f3d]'>
            <div className=' pt-[65px] justify-items-center text-center' >
                <h1 className=' w-[330px] poppins-bold h-[60px] text-5xl tracking-[8px] p-1 white-green'
                >About Me</h1>
                <p className='poppins text-[50px] w-[50%] white-green pt-[50px] pb-[50px] lg:text-[18px]'>
                I’m a passionate designer specializing in UI/UX, blending creativity with functionality to craft visually stunning, user-friendly designs. From social media graphics and thumbnails to unique logos, I bring fresh perspectives to every project. Let’s collaborate and bring your ideas to life!                </p>
            </div>
            <h1 className='poppins-bold tracking-[8px] pt-6 text-5xl white-green mb-4 text-center'>My Work</h1>
            <Card />
        </div>
    );
}

export default Porto;
