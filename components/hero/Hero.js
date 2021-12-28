import classes from './Hero.module.css';
import Image from 'next/image';
// import MediumClap from '../mediumClap/MediumClap';

const Hero = () => {
	return (
		<header className={`${classes.header} `}>
			<div className='absolute top-[40px] left-[40px]'>
				<img src='https://i.pinimg.com/originals/c8/99/df/c899dfa4bbfd4965b826c3a7cca87ef9.jpg' alt='' className='h-[65px] rounded-full' />
			</div>

			{/* <div className={classes.medium_clap}>
				<MediumClap />
			</div> */}

			<div className='grid grid-cols-4 h-full'>
				<div className='w-full col-span-2 flex flex-col justify-center items-center'>
					<h1 className={`${classes.heading__primary} capatalize text-white mb-[40px] mt-[-80px] relative`}>
						<span className={`${classes.typewriter} block text-[45px] font-[400] tracking-[20px] w-max`}>Jake Lambert😃</span>
						<span className={`${classes.heading__primary__sub} block text-[18px] font-[700] tracking-[10px] w-max mt-3`}>
							Junior Front End Developer
						</span>
					</h1>

					<a href='#projects' id={`${classes.smoothScroll}`} className='bg-white px-5 py-3 rounded-3xl shadow-lg'>
						Explore my projects
					</a>
				</div>

				<div className='col-span-2 flex justify-center items-center'>
					<div className={`${classes.composition} relative w-4/5 h-1/2`}>
						<div className={`${classes.composition__photo} ${classes.composition__1} left-0 top-[-20px] rounded-sm`} alt=''>
							{/* <img src='/images/jake.png' alt='' className='object-fill h-full w-full' /> */}
							<Image src={'/images/mapty.png'} layout='fill' priority className='rounded-lg shadow-2xl' />
						</div>

						<div className={`${classes.composition__photo} ${classes.composition__2} right-0 top-[20px] rounded-sm`}>
							{/* <img src='/images/budgety.png' alt='' className='object-fill h-full w-full' /> */}
							<Image src={'/images/budgety.png'} layout='fill' priority className='rounded-lg shadow-2xl' />
						</div>
						<div className={`${classes.composition__photo} ${classes.composition__3} left-[20%] top-[100px] rounded-sm`}>
							{/* <img src='/images/netflix2.png' alt='' className='object-fill h-full w-full' /> */}
							<Image src={'/images/netflix.png'} layout='fill' priority className='rounded-lg shadow-2xl' />
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Hero;
