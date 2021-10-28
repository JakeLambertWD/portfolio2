import classes from './About.module.css';

const About = () => {
	return (
		<section className='bg-[#323330] text-[#8a8a8a] pb-32 pt-20 h-screen'>
			<div className='grid grid-cols-2'>
				<div className='col-span-1 flex justify-center items-center flex-col'>
					<h1 className={`${classes.about__heading} text-[110px] uppercase text-left w-5/6`}>About me</h1>
					<h2 className='text-[48px] capitalize font-bold mb-8 text-left w-5/6'>Get to know me</h2>
					<p className='text-left mb-5 tracking-widest w-5/6'>
						At this current moment I have 8 months of experience under my belt for 2 separate agencies being a Junior Front End Developer.
					</p>
					<p className='text-left mb-5 tracking-widest w-5/6'>
						I have a clear vision regarding my career path, that being front end development narrowing down to modern tech like React, TypeScript,
						JavaScript, Tailwind, Material UI etc.
					</p>
					<p className='text-left mb-5 tracking-widest w-5/6'>
						Looking for a step up in my career taking more responsibility within a company which respects the progression of it's employers.
					</p>
				</div>
				<div className='col-span-1 flex justify-center items-center'>
					<img className='w-96' src='https://www.jakelambert.me/static/media/Profile.09c11234.jpeg' alt='' />
				</div>
			</div>
		</section>
	);
};

export default About;
