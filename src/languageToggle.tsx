// import React, { useState } from 'react';

// const LanguageToggle: React.FC = () => {
  
//     const [language, setLanguage] = useState<'pl' | 'en'>('pl');

//     const toggleLanguage = () => {
//         setLanguage(prevLanguage => (prevLanguage === 'pl' ? 'en' : 'pl'));
//         console.log('hi');
//     };

//   return (
//     <div>
//       <button onClick={toggleLanguage}>
//         {language === 'pl' ? 'en' : 'pl'}
//       </button>
//     </div>
//   );
// };

// export default LanguageToggle;

export {};









// stareeeeee

// //languageswitch
// import React, { useState } from 'react';


// type LanguageState = [language: 'pl' | 'en', setLanguage: React.Dispatch<React.SetStateAction<'pl' | 'en'>>];


// const toggleLanguage: React.FC = () => {
    
//     const {language, setLanguage} = useState<'pl' | 'en'>('pl');

//     const toggleLanguage = () => {
//     setLanguage(language === 'en' ? 'pl': 'en');
//     };

//     return (
//         <div>
//           <button onClick={toggleLanguage}>
//             {language === 'en' ? 'Polski' : 'English'}
//           </button>
//         </div>
//       );
// };
    

// export default toggleLanguage;



// import React from 'react';

// interface LanguageToggleProps {
//   onLanguageToggle: () => void; // Dodajemy deklarację typu dla propa onLanguageToggle
// }

// const LanguageToggle: React.FC<LanguageToggleProps> = ({ onLanguageToggle }) => {
//   return (
//     <div>
//       <button onClick={onLanguageToggle}>
//         {/* Tutaj możemy umieścić tekst przycisku */}
//         Toggle Language
//       </button>
//     </div>
//   );
// };

// export default LanguageToggle;
