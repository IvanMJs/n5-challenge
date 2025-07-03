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
