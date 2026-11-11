import Header from "./components/layout/Header";
import Hero from "./components/sections/Hero";

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-[#101010] text-[#F5F5F5]">
      <Header />
      <Hero />
    </div>
  );
}

export default App;