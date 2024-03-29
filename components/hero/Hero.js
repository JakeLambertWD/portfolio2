import classes from './Hero.module.css';
import Image from 'next/image';
import Button from '@mui/material/Button';
// import MediumClap from '../mediumClap/MediumClap';

const smoothScroll = () => {
	window.scrollTo({ top: 800, behavior: 'smooth' });
};

const Hero = () => {
	return (
		<header className={`${classes.header} `}>
			<div className='absolute top-[40px] left-[40px]'>
				<a href='/'>
					<img
						src='https://i.pinimg.com/originals/c8/99/df/c899dfa4bbfd4965b826c3a7cca87ef9.jpg'
						alt=''
						className='h-[65px] rounded-full'
					/>
				</a>
			</div>

			<div className='grid grid-cols-4 h-full'>
				<div className='w-full col-span-2 flex flex-col justify-center items-center'>
					<h1
						className={`${classes.heading__primary} capatalize text-white mb-[40px] mt-[-80px] relative`}
					>
						<span
							className={`${classes.typewriter} block text-[45px] font-[400] tracking-[20px] w-max`}
						>
							Jake Lambert
						</span>
						<span
							className={`${classes.heading__primary__sub} block text-[18px] font-[700] tracking-[10px] w-max mt-3`}
						>
							Front End Developer
						</span>
					</h1>

					<Button
						onClick={smoothScroll}
						size='large'
						variant='outlined'
						color='inherit'
						sx={{ color: 'white' }}
					>
						Explore my projects
					</Button>
				</div>

				<div className='col-span-2 flex justify-center items-center '>
					<div className={`${classes.composition} relative w-[600px] h-1/2`}>
						<div
							className={`${classes.composition__photo} ${classes.composition__1} left-0 top-[-20px] rounded-sm`}
							alt=''
						>
							<Image
								src={'/images/medium.png'}
								layout='fill'
								priority
								className='rounded-lg shadow-2xl'
							/>
						</div>
						<div
							className={`${classes.composition__photo} ${classes.composition__2} right-0 top-[20px] rounded-sm`}
						>
							<Image
								src={'/images/golsgym.png'}
								layout='fill'
								priority
								className='rounded-lg shadow-2xl'
							/>
						</div>
						<div
							className={`${classes.composition__photo} ${classes.composition__3} left-[20%] top-[100px] rounded-sm`}
						>
							<Image
								src={'/images/netflix.png'}
								layout='fill'
								priority
								className='rounded-lg shadow-2xl'
							/>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Hero;
