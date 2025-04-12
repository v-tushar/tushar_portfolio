# Tushar's Portfolio

This is a personal portfolio website built using React, TypeScript, and Vite. It showcases my skills, projects, and experience as a data scientist.

## Features
- Responsive design
- Smooth scrolling navigation
- Sections for About, Experience, Projects, Skills, and Contact
- Deployed on Netlify

## Getting Started

### Prerequisites
- Node.js (v18 or later)
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/username/tushar-portfolio.git
   ```
2. Navigate to the project directory:
   ```bash
   cd tushar-portfolio
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running Locally
Start the development server:
```bash
npm run dev
```

Open your browser and navigate to `http://localhost:3000`.

### Building for Production
Build the project:
```bash
npm run build
```

The production-ready files will be in the `dist` directory.

### Deployment
This project is configured for deployment on Netlify. To deploy:
1. Link your repository to Netlify.
2. Set the build command to `npm run build`.
3. Set the publish directory to `dist`.

## Contributing
Feel free to fork this repository and submit pull requests. For major changes, please open an issue first to discuss what you would like to change.

## License
This project is licensed under the MIT License.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
