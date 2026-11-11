import Header from "./components/layout/Header";
import Hero from "./components/sections/Hero";

import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Hero />
    </div>
  );
}

export default App;