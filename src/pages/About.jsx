import { Link } from 'react-router-dom';
import '../styles/pageAbout.css';

import studentImagePandau from '../assets/images/student-pandau.jpg';
import iconLinkedIn from '../assets/images/linkedin.png';
import iconGitHub from '../assets/images/github.png';
import { openLinkInNewTab } from '../helper/utils';

const students = [
	{
		image: studentImagePandau,
		fullName: 'Pandau Ting',
		intro:
			'Hi, I’m Pandau, a passionate web developer with a knack for creating intuitive and efficient tools. I built this Kanban board app to combine my love for clean design and productivity. My goal is to make managing tasks as seamless and enjoyable as possible. Thanks for checking it out—I hope it helps you stay organized and reach your goals!',
		linkedIn: 'https://www.linkedin.com/in/pandau-ting/',
		github: 'https://github.com/MrFootwork',
	},
	{
		image: 'https://picsum.photos/200',
		fullName: 'Malek',
		intro: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
		linkedIn: '',
		github: '',
	},
];

const About = () => {
	return (
		<article id='pageAbout'>
			<section id='aboutProject'>
				<h2>Welcome to kannab</h2>
				<h3>Streamline Your Workflow, Simplify Your Productivity</h3>
				<p>
					At <span>kannab</span>, we believe that managing tasks shouldn’t be
					overwhelming. Whether you're tackling a personal project, running a
					team, or scaling a business, our Kanban board app is designed to bring
					clarity, focus, and efficiency to your work. Inspired by the
					simplicity and effectiveness of the Kanban methodology,{' '}
					<span>kannab</span> empowers you to visualize your tasks, prioritize
					what matters, and track progress effortlessly. With an intuitive
					interface and powerful features, it’s your go-to tool for organizing
					work, collaborating with teams, and achieving your goals faster. Say
					goodbye to chaos and hello to productivity. Start managing your tasks
					like a pro with <span>kannab</span>.
				</p>
			</section>
			<section id='aboutStudents'>
				{students.map(student => {
					return (
						<section className='about-student' key={student.fullName}>
							<div className='about-image-container'>
								<img src={student.image} alt='' />
							</div>
							<h3>{student.fullName}</h3>
							<p>{student.intro}</p>
							<p>Visit me on</p>
							<div className='about-student-link-container'>
								<Link onClick={() => openLinkInNewTab(student.linkedIn)}>
									<div>
										<img src={iconLinkedIn} alt='' />
									</div>
								</Link>
								<Link onClick={() => openLinkInNewTab(student.github)}>
									<div>
										<img className='github' src={iconGitHub} alt='' />
									</div>
								</Link>
							</div>
						</section>
					);
				})}
			</section>
		</article>
	);
};

export default About;
