import { openLinkInNewTab } from '../helper/utils';
import '../styles/Footer.css';

const Footer = () => {
	const linkToGithubRepo = 'https://github.com/MrFootwork/project-kanban';

	return (
		<div id='footer'>
			<p>
				Made with <span className='fa fa-heart' /> by Malek and Pandau.
			</p>
			<p>
				Visit our repo{' '}
				<a onClick={() => openLinkInNewTab(linkToGithubRepo)}>
					<i className='fab fa-github-alt'></i>
				</a>
			</p>
		</div>
	);
};

export default Footer;
