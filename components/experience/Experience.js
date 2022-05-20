import classes from './Experience.module.css';

const Experience = () => {
	return (
		<>
			<h2 className='headings__main text-center mb-12 mt-32'>Work Experience</h2>

			<div className={`${classes.story} ${classes.story_1}`}>
				<figure className={`${classes.story__shape__3} ${classes.story__shape} flex justify-center items-center my-5 shadow-2xl`}>
					<img
						src='https://uploads-ssl.webflow.com/5f99a46b8d60d903ce3e7903/5fc7d197db5d2e7a386d9e28_guider-logo-dark_raster.png'
						alt=''
						className='h-1/5'
					/>
				</figure>
				<div className={classes.story__text}>
					<h3 className='font-bold mb-2'>
						Front End Developer -- Guider
						<span className='font-medium text-gray-600 opacity-80 absolute right-0'> February - May 2022</span>
					</h3>
					<h3 className='mb-2'></h3>
					<p>
						Developed and planned a new v3 platform for a business mentoring program.
						<br />
						Implemented reusable components in React using the recent v5 Material UI library. State management w/ Redux.
						<br />
						Tested code using Jest unit tests and Sonarcloud for an automated code review.
						<br />
						Worked in an Agile environment w/ sprint planning and retrospectives every 2 weeks.
					</p>
				</div>
			</div>
			<br />
			<br />
			<div className={`${classes.story}`}>
				<figure className={`${classes.story__shape__2} ${classes.story__shape} flex justify-center items-center my-5 shadow-2xl`}>
					<img src='https://www.charle.co.uk/media/images/logo.png' alt='' className='h-2/5' />
				</figure>
				<div className={classes.story__text}>
					<h3 className='font-bold mb-2'>
						Full Stack Developer -- Charle Agency
						<span className='font-medium text-gray-600 opacity-80 absolute right-0'> August - November 2021</span>
					</h3>
					<h3 className='mb-2'></h3>
					<p>
						Experience with the fundamental programming languages mixed with React, Liquid, and Tailwind. Future proof sites with best-practices code
						techniques incorporating optimisation for speed, SEO, and responsive design for all devices.
						<br />
						Building e-commerce websites specialising in Shopify to assist clients to drive sales, manage day to day maintenance etc.
						<br />
						Great knowledge with the Shopify platform architecture inside and out, crafting the best themes from scratch.
					</p>
				</div>
			</div>
			<br />
			<br />
			<div className={`${classes.story} `}>
				<figure className={`${classes.story__shape} my-5 shadow-2xl`}>
					<img src='https://www.vgd.uk.com/site/themes/vgd/img/vgdlogo.svg' alt='' className='h-full' />
				</figure>
				<div className={classes.story__text}>
					<h3 className='font-bold mb-2'>
						Junior Front End Developer -- VGD Digital and Design Agency
						<span className='font-medium text-gray-600 opacity-80 absolute right-0'> February - August 2021</span>
					</h3>

					<p>
						Steep learning curve ranging from systems development, creative design, and digital styling know-how.
						<br />
						Specialised in project planning and engaging with clients. Conversant with modern frameworks and popular CSS extensions.
						<br />
						Proficient with third-party libraries and tools that give me comprehensive knowledge to tackle the hardest developer issues.
						<br />
						Extensive use of modern CMS's i.e. WordPress and Concrete5. In addition, plugin and widget architecture.
					</p>
				</div>
			</div>
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
		</>
	);
};

export default Experience;
