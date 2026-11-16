import { Routes, Route } from "react-router";

import Header from "./components/layout/Header";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import HomeNavigation from "./components/home/HomeNavigation";

import WorkPage from "./pages/WorkPage";
import ExperiencePage from "./pages/ExperiencePage";
import ContactPage from "./pages/ContactPage";
import BeyondPage from "./pages/BeyondPage";

import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.app}>
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <main className={styles.home}>
              <Hero />
              <HomeNavigation />
            </main>
          }
        />

        <Route path="/about" element={<About />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/beyond-the-code" element={<BeyondPage />} />

      </Routes>
    </div>
  );
}

export default App;