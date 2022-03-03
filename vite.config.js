import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import resolve from '@rollup/plugin-node-resolve';

 
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), resolve({
		customResolveOptions: {
			moduleDirectories: ['node_modules']
		}
	  })
	],
	build: {
		chunkSizeWarningLimit: 1600,
	},
	server: {
		https: true,
		host: 0.0.0.0,
		port: 8080,
		strictPort: true
	}

});
