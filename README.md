# 🚀 Microfrontend Character Explorer

A complete microfrontend application built with React, TypeScript, Webpack Module Federation, styled-components (BEM), and i18next for internationalization.

---

## 📁 Project Structure

```
root/
├── host-app/                    # Main host application (Port 3000)
│   ├── src/
│   ├── styles/
│   ├── Dockerfile
│   └── ...
├── characters-rick-and-morty/   # Rick & Morty microfrontend (Port 3001)
│   ├── src/
│   ├── styles/
│   ├── Dockerfile
│   └── ...
├── characters-harry-potter/     # Harry Potter microfrontend (Port 3002)
│   ├── src/
│   ├── styles/
│   ├── Dockerfile
│   └── ...
├── docker-compose.yml           # Docker orchestration
└── README.md                    # Project documentation
```

Each microfrontend and the host-app are fully independent React projects with their own dependencies, Dockerfile, and configuration.

---

## 🌐 Live URLs (Default)

| App                | URL                        |
|--------------------|----------------------------|
| Host App           | http://localhost:3000      |
| Rick & Morty MF    | http://localhost:3001      |
| Harry Potter MF    | http://localhost:3002      |

---

## 🛠️ Local Installation & Development

1. **Install dependencies for all projects:**
   ```bash
   npm run install-all
   # or manually:
   cd host-app && npm install
   cd ../characters-rick-and-morty && npm install
   cd ../characters-harry-potter && npm install
   ```

2. **Start all services:**
   ```bash
   npm start
   # or manually in three terminals:
   cd characters-rick-and-morty && npm start
   cd characters-harry-potter && npm start
   cd host-app && npm start
   ```

---

## 🐳 Docker Usage

1. **Build and run all services with Docker Compose:**
   ```bash
   docker-compose up --build
   ```
2. **Stop all services:**
   ```bash
   docker-compose down
   ```

Each service is containerized and exposes its own port. The host-app consumes the microfrontends via Module Federation.

---

## 🧪 Running Tests

Each project includes unit tests with Jest and React Testing Library.

- **Run tests for a specific project:**
  ```bash
  cd host-app && npm test
  cd ../characters-rick-and-morty && npm test
  cd ../characters-harry-potter && npm test
  ```
- **Check test coverage:**
  ```bash
  npm run test:coverage
  ```

---

## 🌍 Internationalization (i18n)

- Uses **i18next** and **react-i18next** for English and Spanish support.
- Language can be switched at runtime via the UI.
- All microfrontends receive the current language as a prop and update their content accordingly.

---

## 🎨 Styling & Best Practices

- **styled-components** for all component styling, following the BEM naming convention.
- No Tailwind or utility classes; all styles are component-scoped.
- Each UI component is organized in its own folder for clarity and scalability.
- Follows SOLID principles and clean code practices.

---

## 🧩 Design Patterns & SOLID Principles

- **Microfrontends:** The architecture is based on microfrontends, allowing independence, scalability, and decoupled deployment for each domain.
- **Separation of concerns:** Each component and hook has a single responsibility, following the SRP principle of SOLID.
- **Open/Closed:** Components and hooks are designed to be extended via props, without modifying their base code.
- **Dependency injection:** Microfrontends receive language and other data as props, making testing and reuse easier.
- **Reusable components:** The UI is composed of decoupled, reusable components, following design patterns like Container/Presentational.
- **Readability and maintainability:** The code follows clear conventions, descriptive names, and a modular structure.

## ♿ Accessibility

- **Semantic tags:** Semantic tags like `<header>`, `<button>`, `<label>`, `<select>`, and `<option>` are used to improve screen reader navigation.
- **Roles and ARIA:** The language selector includes `role="img"` and `aria-label` for the icon, and buttons use `aria-label` to describe their action.
- **Contrast and focus:** Styles ensure good text contrast and visible focus states on interactive controls.
- **Keyboard navigation:** All controls (buttons, selectors) are accessible via keyboard.
- **Alt text:** Character images include descriptive `alt` text with the character's name.

To further improve accessibility, it is recommended to audit with tools like Lighthouse or axe and consider additional ARIA tags based on user feedback.

---

## 📊 Lighthouse Audit Results

- **Accessibility:** 100/100 (Excellent)
- **Performance:** 49/100 (Can be improved by optimizing images, scripts, and reducing bundle size. Some impact may be due to browser extensions.)
- **Best Practices:** 79/100 (Good, but can be improved by following Lighthouse suggestions.)
- **SEO:** 90/100 (Very good, minor improvements possible.)

> The application achieves a perfect score in accessibility, ensuring a great experience for all users. Performance and best practices can be further improved by following Lighthouse recommendations. The audit was performed with Chrome Lighthouse; see the screenshot below for reference.

![Lighthouse Accessibility 100](image.png)

---

## ⚙️ Technologies Used

- React 18
- TypeScript
- Webpack 5 + Module Federation
- styled-components (BEM)
- i18next / react-i18next
- Jest & React Testing Library
- Docker & Docker Compose

---

## 📦 How to Extend

- Add new microfrontends by creating a new folder and configuring Module Federation.
- Add new languages by extending the i18n resource files.
- Add new features or UI components in the `components/ui/` folder structure.

---

## 👤 Author & Contact

- Challenge by Iván Meyer
