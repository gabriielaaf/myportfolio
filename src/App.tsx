import { Routes, Route } from "react-router";

import Header from "./components/layout/Header";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";

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
            </main>
          }
        />

        <Route
          path="/about"
          element={
            <main>
              <About />
            </main>
          }
        />
      </Routes>
    </div>
  );
}

export default App;