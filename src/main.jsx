import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { HashRouter as Router } from 'react-router-dom';
// import { BrowserRouter as Router } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<Router basename='/project-kanban'>
			<App />
		</Router>
	</StrictMode>
);
