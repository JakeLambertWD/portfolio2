import classes from './Projects.module.css';

const Projects = () => {
	return (
		<section className='bg-[#f7f7f7] pt-6 pb-4 -mt-40 h-[1900px]'>
			<div className='mb-20 text-center'>
				<h2 className='headings__main  mt-60' id='projects'>
					Projects
				</h2>
			</div>
			<div className={` grid grid-cols-3 gap-14 max-w-6xl m-auto h-1/3 block`}>
				{/* Card 2 */}
				<div className='col-span-1'>
					<div className={`${classes.card} relative h-14`}>
						{/* Front side */}
						<div
							className={`${classes.card__side} ${classes.card__side__front} absolute top-0 left-0 w-full h-[530px] rounded-[3px] shadow-2xl overflow-hidden bg-white`}
						>
							<div className={`${classes.card__picture} ${classes.card__picture__2} bg-cover h-60`}></div>
							<h4 className='text-3xl font-light uppercase text-right text-white absolute top-36 right-5 w-7/12'>
								<span className={`${classes.card__heading__span} ${classes.heading__span__2} py-1 px-4`}>Instagram Clone</span>
							</h4>

							<div className='flex justify-center items-center text-center'>
								<ul className='list-none w-4/5'>
									<li className={`${classes.card__list}`}>Next.js</li>
									<li className={`${classes.card__list}`}>Tailwind CSS</li>
									<li className={`${classes.card__list}`}>Tailwind Custom Utility Classes</li>
									<li className={`${classes.card__list}`}>Vercel Hosting</li>
									<li className={`${classes.card__list}`}>Recoil</li>
									<li className={`${classes.card__list}`}>Faker.js</li>
								</ul>
							</div>
						</div>

						{/* Back side */}
						<div
							className={`${classes.card__side} ${classes.card__side__back} ${classes.back__2} absolute top-0 left-0 w-full h-[530px] rounded-[3px] shadow-2xl overflow-hidden bg-white`}
						>
							<div className='absolute top-2/4 left-2/4 text-center w-11/12 transform translate-x-[-50%] translate-y-[-50%]'>
								<div className='text-center text-white mb-20'>
									<p className='text-sm uppercase'>Instagram</p>
									<p className='text-6xl font-thin'>Clone</p>
								</div>
								<a href='https://insta-clone-theta.vercel.app/' className='block bg-white py-3 px-3 w-1/2 m-auto rounded-3xl mb-5 shadow-xl'>
									Visit Site
								</a>
								<a href='https://github.com/JakeLambertWD/insta-clone' className='block bg-white py-3 px-3 w-1/2 m-auto rounded-3xl shadow-xl'>
									View Code
								</a>
							</div>
						</div>
					</div>
				</div>
				{/* Card 1 */}
				<div className='col-span-1'>
					<div className={`${classes.card} relative h-14`}>
						{/* Front side */}
						<div
							className={`${classes.card__side} ${classes.card__side__front} absolute top-0 left-0 w-full h-[530px] rounded-[3px] shadow-2xl overflow-hidden bg-white`}
						>
							<div className={`${classes.card__picture} ${classes.card__picture__1} bg-cover h-60`}></div>
							<h4 className='text-3xl font-light uppercase text-right text-white absolute top-36 right-5 w-7/12'>
								<span className={`${classes.card__heading__span} ${classes.heading__span__1} py-1 px-4`}>Netflix Clone</span>
							</h4>

							<div className='flex justify-center items-center text-center'>
								<ul className='list-none w-4/5'>
									<li className={`${classes.card__list}`}>Firebase Hosting</li>
									<li className={`${classes.card__list}`}>Redux</li>
									<li className={`${classes.card__list}`}>Firebase Authentication</li>
									<li className={`${classes.card__list}`}>API themoviedb.org</li>
									<li className={`${classes.card__list}`}>Stripe</li>
									<li className={`${classes.card__list}`}>Firebase Firestore Database</li>
								</ul>
							</div>
						</div>

						{/* Back side */}
						<div
							className={`${classes.card__side} ${classes.card__side__back} ${classes.back__1} absolute top-0 left-0 w-full h-[530px] rounded-[3px] shadow-2xl overflow-hidden bg-white`}
						>
							<div className='absolute top-2/4 left-2/4 text-center w-11/12 transform translate-x-[-50%] translate-y-[-50%]'>
								<div className='text-center text-white mb-20'>
									<p className='text-sm uppercase'>Netflix</p>
									<p className='text-6xl font-thin'>Clone</p>
								</div>
								<a href='https://netflix-clone-634c1.web.app/' className='block bg-white py-3 px-3 w-1/2 m-auto rounded-3xl mb-5 shadow-xl'>
									Visit Site
								</a>
								<a href='https://github.com/JakeLambertWD/netflix-clone' className='block bg-white py-3 px-3 w-1/2 m-auto rounded-3xl shadow-xl'>
									View Code
								</a>
							</div>
						</div>
					</div>
				</div>

				{/* Card 3 */}
				<div className='col-span-1'>
					<div className={`${classes.card} relative h-14`}>
						{/* Front side */}
						<div
							className={`${classes.card__side} ${classes.card__side__front} absolute top-0 left-0 w-full h-[530px] rounded-[3px] shadow-2xl overflow-hidden bg-white`}
						>
							<div className={`${classes.card__picture} ${classes.card__picture__6} bg-cover h-60`}></div>
							<h4 className='text-3xl font-light uppercase text-right text-white absolute top-36 right-5 w-7/12'>
								<span className={`${classes.card__heading__span} ${classes.heading__span__6} py-1 px-4`}>Mapty</span>
							</h4>

							<div className='flex justify-center items-center text-center'>
								<ul className='list-none w-4/5'>
									<li className={`${classes.card__list}`}>Advanced JavaScript</li>
									<li className={`${classes.card__list}`}>Geolocation</li>
									<li className={`${classes.card__list}`}>Netlify Hosting</li>
									<li className={`${classes.card__list}`}>Object Orientated Programming</li>
									<li className={`${classes.card__list}`}>Dynamic Marker Popups</li>
								</ul>
							</div>
						</div>

						{/* Back side */}
						<div
							className={`${classes.card__side} ${classes.card__side__back} ${classes.back__6} absolute top-0 left-0 w-full h-[530px] rounded-[3px] shadow-2xl overflow-hidden bg-white`}
						>
							<div className='absolute top-2/4 left-2/4 text-center w-11/12 transform translate-x-[-50%] translate-y-[-50%]'>
								<div className='text-center text-white mb-20'>
									<p className='text-sm uppercase'>Fitness Locator</p>
									<p className='text-6xl font-thin'>Mapty</p>
								</div>
								<a href='https://mapty-fitness.netlify.app/' className='block bg-white py-3 px-3 w-1/2 m-auto rounded-3xl mb-5 shadow-xl'>
									Visit Site
								</a>
								<a
									href='https://github.com/JakeLambertWD/nextjs-blog/tree/master'
									className='block bg-white py-3 px-3 w-1/2 m-auto rounded-3xl shadow-xl'
								>
									View Code
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className={` grid grid-cols-3 gap-14 max-w-6xl m-auto h-1/3 block`}>
				{/* Card 1 */}
				<div className='col-span-1'>
					<div className={`${classes.card} relative h-14`}>
						{/* Front side */}
						<div
							className={`${classes.card__side} ${classes.card__side__front} absolute top-0 left-0 w-full h-[530px] rounded-[3px] shadow-2xl overflow-hidden bg-white`}
						>
							<div className={`${classes.card__picture} ${classes.card__picture__4} bg-contain  h-60`}></div>
							<h4 className='text-3xl font-light uppercase text-right text-white absolute top-36 right-5 w-7/12'>
								<span className={`${classes.card__heading__span} ${classes.heading__span__4} py-1 px-4`}>Design my Burger</span>
							</h4>

							<div className='flex justify-center items-center text-center'>
								<ul className='list-none w-4/5'>
									<li className={`${classes.card__list}`}>Firebase</li>
									<li className={`${classes.card__list}`}>React.js</li>
									<li className={`${classes.card__list}`}>Axios</li>
									<li className={`${classes.card__list}`}>React Router DOM</li>
									<li className={`${classes.card__list}`}>Netlify Hosting</li>
								</ul>
							</div>
						</div>

						{/* Back side */}
						<div
							className={`${classes.card__side} ${classes.card__side__back} ${classes.back__4} absolute top-0 left-0 w-full h-[530px] rounded-[3px] shadow-2xl overflow-hidden bg-white`}
						>
							<div className='absolute top-2/4 left-2/4 text-center w-11/12 transform translate-x-[-50%] translate-y-[-50%]'>
								<div className='text-center text-white mb-20'>
									<p className='text-sm uppercase'>Design my</p>
									<p className='text-6xl font-thin'>Burger</p>
								</div>
								<a href='https://design-my-burger.netlify.app/' className='block bg-white py-3 px-3 w-1/2 m-auto rounded-3xl mb-5 shadow-xl'>
									Visit Site
								</a>
								<a href='https://github.com/JakeLambertWD/design-my-burger' className='block bg-white py-3 px-3 w-1/2 m-auto rounded-3xl shadow-xl'>
									View Code
								</a>
							</div>
						</div>
					</div>
				</div>

				{/* Card 2 */}
				<div className='col-span-1'>
					<div className={`${classes.card} relative h-14`}>
						{/* Front side */}
						<div
							className={`${classes.card__side} ${classes.card__side__front} absolute top-0 left-0 w-full h-[530px] rounded-[3px] shadow-2xl overflow-hidden bg-white`}
						>
							<div className={`${classes.card__picture} ${classes.card__picture__5} bg-cover h-60`}></div>
							<h4 className='text-3xl font-light uppercase text-right text-white absolute top-36 right-5 w-7/12'>
								<span className={`${classes.card__heading__span} ${classes.heading__span__5} py-1 px-4`}>Forkify</span>
							</h4>

							<div className='flex justify-center items-center text-center'>
								<ul className='list-none w-4/5'>
									<li className={`${classes.card__list}`}>Advanced JavaScript</li>
									<li className={`${classes.card__list}`}>MVC Design Pattern</li>
									<li className={`${classes.card__list}`}>Promises for Async Operations</li>
									<li className={`${classes.card__list}`}>API Calls</li>
								</ul>
							</div>
						</div>

						{/* Back side */}
						<div
							className={`${classes.card__side} ${classes.card__side__back} ${classes.back__5} absolute top-0 left-0 w-full h-[530px] rounded-[3px] shadow-2xl overflow-hidden bg-white`}
						>
							<div className='absolute top-2/4 left-2/4 text-center w-11/12 transform translate-x-[-50%] translate-y-[-50%]'>
								<div className='text-center text-white mb-20'>
									<p className='text-sm uppercase'></p>
									<p className='text-6xl font-thin'>Forkify</p>
								</div>
								<a href='https://forkify-jake.netlify.app/' className='block bg-white py-3 px-3 w-1/2 m-auto rounded-3xl mb-5 shadow-xl'>
									Visit Site
								</a>
								<a href='https://github.com/JakeLambertWD/forkify' className='block bg-white py-3 px-3 w-1/2 m-auto rounded-3xl shadow-xl'>
									View Code
								</a>
							</div>
						</div>
					</div>
				</div>

				{/* Card 3 */}
				<div className='col-span-1'>
					<div className={`${classes.card} relative h-14`}>
						{/* Front side */}
						<div
							className={`${classes.card__side} ${classes.card__side__front} absolute top-0 left-0 w-full h-[530px] rounded-[3px] shadow-2xl overflow-hidden bg-white`}
						>
							<div className={`${classes.card__picture} ${classes.card__picture__3} bg-cover h-60`}></div>
							<h4 className='text-3xl font-light uppercase text-right text-white absolute top-36 right-5 w-7/12'>
								<span className={`${classes.card__heading__span} ${classes.heading__span__3} py-1 px-4`}>Nextjs Blog</span>
							</h4>

							<div className='flex justify-center items-center text-center'>
								<ul className='list-none w-4/5'>
									<li className={`${classes.card__list}`}>Next.js</li>
									<li className={`${classes.card__list}`}>Vercel Hosting</li>
									<li className={`${classes.card__list}`}>React Markdown</li>
									<li className={`${classes.card__list}`}>Gray Matter</li>
								</ul>
							</div>
						</div>

						{/* Back side */}
						<div
							className={`${classes.card__side} ${classes.card__side__back} ${classes.back__3} absolute top-0 left-0 w-full h-[530px] rounded-[3px] shadow-2xl overflow-hidden bg-white`}
						>
							<div className='absolute top-2/4 left-2/4 text-center w-11/12 transform translate-x-[-50%] translate-y-[-50%]'>
								<div className='text-center text-white mb-20'>
									<p className='text-sm uppercase'>Nextjs</p>
									<p className='text-6xl font-thin'>Blog</p>
								</div>
								<a
									href='https://nextjs-blog-8uu0rfuup-jakelambertwd.vercel.app/'
									className='block bg-white py-3 px-3 w-1/2 m-auto rounded-3xl mb-5 shadow-xl'
								>
									Visit Site
								</a>
								<a
									href='https://github.com/JakeLambertWD/nextjs-blog/tree/master'
									className='block bg-white py-3 px-3 w-1/2 m-auto rounded-3xl shadow-xl'
								>
									View Code
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className='flex justify-center'>
				<a
					href='https://github.com/JakeLambertWD?tab=repositories'
					className='m-auto py-3 px-8 bg-white inline-block rounded-3xl bg-gradient-to-br from-red-600 to-red-500 shadow-xl text-white cursor-pointer'
				>
					My GitHub Projects
				</a>
			</div>
		</section>
	);
};

export default Projects;
