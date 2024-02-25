import { useState } from 'react';
import MainWindow from './components/MainWindow';
import HelpModal from './components/HelpModal';
import NavBar from './components/NavBar';
import Calculator from './components/Calculator';
import MachiningCalculator from './components/MachiningCalculator';
import CodeBase from './components/CodeBase';
import ToleranceCalculator from './components/ToleranceCalculator';
import Threads from './components/Threads';
import './styles/styles.css';

const helpContents = {
  main: { pl: 'Witaj w "Pomocniku operatora"! Przyciski głównego okna przeniosą Cię do poszczególnych funkcji aplikacji. Miłego skrawania!', en: 'Welcome to "Machining helper"! The main menu buttons will take you to individual application functions. Happy machining!' },
  nCalculator: { pl: 'Kalkulator do wykonywania podstawowych działań matematycznych.', en: 'Calculator for performing basic mathematical operations.' },
  mCalculator: { pl: 'Kalkulator parametrów pozwala obliczyć wartości według gotowych wzorów dla operacji frezowania, toczenia i wiercenia.', en: 'Machining calculator allows to calculate values according to ready-made formulas for milling, turning and drilling operations.' },
  cncCommands: { pl: 'To okno zawiera podstawowe polecenia do sterowania maszyn CNC. Kody mogą się różnić w zależności od modelu i producenta, dlatego zalecane jest zapoznanie się z dokumentacją techniczną używanej maszyny.', en: 'This window contains basic commands for controlling CNC machines. Codes may vary depending on the model and manufacturer, so it is recommended to read the technical documentation of the machine used.' },
  tCalculator: { pl: 'Kalkulator tolerancji służy do obliczania dopuszczalnych odchyłek wymiaru nominalnego. Wymaga to wpisania żądanego wymiaru i wybrania klasy tolerancji.', en: 'Tolerance calculator is used to calculate permissible deviations from the nominal dimension. This requires entering the desired dimension and selecting a tolerance class.' },
  hThreads: { pl: 'W tym oknie znajdziesz rozmiary wierteł do wiercenia otworów przed operacją gwintowania dla gwintów metrycznych M, metrycznych drobnozwojnych MF oraz rurowo-walcowych G.', en: 'In this window, you will find drill sizes for drilling holes prior to tapping for metric threads M, metric fine threads MF and pipe cylindrical threads G.' },
};

function App() {
  const [currentWindow, setCurrentWindow] = useState('main');
  const [language, setLanguage] = useState('pl');
  const [isHelpModalVisible, setIsHelpModalVisible] = useState(false);
  const [helpContent, setHelpContent] = useState('');

  const handleChangeLanguage = () => {
    setLanguage(lang => lang === 'pl' ? 'en' : 'pl');
  };

  const openHelpModal = () => {
    const content = helpContents[currentWindow][language];
    setHelpContent(content);
    setIsHelpModalVisible(true);
  };

  const closeHelpModal = () => {
    setIsHelpModalVisible(false);
  };

  const renderWindow = () => {
    switch(currentWindow) {
      case 'main':
        return <MainWindow setCurrentWindow={setCurrentWindow} language={language} />;
      case 'nCalculator':
        return <Calculator language={language} />;
      case 'mCalculator':
        return <MachiningCalculator language={language} />;
      case 'cncCommands':
        return <CodeBase language={language} />;
      case 'tCalculator':
        return <ToleranceCalculator language={language} />;
      case 'hThreads':
        return <Threads language={language} />;
      default:
        return <MainWindow setCurrentWindow={setCurrentWindow} language={language} />;
    }
  };

  return (
    <div>
      <NavBar
        changeLanguage={handleChangeLanguage}
        setCurrentWindow={setCurrentWindow}
        language={language}
        currentWindow={currentWindow}
        openHelpModal={openHelpModal}
      />
      <HelpModal 
        isVisible={isHelpModalVisible} 
        content={helpContent}
        onClose={closeHelpModal}
        language={language}
      />
      {renderWindow()}
    </div>
  );
}

export default App;