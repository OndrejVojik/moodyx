import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ command, mode }) => {
  // Load environment variables based on the current mode (development or production)
  const env = loadEnv(mode, process.cwd(), '');

  // Use the loaded environment variable to set the base path
  const basePath = env.VITE_BASE_PATH || '/';

  return {
    plugins: [],
	base: '/moodyx/',
  };
});