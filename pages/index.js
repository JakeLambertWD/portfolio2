import Head from 'next/head';
import Hero from '../components/hero/Hero';
import Navigation from '../components/navigation/Navigation';
import Projects from '../components/projects/Projects';
import Skills from '../components/skills/Skills';
import Form from '../components/form/Form';
import Experience from '../components/experience/Experience';
import About from '../components/about/About';

export default function Home() {
	return (
		<>
			<Head>
				<title>Jake Lambert</title>
				<link rel='icon' href='https://i.pinimg.com/originals/c8/99/df/c899dfa4bbfd4965b826c3a7cca87ef9.jpg' className='rounded-full' />
				{/* Google Fonts  */}
				<link href='https://fonts.googleapis.com/css?family=Lato:100,300,400,700,900' rel='stylesheet' />
				<link href='https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@300&display=swap' rel='stylesheet'></link>
			</Head>
			<div className='m-[30px] bg-gray-100'>
				<Navigation />
				<Hero />
				<Projects />
				<Skills />
				<Experience />
				<About />
				<Form />
			</div>
		</>
	);
}
