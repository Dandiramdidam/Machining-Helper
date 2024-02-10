import React, { useState } from 'react';
import NavBar from './NavBar';
import Window1 from './Window1';
import Window2 from './Window2';
import Window3 from './Window3';
import Window4 from './Window4';

// enum Language {
//   English = 'english',
//   Polish = 'polish',
// }

// const App: React.FC = () => {
//   const [currentWindow, setCurrentWindow] = useState<string>('window1');
//   const [language, setLanguage] = useState<Language>(Language.English);

//   const handleBackClick = () => {
//     // Implementacja powrotu do poprzedniego okna, jeśli to możliwe
//   };

//   const handleHelpClick = () => {
//     // Implementacja wyświetlania pomocy zależnie od aktualnego okna
//   };

//   const handleLanguageChange = () => {
//     setLanguage(prevLanguage =>
//       prevLanguage === Language.English ? Language.Polish : Language.English
//     );
//   };

//   return (
//     <div>
//       <NavBar 
//         onBackClick={handleBackClick} 
//         onHelpClick={handleHelpClick} 
//         onLanguageChange={handleLanguageChange} 
//       />
//       {currentWindow === 'window1' && <Window1 />}
//       {currentWindow === 'window2' && <Window2 />}
//       {currentWindow === 'window3' && <Window3 />}
//       {currentWindow === 'window4' && <Window4 />}
//     </div>
//   );
// };

// export default App;

enum Language {
  English = 'english',
  Polish = 'polish',
}

const App: React.FC = () => {
  
  
  
  const [currentWindow, setCurrentWindow] = useState<string>('window1');
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
      <div>
        <button onClick={() => setCurrentWindow('window1')}>Go to Window 1</button>
        <button onClick={() => setCurrentWindow('window2')}>Go to Window 2</button>
        <button onClick={() => setCurrentWindow('window3')}>Go to Window 3</button>
        <button onClick={() => setCurrentWindow('window4')}>Go to Window 4</button>
      </div>
      {currentWindow === 'window1' && <Window1 language={language} />}
      {currentWindow === 'window2' && <Window2 language={language} />}
      {currentWindow === 'window3' && <Window3 language={language} />}
      {currentWindow === 'window4' && <Window4 language={language} />}
    </div>
  );
};

export default App;