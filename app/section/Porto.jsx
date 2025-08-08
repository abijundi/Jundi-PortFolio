import Card from '../../components/ui/Card';

const Porto = () => {
    return (
        <div className='w-full min-h-screen relative bg-[#859f3d]'>
            <div className=' pt-[65px] justify-items-center text-center' >
                <h1 className=' w-[330px] poppins-bold h-[60px] text-5xl tracking-[8px] p-1 white-green'
                >About Me</h1>
                <p className='poppins text-2xl w-[70%] white-green pt-[50px] pb-[50px] lg:text-[18px]'>
                Hello there! I'm a passionate designer with a keen eye for detail and a love for creating visually stunning and user-friendly designs. My journey in design has been fueled by a desire to blend creativity with functionality, ensuring that every project I undertake not only looks great but also serves its purpose effectively. Whether it's crafting engaging social media graphics, designing captivating thumbnails, or developing unique logos, I strive to bring a fresh perspective to each piece of work. Let's connect and explore how we can collaborate to bring your ideas to life!
                </p>
            </div>
            <h1 className='poppins-bold tracking-[8px] pt-6 text-5xl white-green mb-4 text-center'>My Work</h1>
            <Card />
        </div>
    );
}

export default Porto;
