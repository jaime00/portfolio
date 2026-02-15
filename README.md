[![GitHub Banner](https://github.com/user-attachments/assets/596e23cc-eed0-4119-abc4-d9068cb3ffb5)](https://jaime00portfolio.netlify.app)

# Portfolio

Personal portfolio built with React 19, showcasing my work as a Frontend Developer — professional experience at companies like Cinepolis, Qrvey, and IA Interactive, along with side projects and open-source tools.

**[Live site](https://jaime00portfolio.netlify.app)**

## Tech Stack

| Category     | Technology                                                                                            |
| ------------ | ----------------------------------------------------------------------------------------------------- |
| Framework    | [React 19](https://react.dev) + [CRA](https://create-react-app.dev) via [Craco](https://craco.js.org) |
| Styling      | [Tailwind CSS 3](https://tailwindcss.com)                                                             |
| Animations   | [Motion](https://motion.dev) (Framer Motion)                                                          |
| Routing      | [Wouter](https://github.com/molefrog/wouter)                                                          |
| Lazy Loading | [Lozad.js](https://apoorv.pro/lozad.js/)                                                              |
| Images       | [Cloudinary](https://cloudinary.com)                                                                  |
| Deployment   | [Netlify](https://www.netlify.com)                                                                    |

## Getting Started

```bash
# Clone and install
git clone https://github.com/jaime00/portfolio.git
cd portfolio
npm install

# Start development (dev server + Tailwind CSS watcher)
npm run dev
```

The app runs at `http://localhost:3000`.

## Scripts

| Command             | Description                                      |
| ------------------- | ------------------------------------------------ |
| `npm run dev`       | Dev server + Tailwind CSS watcher (concurrently) |
| `npm start`         | Dev server only (Craco)                          |
| `npm run build`     | Production build                                 |
| `npm run watch:css` | Compile Tailwind CSS                             |
| `npm test`          | Run tests (Jest, watch mode)                     |

## Project Structure

```
src/
├── assets/        # Local images and static assets
├── components/    # Reusable UI components (one folder per component)
├── data/          # dataSite.json — projects, experience, site content
├── pages/         # Page components (Home, About, Projects, Experiences, Contact)
├── services/      # Data getters (getProjects, getWorkExperience, etc.)
├── styles/        # Tailwind source, generated output, and custom CSS
└── utils/         # Helper functions
```

## Contact

Reach out through the [contact form](https://jaime00portfolio.netlify.app/contact) or connect on [GitHub](https://github.com/jaime00).

## License

MIT
