import React from 'react';
import MenuIcon from './MenuIcon';
import ThemeSelector from './ThemeSelector';

const Header = () => {
  return (
    <header>
      <button>
        <MenuIcon />
      </button>
      <ThemeSelector />
    </header>
  );
};

export default Header;
