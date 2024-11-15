import '../styles/Footer.css';

const Footer = () => {
	return (
		<div id='footer'>
			<p>
				Made with <span className='fa fa-heart' /> by Malek and Pandau.
			</p>
			<p>
				Visit our repo{' '}
				<a href='https://github.com/MrFootwork/project-kanban'>
					<i className='fab fa-github-alt'></i>
				</a>
			</p>
		</div>
	);
};

export default Footer;
