import flowbitePlugin from 'flowbite/plugin';

const tailwindConfig = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFA500',
      },
    },
  },
  plugins: [
    flowbitePlugin,
  ],
};

export default tailwindConfig;
