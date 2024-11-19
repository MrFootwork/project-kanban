import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	base: '/',
});

// export default defineConfig(({ command }) => {
// 	const config = {
// 		plugins: [react()],
// 		base: '/',
// 	};

// 	if (command !== 'serve') {
// 		config.base = '/project-kanban/';
// 	}

// 	return config;
// });
