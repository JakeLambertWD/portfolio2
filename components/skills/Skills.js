import classes from './Skills.module.css';

const Skills = () => {
	return (
		<secion className={`${classes.skills}`}>
			<h2 className='headings__main text-center mb-12'>My Tech Skills</h2>{' '}
			<div className='grid grid-cols-2 gap-10 px-32'>
				<div className='col-span-1'>
					<div className='text-center bg-white text-base p-6 rounded shadow-lg transition-all duration-200 cursor-pointer hover:-translate-y-3 hover:scale-[1.02]'>
						{/* 1 */}
						<div className={`${classes.story} grid grid-cols-7 max-w-xl  relative`}>
							<div className={`${classes.story} col-span-1`}>
								<figure className={`${classes.story__shape}`}>
									<img
										src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOPJvR-kaQcRrzFQikt6g94ZSNoXHAW1vtrDuHuzHROHyf6RWRAiL-Y1BRWnVZShZEmT8&usqp=CAU'
										className={`${classes.story__img}`}
										alt=''
									/>
									<figcaption className={`${classes.story__caption} capitalize`}>React</figcaption>
								</figure>
							</div>

							<div className='col-span-6 flex items-center'>
								<div className='bg-gradient-to-r from-yellow-300 to-yellow-400 w-[80%] h-1/2'></div>
							</div>
							<div className='absolute right-0 top-0 bottom-0  flex justify-center items-center' wW>
								80%
							</div>
						</div>
						{/* 2 */}
						<div className={`${classes.story} grid grid-cols-7 max-w-xl  relative`}>
							<div className={`${classes.story} col-span-1`}>
								<figure className={`${classes.story__shape}`}>
									<img
										src='https://icon-library.com/images/javascript-icon-png/javascript-icon-png-23.jpg'
										className={`${classes.story__img}`}
										alt=''
									/>
									<figcaption className={`${classes.story__caption}`}>JavaScript</figcaption>
								</figure>
							</div>

							<div className='col-span-6 flex items-center'>
								<div className='bg-gradient-to-r from-yellow-300 to-yellow-400 w-[75%] h-1/2'></div>
							</div>
							<div className='absolute right-0 top-0 bottom-0  flex justify-center items-center' wW>
								75%
							</div>
						</div>
						{/* 3 */}
						<div className={`${classes.story} grid grid-cols-7 max-w-xl  relative`}>
							<div className={`${classes.story} col-span-1`}>
								<figure className={`${classes.story__shape}`}>
									<img
										src='data:image/png;base64,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'
										className={`${classes.story__img}`}
										alt=''
									/>
									<figcaption className={`${classes.story__caption}`}>Sass</figcaption>
								</figure>
							</div>

							<div className='col-span-6 flex items-center'>
								<div className='bg-gradient-to-r from-yellow-300 to-yellow-400 w-[70%] h-1/2'></div>
							</div>
							<div className='absolute right-0 top-0 bottom-0  flex justify-center items-center' wW>
								70%
							</div>
						</div>
						{/* 4 */}
						<div className={`${classes.story} grid grid-cols-7 max-w-xl  relative`}>
							<div className={`${classes.story} col-span-1`}>
								<figure className={`${classes.story__shape}`}>
									<img src='https://pngimg.com/uploads/php/php_PNG49.png' className={`${classes.story__img}`} alt='' />
									<figcaption className={`${classes.story__caption}`}>PHP</figcaption>
								</figure>
							</div>

							<div className='col-span-6 flex items-center'>
								<div className='bg-gradient-to-r from-yellow-300 to-yellow-400 w-[55%] h-1/2'></div>
							</div>
							<div className='absolute right-0 top-0 bottom-0  flex justify-center items-center' wW>
								55%
							</div>
						</div>
						{/* 5 */}
						<div className={`${classes.story} grid grid-cols-7 max-w-xl  relative`}>
							<div className={`${classes.story} col-span-1`}>
								<figure className={`${classes.story__shape}`}>
									<img
										src='https://www.imaginarycloud.com/blog/content/images/2020/06/material-logo.png'
										className={`${classes.story__img}`}
										alt=''
									/>
									<figcaption className={`${classes.story__caption}`}>Material UI</figcaption>
								</figure>
							</div>

							<div className='col-span-6 flex items-center'>
								<div className='bg-gradient-to-r from-yellow-300 to-yellow-400 w-[65%] h-1/2'></div>
							</div>
							<div className='absolute right-0 top-0 bottom-0  flex justify-center items-center' wW>
								65%
							</div>
						</div>
					</div>
				</div>
				<div className='col-span-1'>
					<div className='text-center bg-white text-base p-6 rounded shadow-lg transition-all duration-200 cursor-pointer hover:-translate-y-3 hover:scale-[1.02]'>
						{/* 1 */}
						<div className={`${classes.story} grid grid-cols-7 max-w-xl  relative`}>
							<div className={`${classes.story} col-span-1`}>
								<figure className={`${classes.story__shape}`}>
									<img
										src='https://pbs.twimg.com/profile_images/1290672565690695681/0G4bie6b_400x400.jpg'
										className={`${classes.story__img}`}
										alt=''
									/>
									<figcaption className={`${classes.story__caption}`}>TypeScript</figcaption>
								</figure>
							</div>

							<div className='col-span-6 flex items-center'>
								<div className='bg-gradient-to-r from-yellow-300 to-yellow-400 w-[75%] h-1/2'></div>
							</div>
							<div className='absolute right-0 top-0 bottom-0  flex justify-center items-center' wW>
								75%
							</div>
						</div>
						{/* 2 */}
						<div className={`${classes.story} grid grid-cols-7 max-w-xl  relative`}>
							<div className={`${classes.story} col-span-1`}>
								<figure className={`${classes.story__shape}`}>
									<img src='https://docs.microsoft.com/en-us/windows/images/nextjs-logo.png' className={`${classes.story__img}`} alt='' />
									<figcaption className={`${classes.story__caption}`}>Next.js</figcaption>
								</figure>
							</div>

							<div className='col-span-6 flex items-center'>
								<div className='bg-gradient-to-r from-yellow-300 to-yellow-400 w-[65%] h-1/2'></div>
							</div>
							<div className='absolute right-0 top-0 bottom-0  flex justify-center items-center' wW>
								65%
							</div>
						</div>
						{/* 3 */}
						<div className={`${classes.story} grid grid-cols-7 max-w-xl  relative`}>
							<div className={`${classes.story} col-span-1`}>
								<figure className={`${classes.story__shape}`}>
									<img
										src='data:image/png;base64,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'
										className={`${classes.story__img}`}
										alt=''
									/>
									<figcaption className={`${classes.story__caption}`}>Tailwind</figcaption>
								</figure>
							</div>

							<div className='col-span-6 flex items-center'>
								<div className='bg-gradient-to-r from-yellow-300 to-yellow-400 w-[85%] h-1/2'></div>
							</div>
							<div className='absolute right-0 top-0 bottom-0  flex justify-center items-center' wW>
								85%
							</div>
						</div>
						{/* 4 */}
						<div className={`${classes.story} grid grid-cols-7 max-w-xl  relative`}>
							<div className={`${classes.story} col-span-1`}>
								<figure className={`${classes.story__shape}`}>
									<img src='https://cdn-icons-png.flaticon.com/512/732/732212.png' className={`${classes.story__img}`} alt='' />
									<figcaption className={`${classes.story__caption}`}>HTML</figcaption>
								</figure>
							</div>

							<div className='col-span-6 flex items-center'>
								<div className='bg-gradient-to-r from-yellow-300 to-yellow-400 w-[90%] h-1/2'></div>
							</div>
							<div className='absolute right-0 top-0 bottom-0 flex justify-center items-center'>90%</div>
						</div>
						{/* 5 */}
						<div className={`${classes.story} grid grid-cols-7 max-w-xl  relative`}>
							<div className={`${classes.story} col-span-1`}>
								<figure className={`${classes.story__shape}`}>
									<img src='https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg' className={`${classes.story__img}`} alt='' />
									<figcaption className={`${classes.story__caption}`}>Bootstrap</figcaption>
								</figure>
							</div>

							<div className='col-span-6 flex items-center'>
								<div className='bg-gradient-to-r from-yellow-300 to-yellow-400 w-[50%] h-1/2'></div>
							</div>
							<div className='absolute right-0 top-0 bottom-0  flex justify-center items-center' wW>
								50%
							</div>
						</div>
					</div>
				</div>
			</div>
		</secion>
	);
	{
		/* hover:-translate-y-60 hover:scale-105 */
	}
};

export default Skills;
