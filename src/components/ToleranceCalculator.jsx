import { useState, useEffect } from 'react';

const tolerances = {
  hole: {
    "E8": [{ upTo: 3, deviation: { min: 0.014, max: 0.028 } }, { upTo: 6, deviation: { min: 0.02, max: 0.038 } }, { upTo: 10, deviation: { min: 0.025, max: 0.047 } }, { upTo: 18, deviation: { min: 0.032, max: 0.059 } }, { upTo: 30, deviation: { min: 0.04, max: 0.073 } }, { upTo: 50, deviation: { min: 0.05, max: 0.089 } }, { upTo: 80, deviation: { min: 0.06, max: 0.106 } }, { upTo: 120, deviation: { min: 0.072, max: 0.125 } }],
    "E9": [{ upTo: 3, deviation: { min: 0.014, max: 0.039 } }, { upTo: 6, deviation: { min: 0.02, max: 0.05 } }, { upTo: 10, deviation: { min: 0.025, max: 0.061 } }, { upTo: 18, deviation: { min: 0.032, max: 0.075 } }, { upTo: 30, deviation: { min: 0.04, max: 0.092 } }, { upTo: 50, deviation: { min: 0.05, max: 0.112 } }, { upTo: 80, deviation: { min: 0.06, max: 0.134 } }, { upTo: 120, deviation: { min: 0.072, max: 0.159 } }],
    "F7": [{ upTo: 3, deviation: { min: 0.006, max: 0.016 } }, { upTo: 6, deviation: { min: 0.01, max: 0.022 } }, { upTo: 10, deviation: { min: 0.013, max: 0.028 } }, { upTo: 18, deviation: { min: 0.016, max: 0.034 } }, { upTo: 30, deviation: { min: 0.02, max: 0.041 } }, { upTo: 50, deviation: { min: 0.025, max: 0.05 } }, { upTo: 80, deviation: { min: 0.03, max: 0.06 } }, { upTo: 120, deviation: { min: 0.036, max: 0.071 } }],
    "F8": [{ upTo: 3, deviation: { min: 0.006, max: 0.02 } }, { upTo: 6, deviation: { min: 0.01, max: 0.028 } }, { upTo: 10, deviation: { min: 0.013, max: 0.035 } }, { upTo: 18, deviation: { min: 0.016, max: 0.043 } }, { upTo: 30, deviation: { min: 0.02, max: 0.053 } }, { upTo: 50, deviation: { min: 0.025, max: 0.064 } }, { upTo: 80, deviation: { min: 0.03, max: 0.076 } }, { upTo: 120, deviation: { min: 0.036, max: 0.09 } }],
    "H5": [{ upTo: 3, deviation: { min: 0, max: 0.004 } }, { upTo: 6, deviation: { min: 0, max: 0.005 } }, { upTo: 10, deviation: { min: 0, max: 0.006 } }, { upTo: 18, deviation: { min: 0, max: 0.008 } }, { upTo: 30, deviation: { min: 0, max: 0.009 } }, { upTo: 50, deviation: { min: 0, max: 0.011 } }, { upTo: 80, deviation: { min: 0, max: 0.013 } }, { upTo: 120, deviation: { min: 0, max: 0.015 } }],
    "H6": [{ upTo: 3, deviation: { min: 0, max: 0.006 } }, { upTo: 6, deviation: { min: 0, max: 0.008 } }, { upTo: 10, deviation: { min: 0, max: 0.009 } }, { upTo: 18, deviation: { min: 0, max: 0.011 } }, { upTo: 30, deviation: { min: 0, max: 0.013 } }, { upTo: 50, deviation: { min: 0, max: 0.016 } }, { upTo: 80, deviation: { min: 0, max: 0.019 } }, { upTo: 120, deviation: { min: 0, max: 0.022 } }],
    "H7": [{ upTo: 3, deviation: { min: 0, max: 0.01 } }, { upTo: 6, deviation: { min: 0, max: 0.012 } }, { upTo: 10, deviation: { min: 0, max: 0.015 } }, { upTo: 18, deviation: { min: 0, max: 0.018 } }, { upTo: 30, deviation: { min: 0, max: 0.021 } }, { upTo: 50, deviation: { min: 0, max: 0.025 } }, { upTo: 80, deviation: { min: 0, max: 0.03 } }, { upTo: 120, deviation: { min: 0, max: 0.035 } }],
    "H8": [{ upTo: 3, deviation: { min: 0, max: 0.014 } }, { upTo: 6, deviation: { min: 0, max: 0.018 } }, { upTo: 10, deviation: { min: 0, max: 0.022 } }, { upTo: 18, deviation: { min: 0, max: 0.027 } }, { upTo: 30, deviation: { min: 0, max: 0.033 } }, { upTo: 50, deviation: { min: 0, max: 0.039 } }, { upTo: 80, deviation: { min: 0, max: 0.046 } }, { upTo: 120, deviation: { min: 0, max: 0.054 } }],
    "H9": [{ upTo: 3, deviation: { min: 0, max: 0.025 } }, { upTo: 6, deviation: { min: 0, max: 0.03 } }, { upTo: 10, deviation: { min: 0, max: 0.036 } }, { upTo: 18, deviation: { min: 0, max: 0.043 } }, { upTo: 30, deviation: { min: 0, max: 0.052 } }, { upTo: 50, deviation: { min: 0, max: 0.062 } }, { upTo: 80, deviation: { min: 0, max: 0.074 } }, { upTo: 120, deviation: { min: 0, max: 0.087 } }],
    "H10": [{ upTo: 3, deviation: { min: 0, max: 0.04 } }, { upTo: 6, deviation: { min: 0, max: 0.048 } }, { upTo: 10, deviation: { min: 0, max: 0.058 } }, { upTo: 18, deviation: { min: 0, max: 0.07 } }, { upTo: 30, deviation: { min: 0, max: 0.084 } }, { upTo: 50, deviation: { min: 0, max: 0.1 } }, { upTo: 80, deviation: { min: 0, max: 0.12 } }, { upTo: 120, deviation: { min: 0, max: 0.14 } }],
    "H11": [{ upTo: 3, deviation: { min: 0, max: 0.06 } }, { upTo: 6, deviation: { min: 0, max: 0.075 } }, { upTo: 10, deviation: { min: 0, max: 0.09 } }, { upTo: 18, deviation: { min: 0, max: 0.11 } }, { upTo: 30, deviation: { min: 0, max: 0.13 } }, { upTo: 50, deviation: { min: 0, max: 0.16 } }, { upTo: 80, deviation: { min: 0, max: 0.19 } }, { upTo: 120, deviation: { min: 0, max: 0.22 } }],
    "K7": [{ upTo: 3, deviation: { min: -0.01, max: 0 } }, { upTo: 6, deviation: { min: -0.009, max: 0.003 } }, { upTo: 10, deviation: { min: -0.01, max: 0.005 } }, { upTo: 18, deviation: { min: -0.012, max: 0.006 } }, { upTo: 30, deviation: { min: -0.015, max: 0.006 } }, { upTo: 50, deviation: { min: -0.018, max: 0.007 } }, { upTo: 80, deviation: { min: -0.021, max: 0.009 } }, { upTo: 120, deviation: { min: -0.025, max: 0.01 } }],
    "M7": [{ upTo: 3, deviation: { min: -0.012, max: -0.002 } }, { upTo: 6, deviation: { min: -0.012, max: 0 } }, { upTo: 10, deviation: { min: -0.015, max: 0 } }, { upTo: 18, deviation: { min: -0.018, max: 0 } }, { upTo: 30, deviation: { min: -0.021, max: 0 } }, { upTo: 50, deviation: { min: -0.025, max: 0 } }, { upTo: 80, deviation: { min: -0.03, max: 0 } }, { upTo: 120, deviation: { min: -0.035, max: 0 } }],
    "N7": [{ upTo: 3, deviation: { min: -0.014, max: -0.004 } }, { upTo: 6, deviation: { min: -0.016, max: -0.004 } }, { upTo: 10, deviation: { min: -0.019, max: -0.004 } }, { upTo: 18, deviation: { min: -0.023, max: -0.005 } }, { upTo: 30, deviation: { min: -0.028, max: -0.007 } }, { upTo: 50, deviation: { min: -0.033, max: -0.008 } }, { upTo: 80, deviation: { min: -0.039, max: -0.009 } }, { upTo: 120, deviation: { min: -0.045, max: -0.01 } }],
    "P7": [{ upTo: 3, deviation: { min: -0.016, max: -0.006 } }, { upTo: 6, deviation: { min: -0.02, max: -0.008 } }, { upTo: 10, deviation: { min: -0.024, max: -0.009 } }, { upTo: 18, deviation: { min: -0.029, max: -0.011 } }, { upTo: 30, deviation: { min: -0.035, max: -0.014 } }, { upTo: 50, deviation: { min: -0.042, max: -0.017 } }, { upTo: 80, deviation: { min: -0.051, max: -0.021 } }, { upTo: 120, deviation: { min: -0.059, max: -0.024 } }],
  },
  shaft: {
    "d9": [{ upTo: 3, deviation: { min: -0.045, max: -0.02 } }, { upTo: 6, deviation: { min: -0.06, max: -0.03 } }, { upTo: 10, deviation: { min: -0.076, max: -0.04 } }, { upTo: 18, deviation: { min: -0.093, max: -0.05 } }, { upTo: 30, deviation: { min: -0.117, max: -0.065 } }, { upTo: 50, deviation: { min: -0.142, max: -0.08 } }, { upTo: 80, deviation: { min: -0.174, max: -0.1 } }, { upTo: 120, deviation: { min: -0.207, max: -0.12 } }],
    "e8": [{ upTo: 3, deviation: { min: -0.028, max: -0.014 } }, { upTo: 6, deviation: { min: -0.038, max: -0.02 } }, { upTo: 10, deviation: { min: -0.047, max: -0.025 } }, { upTo: 18, deviation: { min: -0.059, max: -0.032 } }, { upTo: 30, deviation: { min: -0.073, max: -0.04 } }, { upTo: 50, deviation: { min: -0.089, max: -0.05 } }, { upTo: 80, deviation: { min: -0.106, max: -0.06 } }, { upTo: 120, deviation: { min: -0.126, max: -0.072 } }],
    "f6": [{ upTo: 3, deviation: { min: -0.012, max: -0.006 } }, { upTo: 6, deviation: { min: -0.018, max: -0.01 } }, { upTo: 10, deviation: { min: -0.022, max: -0.013 } }, { upTo: 18, deviation: { min: -0.027, max: -0.016 } }, { upTo: 30, deviation: { min: -0.033, max: -0.02 } }, { upTo: 50, deviation: { min: -0.041, max: -0.025 } }, { upTo: 80, deviation: { min: -0.049, max: -0.03 } }, { upTo: 120, deviation: { min: -0.058, max: -0.036 } }],
    "f7": [{ upTo: 3, deviation: { min: -0.012, max: -0.006 } }, { upTo: 6, deviation: { min: -0.022, max: -0.01 } }, { upTo: 10, deviation: { min: -0.028, max: -0.013 } }, { upTo: 18, deviation: { min: -0.034, max: -0.016 } }, { upTo: 30, deviation: { min: -0.041, max: -0.02 } }, { upTo: 50, deviation: { min: -0.05, max: -0.025 } }, { upTo: 80, deviation: { min: -0.06, max: -0.03 } }, { upTo: 120, deviation: { min: -0.071, max: -0.036 } }],
    "g6": [{ upTo: 3, deviation: { min: -0.008, max: -0.002 } }, { upTo: 6, deviation: { min: -0.012, max: -0.004 } }, { upTo: 10, deviation: { min: -0.014, max: -0.005 } }, { upTo: 18, deviation: { min: -0.017, max: -0.006 } }, { upTo: 30, deviation: { min: -0.02, max: -0.007 } }, { upTo: 50, deviation: { min: -0.025, max: -0.009 } }, { upTo: 80, deviation: { min: -0.029, max: -0.01 } }, { upTo: 120, deviation: { min: -0.034, max: -0.012 } }],
    "h5": [{ upTo: 3, deviation: { min: -0.004, max: 0 } }, { upTo: 6, deviation: { min: -0.005, max: 0 } }, { upTo: 10, deviation: { min: -0.006, max: 0 } }, { upTo: 18, deviation: { min: -0.008, max: 0 } }, { upTo: 30, deviation: { min: -0.009, max: 0 } }, { upTo: 50, deviation: { min: -0.011, max: 0 } }, { upTo: 80, deviation: { min: -0.013, max: 0 } }, { upTo: 120, deviation: { min: -0.015, max: 0 } }],
    "h6": [{ upTo: 3, deviation: { min: -0.006, max: 0 } }, { upTo: 6, deviation: { min: -0.008, max: 0 } }, { upTo: 10, deviation: { min: -0.009, max: 0 } }, { upTo: 18, deviation: { min: -0.011, max: 0 } }, { upTo: 30, deviation: { min: -0.013, max: 0 } }, { upTo: 50, deviation: { min: -0.016, max: 0 } }, { upTo: 80, deviation: { min: -0.019, max: 0 } }, { upTo: 120, deviation: { min: -0.022, max: 0 } }],
    "h7": [{ upTo: 3, deviation: { min: -0.01, max: 0 } }, { upTo: 6, deviation: { min: -0.012, max: 0 } }, { upTo: 10, deviation: { min: -0.015, max: 0 } }, { upTo: 18, deviation: { min: -0.018, max: 0 } }, { upTo: 30, deviation: { min: -0.021, max: 0 } }, { upTo: 50, deviation: { min: -0.025, max: 0 } }, { upTo: 80, deviation: { min: -0.03, max: 0 } }, { upTo: 120, deviation: { min: -0.035, max: 0 } }],
    "h8": [{ upTo: 3, deviation: { min: -0.014, max: 0 } }, { upTo: 6, deviation: { min: -0.018, max: 0 } }, { upTo: 10, deviation: { min: -0.022, max: 0 } }, { upTo: 18, deviation: { min: -0.027, max: 0 } }, { upTo: 30, deviation: { min: -0.033, max: 0 } }, { upTo: 50, deviation: { min: -0.039, max: 0 } }, { upTo: 80, deviation: { min: -0.046, max: 0 } }, { upTo: 120, deviation: { min: -0.054, max: 0 } }],
    "h9": [{ upTo: 3, deviation: { min: -0.025, max: 0 } }, { upTo: 6, deviation: { min: -0.03, max: 0 } }, { upTo: 10, deviation: { min: -0.036, max: 0 } }, { upTo: 18, deviation: { min: -0.043, max: 0 } }, { upTo: 30, deviation: { min: -0.052, max: 0 } }, { upTo: 50, deviation: { min: -0.062, max: 0 } }, { upTo: 80, deviation: { min: -0.074, max: 0 } }, { upTo: 120, deviation: { min: -0.087, max: 0 } }],
    "h10": [{ upTo: 3, deviation: { min: -0.04, max: 0 } }, { upTo: 6, deviation: { min: -0.048, max: 0 } }, { upTo: 10, deviation: { min: -0.058, max: 0 } }, { upTo: 18, deviation: { min: -0.07, max: 0 } }, { upTo: 30, deviation: { min: -0.084, max: 0 } }, { upTo: 50, deviation: { min: -0.1, max: 0 } }, { upTo: 80, deviation: { min: -0.12, max: 0 } }, { upTo: 120, deviation: { min: -0.14, max: 0 } }],
    "h11": [{ upTo: 3, deviation: { min: -0.06, max: 0 } }, { upTo: 6, deviation: { min: -0.075, max: 0 } }, { upTo: 10, deviation: { min: -0.09, max: 0 } }, { upTo: 18, deviation: { min: -0.11, max: 0 } }, { upTo: 30, deviation: { min: -0.13, max: 0 } }, { upTo: 50, deviation: { min: -0.16, max: 0 } }, { upTo: 80, deviation: { min: -0.19, max: 0 } }, { upTo: 120, deviation: { min: -0.22, max: 0 } }],
    "k6": [{ upTo: 3, deviation: { min: 0, max: 0.006 } }, { upTo: 6, deviation: { min: 0.001, max: 0.009 } }, { upTo: 10, deviation: { min: 0.001, max: 0.01 } }, { upTo: 18, deviation: { min: 0.001, max: 0.012 } }, { upTo: 30, deviation: { min: 0.001, max: 0.015 } }, { upTo: 50, deviation: { min: 0.002, max: 0.018 } }, { upTo: 80, deviation: { min: 0.002, max: 0.021 } }, { upTo: 120, deviation: { min: 0.003, max: 0.025 } }],
    "m6": [{ upTo: 3, deviation: { min: 0.002, max: 0.008 } }, { upTo: 6, deviation: { min: 0.004, max: 0.012 } }, { upTo: 10, deviation: { min: 0.006, max: 0.015 } }, { upTo: 18, deviation: { min: 0.007, max: 0.018 } }, { upTo: 30, deviation: { min: 0.008, max: 0.021 } }, { upTo: 50, deviation: { min: 0.009, max: 0.025 } }, { upTo: 80, deviation: { min: 0.011, max: 0.03 } }, { upTo: 120, deviation: { min: 0.013, max: 0.035 } }],
    "n6": [{ upTo: 3, deviation: { min: 0.004, max: 0.01 } }, { upTo: 6, deviation: { min: 0.008, max: 0.016 } }, { upTo: 10, deviation: { min: 0.01, max: 0.019 } }, { upTo: 18, deviation: { min: 0.012, max: 0.023 } }, { upTo: 30, deviation: { min: 0.015, max: 0.028 } }, { upTo: 50, deviation: { min: 0.017, max: 0.033 } }, { upTo: 80, deviation: { min: 0.02, max: 0.039 } }, { upTo: 120, deviation: { min: 0.023, max: 0.045 } }],
  },
};

const ToleranceCalculator = ({ language }) => {

  const [selectedDiameter, setSelectedDiameter] = useState('');
  const [selectedHoleTolerance, setSelectedHoleTolerance] = useState('');
  const [selectedShaftTolerance, setSelectedShaftTolerance] = useState('');
  const [results, setResults] = useState({ hole: {}, shaft: {} });

  useEffect(() => {
    const calculateResultsForType = (type, selectedTolerance) => {
      const tolerance = tolerances[type][selectedTolerance];
      if (!selectedDiameter || !tolerance) {
        return { deviation: { min: null, max: null } };
      }

      const range = tolerance.find(range => selectedDiameter <= range.upTo);
      if (!range) return { deviation: { min: null, max: null } };

      return {
        minDeviation: range.deviation.min,
        maxDeviation: range.deviation.max,
        minDiameter: selectedDiameter + range.deviation.min,
        maxDiameter: selectedDiameter + range.deviation.max,
      };
    };

    setResults({
      hole: calculateResultsForType('hole', selectedHoleTolerance),
      shaft: calculateResultsForType('shaft', selectedShaftTolerance),
    });
  }, [selectedDiameter, selectedHoleTolerance, selectedShaftTolerance]);

  return (
    <div className='whole'>
      <div className='headline'>
        {language === 'pl' ? 'Kalkulator tolerancji' : 'Tolerance calculator'}
      </div>
      <div className='tinput'>
        <input className='dinput' type="number" value={selectedDiameter} onChange={e => setSelectedDiameter(parseFloat(e.target.value))} placeholder={language === 'pl' ? 'Średnica nominalna [mm]' : 'Nominal diameter [mm]'} />
      </div>
      <div className='hands'>
        <div className='holeshaft'>
          <div className='nameit'>
            <h3>{language === 'pl' ? 'Otwór' : 'Hole'}</h3>
            <select className='it' value={selectedHoleTolerance} onChange={e => setSelectedHoleTolerance(e.target.value)}>
              <option value="">IT</option>
              {Object.keys(tolerances.hole).map(key => (
                <option key={key} value={key}>{key}</option>
              ))}
            </select>
          </div>
          <p>EI: {results.hole.minDeviation}</p>
          <p>ES: {results.hole.maxDeviation}</p>
          <p>Min. Ø: {results.hole.minDiameter}</p>
          <p>Max. Ø: {results.hole.maxDiameter}</p>
        </div>
        <div className='holeshaft'>
          <div className='nameit'>
            <h3>{language === 'pl' ? 'Wał' : 'Shaft'}</h3>
            <select className='it' value={selectedShaftTolerance} onChange={e => setSelectedShaftTolerance(e.target.value)}>
              <option value="">IT</option>
              {Object.keys(tolerances.shaft).map(key => (
                <option key={key} value={key}>{key}</option>
              ))}
            </select>
          </div>
          <p>ei: {results.shaft.minDeviation}</p>
          <p>es: {results.shaft.maxDeviation}</p>
          <p>Min. Ø: {results.shaft.minDiameter}</p>
          <p>Max. Ø: {results.shaft.maxDiameter}</p>
        </div>
      </div>
    </div>
  );
};

export default ToleranceCalculator;
