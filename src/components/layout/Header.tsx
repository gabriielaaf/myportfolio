import ThemeToggle from "../ui/ThemeToggle";

function Header() {
  return (
    <header className="w-full px-8 py-8 md:px-16">
      <div className="flex items-center justify-between">

        <span className="font-display text-xl font-medium tracking-tight">
          gabrielaaf
        </span>

        <ThemeToggle />

      </div>
    </header>
  );
}

export default Header;