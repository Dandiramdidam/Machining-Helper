const HelpModal = ({ isVisible, content, onClose, language }) => {
  if (!isVisible) return null;

  return (
    <div className='help'>  
      {content}
      <button className='helpclose' onClick={onClose}>{language === 'pl' ? 'Zamknij' : 'Close'}</button>
    </div>
  );
};

export default HelpModal;