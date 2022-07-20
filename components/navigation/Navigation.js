import classes from './Navigation.module.css';

const Navigation = () => {
	const closeNav = () => {};

	return (
		<div>
			<input type='checkbox' className={`${classes.navigation__checkbox} hidden`} id='navi-toggle' />

			<label
				htmlFor='navi-toggle'
				className={`${classes.navigation__button}  h-[63px] w-[63px] bg-white fixed top-[64px] right-[64px] rounded-full z-10 shadow-lg text-center cursor-pointer`}
			>
				<span className={`${classes.navigation__icon} relative mt-[30px]`}></span>
			</label>

			<div className={`${classes.navigation__background} h-[60px] w-[60px] rounded-full fixed top-[65px] right-[65px] z-[9]`}></div>

			<nav
				className={`${classes.navigation__nav} flex justify-center items-center h-[100vh] fixed top-0 left-0 z-[9] opacity-0 w-0 transition-all duration-150 ease-out`}
			>
				<ul className={`${classes.navigation__list} list-none text-center w-full`}>
					<li className={`${classes.navigation__item}`}>
						<a href='#projects' className={`${classes.navigation__link} `} onClick={closeNav()}>
							<span>01</span>Home
						</a>
					</li>
					<li className={`${classes.navigation__item}`}>
						<a href='/' className={`${classes.navigation__link}`}>
							<span>02</span>Projects
						</a>
					</li>
					<li className={`${classes.navigation__item}`}>
						<a href='/' className={`${classes.navigation__link}`}>
							<span>03</span>Work Experience
						</a>
					</li>
					<li className={`${classes.navigation__item}`}>
						<a href='/' className={`${classes.navigation__link}`}>
							<span>04</span>Skills
						</a>
					</li>
					<li className={`${classes.navigation__item}`}>
						<a href='/' className={`${classes.navigation__link}`}>
							<span>05</span>About Me
						</a>
					</li>
					<li className={`${classes.navigation__item}`}>
						<a href='/' className={`${classes.navigation__link}`}>
							<span>06</span>Contact
						</a>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Navigation;
