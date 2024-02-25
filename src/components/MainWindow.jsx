const MainWindow = ({ setCurrentWindow, language }) => {

  return (
    <div className='whole'>
      <div className='headline'>
        {language === 'pl' ? 'Pomocnik operatora' : 'Machining helper'}
      </div>
      <div className='mainopts'>
        <div className='mainopt'>
          <button className='mainbtn' onClick={() => setCurrentWindow('nCalculator')}>
            {language === 'pl' ? 'Kalkulator' : 'Calculator'}
          </button>
        </div>
        <div className='mainopt'>
          <button className='mainbtn' onClick={() => setCurrentWindow('mCalculator')}>
            {language === 'pl' ? 'Kalkulator parametrów' : 'Machining calculator'}
          </button>
        </div>
        <div className='mainopt'>
          <button className='mainbtn' onClick={() => setCurrentWindow('cncCommands')}>
            {language === 'pl' ? 'Polecenia dla urządzeń CNC' : 'Code for CNC machines'}
          </button>
        </div>
        <div className='mainopt'>
          <button className='mainbtn' onClick={() => setCurrentWindow('tCalculator')}>
            {language === 'pl' ? 'Kalkulator tolerancji' : 'Tolerance calculator'}
          </button>
        </div>
        <div className='mainopt'>
          <button className='mainbtn' onClick={() => setCurrentWindow('hThreads')}>
            {language === 'pl' ? 'Rozmiar otworu pod gwint' : 'Hole sizes for threads'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainWindow;