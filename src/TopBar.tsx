// top bar
// contains setting, helps, date and time, is visible from every window


// import React from 'react';

// interface TopBarProps {
//   onLanguageToggle: () => void;
//   onHelpClick: () => void;
//   onGoBackClick?: () => void;
// }

// const TopBar: React.FC<TopBarProps> = ({ onLanguageToggle, onHelpClick, onGoBackClick }) => {
//   const currentTime = new Date().toLocaleTimeString();
//   const currentDate = new Date().toLocaleDateString();

//   return (
//     <div className="top-bar">
//       <div className="time">{currentTime}</div>
//       <div className="date">{currentDate}</div>
//       <div className="buttons">
//         {/* Wykorzystujemy komponent LanguageToggle i przekazujemy do niego funkcję onLanguageToggle */}
//         <button onClick={onLanguageToggle}>PL/EN</button>
//         {/* <LanguageToggle toggleLanguage={onLanguageToggle} /> */}
//         <button onClick={onHelpClick}>Help</button>
//         {onGoBackClick && <button onClick={onGoBackClick}>Go Back</button>}
//       </div>
//     </div>
//   );
// };

// export default TopBar;


export {};







// import React, { useState } from 'react';
// import LanguageToggle from './languageToggle';

// interface TopBarProps {
//   onLanguageToggle: () => void;
//   onHelpClick: () => void;
//   onGoBackClick?: () => void;
// }


// const TopBar: React.FC<TopBarProps> = ({ onLanguageToggle, onHelpClick, onGoBackClick }) => {
  
//   const currentTime = new Date().toLocaleTimeString();
//   const currentDate = new Date().toLocaleDateString();

 



//   return (
//     <div className="top-bar">
//       <div className="time">{currentTime}</div>
//       <div className="date">{currentDate}</div>
//       <div className="buttons">
//         <button onClick={onLanguageToggle}></button>
//         <button onClick={onHelpClick}>Help</button>
//         {onGoBackClick && <button onClick={onGoBackClick}>Go Back</button>}
//       </div>
//     </div>
//   );
// };

// export default TopBar;

