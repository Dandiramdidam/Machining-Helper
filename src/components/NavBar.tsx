import React from 'react';

interface NavBarProps {
  onBackClick: () => void;
  onHelpClick: () => void;
  onLanguageChange: () => void;
}

const NavBar: React.FC<NavBarProps> = ({ onBackClick, onHelpClick, onLanguageChange }) => {
  return (
    <div>
      <button onClick={onBackClick}>Back</button>
      <button onClick={onHelpClick}>Help</button>
      <button onClick={onLanguageChange}>Change Language</button>
    </div>
  );
};

export default NavBar;