import { useState } from 'react';

const gCodes = {
  G00: { pl: 'Pozycjonowanie w ruchu szybkim', en: 'Rapid positioning' },
  G01: { pl: 'Interpolacja liniowa', en: 'Linear interpolation' },
  G02: { pl: 'Interpolacja okrężna zgodnie z ruchem wskazówek zegara', en: 'Circular interpolation clockwise' },
  G03: { pl: 'Interpolacja okrężna przeciwnie do ruchu wskazówek zegara', en: 'Circular interpolation counterclockwise' },
  G04: { pl: 'Sterowana przerwa', en: 'Dwell' },
  G09: { pl: 'Dokładne zatrzymanie', en: 'Exact stop' },
  G12: { pl: 'Zagłębienie kołowe zgodnie z ruchem wskazówek zegara', en: 'Clockwise circular pocket' },
  G13: { pl: 'Zagłębienie kołowe przeciwnie do ruchu wskazówek zegara', en: 'Counterclockwise circular pocket' },
  G17: { pl: 'Wybór płaszczyzny XY', en: 'XY plane selection' },
  G18: { pl: 'Wybór płaszczyzny ZX', en: 'ZX plane selection' },
  G19: { pl: 'Wybór płaszczyzny YZ', en: 'YZ plane selection' },
  G20: { pl: 'Programowanie w calach', en: 'Programming in inches' },
  G21: { pl: 'Programowanie w milimetrach', en: 'Programming in millimeters' },
  G40: { pl: 'Odwołanie kompensacji promeinia frezu (G41 i G42)', en: 'Tool nose compensation cancel (G41 and G42)' },
  G41: { pl: 'Kompensacja promienia frezu lewostronna', en: 'Tool nose compensation left' },
  G42: { pl: 'Kompensacja promienia frezu prawostronna', en: 'Tool nose compensation right' },
  G43: { pl: 'Kompensacja długości narzędzia +', en: 'Tool length compensation +' },
  G44: { pl: 'Kompensacja długości narzędzia -', en: 'Tool length compensation -' },
  G49: { pl: 'Odwołanie kompensacji długości narzędzia (G43 i G44)', en: 'Tool length compensation cancel (G43 and G44)' },
  G54: { pl: 'Wybranie układu współrzędnych 1-6 (G54-G59)', en: 'Work offset coordinate position 1-6 (G54-G59)' },
  
};

const rCodes = {
  T: { pl: 'Wybór narzędzia', en: 'Tool select' },
  S: { pl: 'Ustawienie prędkości wrzeciona', en: 'Spindle speed set' },
  X: { pl: 'Położenie w osi "X"', en: 'Position in the "X" axis' },
  Y: { pl: 'Położenie w osi "Y"', en: 'Position in the "Y" axis' },
  Z: { pl: 'Położenie w osi "Z"', en: 'Position in the "Z" axis' },
  D: { pl: 'Korekcja narzędzia', en: 'Tool offset' },
  M00: { pl: 'Bezwarunkowe zatrzymanie programu', en: 'Program stop' },
  M01: { pl: 'Opcjonalne zatrzymanie', en: 'Optional stop' },
  M02: { pl: 'Koniec programu', en: 'End of program' },
  M03: { pl: 'Włączenie wrzeciona zgodnie z ruchem wskazówek zegara', en: 'Spindle on clockwise rotation' },
  M04: { pl: 'Włączenie wrzeciona przeciwnie do ruchu wskazówek zegara', en: 'Spindle on counterclockwise rotation' },
  M05: { pl: 'Wyłączenie wrzeciona', en: 'Spindle stop' },
  M06: { pl: 'Zmiana narzędzia', en: 'Tool change' },
  M07: { pl: 'Włączenie chłodzenia cieczą (niskie natężenie)', en: 'Coolant on (mist)' },
  M08: { pl: 'Włączenie chłodzenia cieczą (wysokie natężenie)', en: 'Coolant on (flood)' },
  M09: { pl: 'Wyłączenie chłodzenia cieczą', en: 'Coolant off' },
  M10: { pl: 'Otwarcie szczęk', en: 'Pallet clamp on' },
  M11: { pl: 'Zamknięcie szczęk', en: 'Pallet clamp off' },
  M13: { pl: 'Włączenie prawych obrotów wrzeciona', en: 'Turning on the right spindle rotation' },
  M14: { pl: 'Włączenie lewych obrotów wrzeciona', en: 'Turning on the left spindle rotation' },
  M30: { pl: 'Koniec programu i „przewinięcie” do początku', en: 'End of program, rewind and reset modes' },

};


const CodeBase = ({ language }) => {
  const [currentCodeType, setCurrentCodeType] = useState('G');

  const codesToDisplay = currentCodeType === 'G' ? gCodes : rCodes;

  const codesList = Object.entries(codesToDisplay).map(([code, description]) => (
    <li className='codeitem' key={code}>{code}: {description[language]}</li>
  ));

  return (
    <div className='whole'>
      <div className='headline'>
        {language === 'pl' ? 'Polecenia dla urządzeń CNC' : 'Code for CNC machines'}
      </div>
      <div className='codebuttons'>
        <button className='codebutton' onClick={() => setCurrentCodeType('G')}>G</button>
        <button className='codebutton' onClick={() => setCurrentCodeType('R')}>{language === 'pl' ? 'Inne' : 'Other'}</button>
      </div>
      <div>
        <ul className='codelist'>{codesList}</ul>
      </div>
    </div>
  );
};

export default CodeBase;
