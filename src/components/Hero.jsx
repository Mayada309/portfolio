import heroImg from '../assets/hero.svg';
import { FaGithubSquare, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Hero = () => {
	return (
		<section className='bg-pink-100 py-24' >
			<div
				className='
					align-element
					grid 
					md:grid-cols-2 items-center gap-8' >
				<article>
					<h1 className='text-7xl font-bold tracking-wider'>
						I&#39;m Mayada
					</h1>
					<p
						className='
					mt-4 
					text-3xl 
					text-slate-700 
					capitalize 
					tracking-wide'>
						front-end developer
					</p>
					<p className='mt-2 text-lg text-slate-700 capitalize tracking-wide' >
						turning ideas into interactive reality
					</p>
					<div className='flex gap-x-4 mt-4' >
						<a href='https://github.com/Mayada309'>
							<FaGithubSquare className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
						</a>
						<a href='https://www.linkedin.com/in/mayada-shaaban-25892122a/'>
							<FaLinkedin className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
						</a>
						<a href='https://x.com/mayadashaa3'>
							<FaTwitter className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
						</a>
					</div>
				</article>
				<article className='hidden md:block' >
					<img className='h-80 lg:h-96 ' src={heroImg} alt="" />
				</article>
			</div>
		</section>
	);
};

export default Hero;