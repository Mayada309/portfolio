import aboutSvg from '../assets/about.svg';
import SectionTitle from './SectionTitle';

const About = () => {
	return (
		<section className='bg-white py-20' id='about'>
			<div className='align-element grid md:grid-cols-2 items-center gap-16 '>
				<img src={aboutSvg} className='w-full h-64' />
				<article>
					<SectionTitle text={'code and coffee'} />
					<p className='text-slate-600 pt-2 leading-loose' >
						This is Mayada,  a passionate frontend developer
						with more than two years of experience, holding a B.Sc.
						in Computer Science with a CGPA 3.67.
						My skills include HTML, CSS, JavaScript, React.js,
						TypeScript, Next.js, and more. I excel at creating
						responsive, user-friendly web applications.
						I enjoy reading, watching TV series, and I am actively
						seeking frontend developer opportunities to further
						my career.
					</p>
				</article>
			</div>
		</section>
	);
};

export default About;