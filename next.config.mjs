import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const nextConfig = {
  webpack: (config, { isServer }) => {
    // Add alias for client-side code
    config.resolve.alias['@'] = path.resolve(__dirname, './src');

    // Add alias for server-side code if needed
    if (isServer) {
      // config.resolve.alias['@server'] = path.resolve(__dirname, 'server');
      // Add server-side aliases if necessary
    }

    return config;
  },
};

export default nextConfig;
