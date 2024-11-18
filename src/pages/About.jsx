import { Link } from 'react-router-dom';
import '../styles/pageAbout.css';

import studentImagePandau from '../assets/images/student-pandau.jpg';
import iconLinkedIn from '../assets/images/linkedin.png';
import iconGitHub from '../assets/images/github.png';

const students = [
	{
		image: studentImagePandau,
		fullName: 'Pandau Ting',
		intro: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
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
				<h2>About this Project</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, qui
					iste fugit est neque exercitationem, voluptatum perspiciatis similique
					quia veritatis architecto impedit fugiat nisi molestiae dolores dicta
					ratione ipsam rem?
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
								<Link to={student.linkedIn}>
									<div>
										<img src={iconLinkedIn} alt='' />
									</div>
								</Link>
								<Link to={student.github}>
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
