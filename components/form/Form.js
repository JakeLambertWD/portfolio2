import emailjs from 'emailjs-com';
import { ExternalLink } from 'react-external-link';
import { saveAs } from 'file-saver';

const Form = () => {
	function sendEmail(e) {
		e.preventDefault();

		emailjs
			.sendForm('service_7kpxzo8', 'template', e.target, 'user_dmJWXF83Ofz8Ghy0TLQbP')
			.then(
				result => {
					console.log(result.text);
				},
				error => {
					console.log(error.text);
				}
			);
		e.target.reset();
	}

	const saveFile = () => {
		// using Java Script method to get PDF file
		fetch('CV.pdf').then(response => {
			response.blob().then(blob => {
				// Creating new object of PDF file
				const fileURL = window.URL.createObjectURL(blob);
				// Setting various property values
				let alink = document.createElement('a');
				alink.href = fileURL;
				alink.download = 'JakeCV.pdf';
				alink.click();
			});
		});
	};

	return (
		<>
			<section className='bg-gradient-to-br from-red-500 to-red-600 py-40 h-screen'>
				<div className='flex justify-center items-center bg-gray-100 rounded-md m-auto max-w-6xl text-center'>
					<div className=' w-full pt-8 bg-white rounded-l-md shadow-2xl'>
						<h1 className='headings__main w-max m-auto border-b-2 border-black pb-2'>
							Lets Get Social
						</h1>
						<h2 className='mt-6 max-w-sm m-auto'>
							If you would like to have a chat about job offers and/or find out more about
							me.
						</h2>
						<div className='grid grid-cols-4 w-52 m-auto py-10'>
							{/* social icons */}
							<div className='col-span-1'>
								<ExternalLink href='https://www.linkedin.com/in/jakelambert1/'>
									<img
										className='h-10 rounded-md'
										src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/768px-LinkedIn_logo_initials.png'
										alt=''
									/>
								</ExternalLink>
							</div>
							<div className='col-span-1'>
								<ExternalLink href='https://github.com/JakeLambertWD?tab=repositories'>
									<img
										className='h-10 rounded-md'
										src='https://icons-for-free.com/iconfiles/png/512/git+github+hosting+internet+used+for+code+version+control+icon-1320194988409492468.png'
										alt=''
									/>
								</ExternalLink>
							</div>
							<div className='col-span-1 '>
								<ExternalLink href='https://www.facebook.com/Stockbridge123/'>
									<img
										className='h-10 rounded-md'
										src='https://upload.wikimedia.org/wikipedia/commons/c/cd/Facebook_logo_%28square%29.png'
										alt=''
									/>
								</ExternalLink>
							</div>
							<div className='col-span-1 rounded-md'>
								<img
									className='h-10 cursor-pointer'
									src='https://www.boostini.pro/wp-content/uploads/2021/07/canva-logo.png'
									alt=''
									onClick={saveFile}
								/>
							</div>
						</div>

						{/* contact icons */}
						<div className='flex justify-start w-72 m-auto mb-3'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='24'
								height='24'
								viewBox='0 0 24 24'
							>
								<path d='M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z' />
							</svg>
							<p className='ml-4'>Flat 1, 29 Cross Street, Islington</p>
						</div>
						<div className='flex justify-start w-72 m-auto mb-3'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='24'
								height='24'
								viewBox='0 0 24 24'
							>
								<path d='M24 0l-6 22-8.129-7.239 7.802-8.234-10.458 7.227-7.215-1.754 24-12zm-15 16.668v7.332l3.258-4.431-3.258-2.901z' />
							</svg>
							<p className='ml-4'>jakelambert1@hotmail.co.uk</p>
						</div>
						<div className='flex justify-start w-72 m-auto mb-10'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='24'
								height='24'
								viewBox='0 0 24 24'
							>
								<path d='M20 22.621l-3.521-6.795c-.008.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.083-1.026-3.493-6.817-2.106 1.039c-7.202 3.755 4.233 25.982 11.6 22.615.121-.055 2.102-1.029 2.11-1.033z' />
							</svg>
							<p className='ml-4'>07792703081</p>
						</div>
					</div>
					<div className='w-full pt-8 '>
						<h1 className='headings__main w-max m-auto border-b-2 border-black pb-2'>
							Get In Touch
						</h1>
						<form onSubmit={sendEmail} className='px-8 pt-6 pb-8 mb-4'>
							<div className='mb-6'>
								<input
									className='shadow-inner appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
									name='name'
									type='text'
									placeholder='Name'
								/>
							</div>
							<div className='mb-6'>
								<input
									className='shadow-inner appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
									name='email'
									type='text'
									placeholder='Email'
								/>
							</div>
							<div className='mb-8'>
								<textarea
									className='shadow-inner appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
									name='message'
									placeholder='Message'
								/>
							</div>

							<input
								type='submit'
								value='Send'
								className='bg-red-500 hover:bg-red-600 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer'
							/>
						</form>
					</div>
				</div>
			</section>
		</>
	);
};

export default Form;
