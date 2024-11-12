import HeaderName from './HeaderName';
// import LanguageChanger from './LanguageChanger';
import { Navbar } from './Navbar';
import { NavbarMobile } from './NavbarMobile';
import ThemeToggle from './ThemeToggle';

export function Header() {
  return (
    <div className="flex items-center py-4 md:py-8 md:px-16 px-8 gap-2 justify-end">
      <HeaderName />
      <Navbar />
      <ThemeToggle />
      {/* <LanguageChanger /> */}
      <NavbarMobile />
    </div>
  );
}
