import Header from "./components/layout/Header";
import Hero from "./components/sections/Hero";

function App() {
  return (
    <div
      className="flex min-h-screen flex-col
                 bg-[var(--background)]
                 text-[var(--foreground)]
                 transition-colors duration-300"
    >
      <Header />
      <Hero />
    </div>
  );
}

export default App;