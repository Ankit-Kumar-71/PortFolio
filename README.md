# Ankit Kumar | Portfolio

Personal portfolio website of **Ankit Kumar**, a Full Stack Web Developer. It showcases my education, experience, tech stack, services and client projects, and includes a working contact form and a downloadable resume.

**Live site:** [ankitdeveloper.vercel.app](https://ankitdeveloper.vercel.app)

## Features

- Responsive, dark-themed design for mobile, tablet and desktop
- Animated hero section with a typewriter effect
- Education and experience timelines
- Tech stack grid with icons
- Projects gallery with category filters (HTML / CSS / JS, React, WordPress) and a detail modal
- Skills, tools and services sections
- Contact form with validation, sending messages via EmailJS
- Resume viewing from the About page
- Animated preloader, scroll progress bar and back-to-top button

## Tech Stack

| Area | Tools |
| --- | --- |
| Framework | React 19, Vite 7 |
| Routing | React Router 7 |
| Styling | Tailwind CSS 3, PostCSS, Autoprefixer |
| Animation | Framer Motion, react-simple-typewriter |
| Icons | lucide-react, react-icons |
| Email | EmailJS |
| Linting | ESLint 9 |
| Hosting | Vercel |

## Project Structure

```
.
├── public/                  # Static files (resume PDF, favicon)
├── src/
│   ├── assets/              # Images used across the site
│   ├── components/          # Navbar, Footer, Preloader, BackToTop
│   ├── pages/               # Home, About, Projects, Services, Skills, Contact
│   ├── App.jsx              # Routes and layout
│   ├── main.jsx             # App entry point
│   ├── App.css
│   └── index.css            # Tailwind directives
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── eslint.config.js
└── vercel.json              # SPA rewrite rules
```

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm

### Installation

```bash
git clone https://github.com/Ankit-Kumar-71/PortFolio.git
cd PortFolio
npm install
```

### Environment Variables

The contact form uses [EmailJS](https://www.emailjs.com/). Create a `.env` file in the project root:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Your EmailJS template should use these variables: `name`, `email` and `message`.

When deploying to Vercel, add the same three variables under **Project Settings → Environment Variables**, otherwise the contact form will not send messages.

### Run Locally

```bash
npm run dev
```

The site will be available at `http://localhost:5173`.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint on the project |

## Deployment

The project is deployed on Vercel. `vercel.json` rewrites all routes to `index.html`, so client-side routes such as `/about` and `/projects` work on page refresh.

To deploy your own copy:

1. Push the repository to GitHub.
2. Import it in Vercel.
3. Add the EmailJS environment variables.
4. Deploy. Vercel detects Vite automatically.

## Customizing

- **Personal details, education and experience:** `src/pages/Home.jsx`
- **Skills, tools and resume link:** `src/pages/About.jsx`
- **Projects:** edit the `projects` array in `src/pages/Projects.jsx` and add screenshots to `src/assets/`
- **Resume:** replace the PDF in `public/` and update the file name in `src/pages/About.jsx`
- **Colors:** the site uses Tailwind utility classes with sky (`#38BDF8`) and green (`#22C55E`) accents on a `#0F172A` background

## Contact

- Portfolio: [ankitdeveloper.vercel.app](https://ankitdeveloper.vercel.app)
- GitHub: [@Ankit-Kumar-71](https://github.com/Ankit-Kumar-71)
- LinkedIn: [ankitkumar71](https://www.linkedin.com/in/ankitkumar71)
- Email: ankitkumar20224@gmail.com
