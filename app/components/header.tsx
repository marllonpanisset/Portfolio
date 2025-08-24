// components/header.tsx
'use client'; // Marks the component as a client component, allowing the use of state (useState).

import { useState } from 'react'; // Imports the 'useState' hook from React to manage state.
import { Navbar } from './nav'; // Imports the navigation component, used for both desktop and mobile.
import { ThemeSwitcher } from './ThemeSwitcher'; // Imports the theme switcher component.

// The main header component of the page.
export function Header() {
  // 'useState' to control whether the mobile menu is open or closed. The initial value is 'false'.
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu state.
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    // 'header' fixed at the top of the page, with classes for style, shadow, and transitions.
    <header className="fixed top-0 w-full z-50 bg-[var(--color-bg-header)] text-[var(--color-text-header)] shadow-md transition-all duration-300">
      {/* Main container for the header content. Horizontal padding (px) has been adjusted for md screens and above. */}
      <div className="flex items-center justify-between max-w-7xl mx-auto px-6 md:px-8 py-4 md:py-6">
        {/* Site title that acts as a link to the homepage. */}
        <h1 className="text-2xl font-semibold tracking-wide">Marllon Panisset</h1>

        {/* Container for header buttons on screens smaller than 'md'. */}
        <div className="flex items-center gap-4 md:hidden">
          {/* Component that allows switching between light and dark themes. */}
          <ThemeSwitcher />
          {/* Button to open and close the mobile menu. */}
          <button
            onClick={toggleMenu} // Calls the 'toggleMenu' function on click.
            className="z-50 focus:outline-none"
            aria-label="Toggle menu" // Accessibility attribute.
          >
            {/* Animated hamburger icon. The lines are transformed into an 'X' when the menu is open. */}
            <div className="w-6 h-0.5 bg-[var(--color-text-primary)] transition-transform duration-300 ease-in-out"
              style={{ transform: isMenuOpen ? 'rotate(45deg) translate(3px, 5px)' : 'none' }}></div>
            <div className="w-6 h-0.5 bg-[var(--color-text-primary)] transition-opacity duration-300 ease-in-out my-1"
              style={{ opacity: isMenuOpen ? 0 : 1 }}></div>
            <div className="w-6 h-0.5 bg-[var(--color-text-primary)] transition-transform duration-300 ease-in-out"
              style={{ transform: isMenuOpen ? 'rotate(-45deg) translate(4px, -6px)' : 'none' }}></div>
          </button>
        </div>

        {/* Desktop menu - visivel on 'md' screens and larger. */}
        <div className="hidden md:flex items-center gap-4">
          {/* Navigation component. 'onLinkClick' is passed to ensure the mobile menu closes. */}
          <Navbar onLinkClick={() => setIsMenuOpen(false)} />
          <ThemeSwitcher />
        </div>
      </div>

      {/* Full-screen mobile menu. */}
      {/* The menu is fixed and takes up the entire screen. The 'translate-x-full' class hides it off-screen. */}
      {/* 'isMenuOpen ? 'translate-x-0' : 'translate-x-full' ' makes it slide in or out. */}
    <div className={`fixed top-0 left-0 w-full h-full bg-black/65 backdrop-blur z-200 transition-opacity duration-1000 ease-in-out ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className="px-4 flex items-center min-h-screen">
          {/* The navigation component is rendered here for the mobile menu. */}
          {/* Added opacity class to the main container to control visibility. */}
          <Navbar onLinkClick={() => setIsMenuOpen(false)} isMobileMenu={true} />
        </div>
      </div>
    </header>
  );
}
