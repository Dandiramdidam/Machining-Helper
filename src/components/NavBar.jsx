const NavBar = ({ changeLanguage, setCurrentWindow, language, currentWindow, openHelpModal }) => {
  const currentDate = new Date().toLocaleDateString(language === 'pl' ? 'pl-PL' : 'en-US');

  return (
    <div className='navbar'>
      <div>
        <button className='navbarbtn navbarbtnb' onClick={() => setCurrentWindow('main')} disabled={currentWindow === 'main'}>&#x2190;</button>
      </div>
      <div>
        <button className='navbarbtn navbarbtnh' onClick={() => openHelpModal()}>?</button>
      </div>
      <div>
        <button className='navbarbtn navbarbtnl' onClick={changeLanguage}>PL/EN</button>
      </div>
      <div className='date'>
        <span>{currentDate}</span>
      </div>
    </div>
  );
};

export default NavBar;