import React, { useState } from 'react';
import NavBar from './NavBar';
// import App from './App';

// const Window1: React.FC = () => {
//   return (
//     <div>
//       <h2>Window 1</h2>
//       <p>This is the content of Window 1.</p>
//     </div>
//   );
// };

// export default Window1;

enum Language {
    English = 'english',
    Polish = 'polish',
}

interface WindowProps {
    language: Language;
}
  
const Window1: React.FC<WindowProps> = () => {

    const [language, setLanguage] = useState<Language>(Language.English);


    const handleBackClick = () => {
        // Implementacja powrotu do poprzedniego okna, jeśli to możliwe
      };
    
      const handleHelpClick = () => {
        // Implementacja wyświetlania pomocy zależnie od aktualnego okna
      };
    
      const handleLanguageChange = () => {
        setLanguage(prevLanguage =>
          prevLanguage === Language.English ? Language.Polish : Language.English
        );
      };

    return (
        <div>
            <NavBar 
                onBackClick={handleBackClick} 
                onHelpClick={handleHelpClick} 
                onLanguageChange={handleLanguageChange} 
            />
            <h2>{language === Language.English ? 'Window 1' : 'Okno 1'}</h2>
            <p>{language === Language.English ? 'This is the content of Window 1.' : 'To jest zawartość okna 1.'}</p>
        </div>
    );
};
  
export default Window1;