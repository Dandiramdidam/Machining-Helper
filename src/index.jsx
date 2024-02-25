// import React, { useState, useEffect } from 'react';
// import ReactDOM from 'react-dom/client';
// import './styles/styles.css';
// import App from './App';
// import * as serviceWorkerRegistration from './serviceWorkerRegistration';

// // const root = ReactDOM.createRoot(
// //   document.getElementById('root') as HTMLElement
// // );

// // const rootElement = document.getElementById('root');
// // if (!rootElement) throw new Error('Failed to find the root element');
// // const root = ReactDOM.createRoot(rootElement);

// // const rootElement = document.getElementById('root'); createRoot(rootElement);
// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// serviceWorkerRegistration.register();



// // Dodanie obsługi beforeinstallprompt
// const Index = () => {
//   const [deferredPrompt, setDeferredPrompt] = useState(null);

//   useEffect(() => {
//     const handleBeforeInstallPrompt = (e) => {
//       // Zapobiegaj domyślnemu szybkiemu monitowi
//       e.preventDefault();
//       // Zachowaj zdarzenie, aby umożliwić wywołanie monitu później
//       setDeferredPrompt(e);
//       // Możesz tutaj zaktualizować stan, aby wyświetlić przycisk instalacji
//     };

//     window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

//     // Opcjonalnie: Nasłuchuj zdarzenia appinstalled, jeśli chcesz zrobić coś po instalacji
//     window.addEventListener('appinstalled', () => {
//       // Aplikacja została zainstalowana
//       console.log('Aplikacja została zainstalowana.');
//       // Tutaj możesz ukryć przycisk instalacji lub zaktualizować UI
//     });

//     return () => {
//       window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
//     };
//   }, []);

//   // Funkcja wywołująca monit instalacji
//   const promptInstall = () => {
//     if (deferredPrompt) {
//       deferredPrompt.prompt();
//       deferredPrompt.userChoice.then((choiceResult) => {
//         if (choiceResult.outcome === 'accepted') {
//           console.log('Użytkownik zaakceptował monit instalacji');
//         } else {
//           console.log('Użytkownik odrzucił monit instalacji');
//         }
//         setDeferredPrompt(null);
//       });
//     }
//   };

//   return (
//     <div>
//       {/* Tutaj umieść przycisk instalacji i zwiąż go z funkcją promptInstall */}
//       <button onClick={promptInstall} style={{ display: deferredPrompt ? 'block' : 'none' }}>
//         Zainstaluj aplikację
//       </button>
//     </div>
//   );
// };

// // // Użyj zmodyfikowanego komponentu Index zamiast bezpośredniego użycia App, jeśli potrzebujesz umieścić logikę instalacji na najwyższym poziomie
// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <Index />
//   </React.StrictMode>
// );

import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './styles/styles.css';
// import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

// Komponent App, który zawiera logikę instalacji PWA
const App = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault(); // Zapobiega domyślnemu wyświetleniu monitu instalacyjnego
      setDeferredPrompt(e); // Zapisuje zdarzenie, aby umożliwić jego późniejsze wywołanie
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt(); // Wywołuje monit instalacyjny
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('Użytkownik zaakceptował instalację aplikacji.');
      } else {
        console.log('Użytkownik odrzucił instalację aplikacji.');
      }
      setDeferredPrompt(null); // Resetuje zdarzenie, aby nie można było go ponownie wywołać
    });
  };

  return (
    <div>
      {deferredPrompt && (
        <button onClick={handleInstallClick} style={{ display: 'block', margin: '20px auto' }}>
          Zainstaluj aplikację
        </button>
      )}
    </div>
  );
};

// Tworzy korzeń aplikacji i renderuje komponent App
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Rejestracja Service Workera
serviceWorkerRegistration.register();
