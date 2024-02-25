import { useReducer } from 'react';

const ACTIONSMC = {
  CHOOSE_OPERATION: 'choose-operation',
  CHOOSE_EQUATION: 'choose-equation',
  UPDATE_VALUE: 'update-value',
  CALCULATE: 'calculate',
  CLEAR: 'clear',
};

function MachiningCalculatorReducer(state, action) {
  switch (action.type) {
    case ACTIONSMC.CHOOSE_OPERATION:
      return { ...state, selectedOperation: action.payload };
    case ACTIONSMC.CHOOSE_EQUATION:
      return { ...state, selectedEquation: action.payload };
    case ACTIONSMC.UPDATE_VALUE:
      return { ...state, [action.payload.field]: action.payload.value };
    case ACTIONSMC.CALCULATE:
      const calculatedResult = calculateFormula(state.selectedEquation, state);
      return { ...state, result: calculatedResult };
    case ACTIONSMC.CLEAR:
      return { ...state, Dcap: '', n: '', Vc: '', Vf: '', zc: '', ae: '', ap: '', fz: '', Pc: '', kc: '', Dm: '', fn: '', lm: '', Dc: '', result: '' };
    default:
      return state;
  }
}

function calculateFormula(equation, values) {
  switch (equation) {
    case 'm11Vc':
      return (values.Dcap * Math.PI * values.n / 1000).toFixed(3);
    case 'm12n':
      return (values.Vc * 1000 / Math.PI / values.Dcap).toFixed(3);
    case 'm13fz':
      return (values.Vf / values.n / values.zc).toFixed(3);
    case 'm14Vf':
      return (values.fz * values.n * values.zc).toFixed(3);
    case 'm15Q':
      return (values.ap * values.ae * values.Vf / 1000).toFixed(3);
    case 'm16Mc':
      return (values.Pc * 30 * 1000 / values.n / Math.PI).toFixed(3);
    case 'm17Pc':
      return (values.ap * values.ae * values.Vf * values.kc / 60 / 1000000).toFixed(3);
    case 'b21Vc':
      return (values.Dm * Math.PI * values.n / 1000).toFixed(3);
    case 'b22n':
      return (values.Vc * 1000 / Math.PI / values.Dm).toFixed(3);
    case 'b23Q':
      return (values.Vc * values.ap * values.fn).toFixed(3);
    case 'b24Pc':
      return (values.Vc * values.ap * values.fn * values.kc / 60 / 1000).toFixed(3);
    case 'b25Tc':
      return (values.lm / values.fn / values.n).toFixed(3);
    case 'd31Vc':
      return (values.Dc * Math.PI * values.n / 1000).toFixed(3);
    case 'd32n':
      return (values.Vc * 1000 / Math.PI / values.Dc).toFixed(3);
    case 'd33fn':
      return (values.Vf / values.n).toFixed(3);
    case 'd34Vf':
      return (values.fn * values.n).toFixed(3);
    case 'd35Q':
      return (values.Dc * values.fn * values.Vc / 4).toFixed(3);
    case 'd36Tc':
      return (values.lm / values.Vf).toFixed(3);
    case 'd37Pc':
      return (values.fn * values.Vc * values.Dc * values.kc / 240 / 1000).toFixed(3);
    case 'd38Mc':
      return (values.Pc * 30 * 1000 / Math.PI / values.n).toFixed(3);
    default:
      return '';
  }
}

const MachiningCalculator = ({ language }) => {
  
  const [state, dispatch] = useReducer(MachiningCalculatorReducer, {
    selectedOperation: '',
    selectedEquation: '',
    Dcap: '', 
    n: '', 
    Vc: '', 
    Vf: '', 
    zc: '', 
    ae: '', 
    ap: '', 
    fz: '', 
    Pc: '', 
    kc: '', 
    Dm: '', 
    fn: '', 
    lm: '', 
    Dc: '', 
    result: '',
  });

  const getEquation = () => {
    const { selectedEquation } = state;
    switch (selectedEquation) {
      case 'm11Vc':
        return <>V<sub>c</sub> [m/min] = D<sub>cap</sub> ∙ &#960; ∙ n : 1000 =</>
      case 'm12n':
        return <>n {language === 'pl' ? '[obr/min]' : '[RPM]'} = V<sub>c</sub> ∙ 1000 : &#960; : D<sub>cap</sub> =</>
      case 'm13fz':
        return <>f<sub>z</sub> [mm] = V<sub>f</sub> : n : z<sub>c</sub> =</>
      case 'm14Vf':
        return <>V<sub>f</sub> [mm/min] = f<sub>z</sub> ∙ n ∙ z<sub>c</sub> =</>
      case 'm15Q':
        return <>Q [cm<sup>3</sup>/min] = a<sub>p</sub> ∙ a<sub>e</sub> ∙ V<sub>f</sub> : 1000 =</>
      case 'm16Mc':
        return <>M<sub>c</sub> [Nm] = P<sub>c</sub> ∙ 30 ∙ 1000 : n : &#960; =</>
      case 'm17Pc':
        return <>P<sub>c</sub> [kW] = a<sub>p</sub> ∙ a<sub>e</sub> ∙ V<sub>f</sub> ∙ k<sub>c</sub> : 60 : 1000000 =</>
      case 'b21Vc':
        return <>V<sub>c</sub> [m/min] = D<sub>m</sub> ∙ &#960; ∙ n : 1000 =</>
      case 'b22n':
        return <>n {language === 'pl' ? '[obr/min]' : '[RPM]'} = V<sub>c</sub> ∙ 1000 : &#960; : D<sub>m</sub> =</>
      case 'b23Q':
        return <>Q [cm<sup>3</sup>/min] = V<sub>c</sub> ∙ a<sub>p</sub> ∙ f<sub>n</sub> =</>
      case 'b24Pc':
        return <>P<sub>c</sub> [kW] = a<sub>p</sub> ∙ f<sub>n</sub> ∙ V<sub>c</sub> ∙ k<sub>c</sub> : 60 : 1000 =</>
      case 'b25Tc':
        return <>T<sub>c</sub> [min] = l<sub>m</sub> : f<sub>n</sub> : n =</>
      case 'd31Vc':
        return <>V<sub>c</sub> [m/min] = D<sub>c</sub> ∙ &#960; ∙ n : 1000 =</>
      case 'd32n':
        return <>n {language === 'pl' ? '[obr/min]' : '[RPM]'} = V<sub>c</sub> ∙ 1000 : &#960; : D<sub>c</sub> =</>
      case 'd33fn':
        return <>f<sub>n</sub> {language === 'pl' ? '[mm/obr]' : '[mm/rev]'} = V<sub>f</sub> : n =</>
      case 'd34Vf':
        return <>V<sub>f</sub> [mm/min] = f<sub>n</sub> ∙ n =</>
      case 'd35Q':
        return <>Q [cm<sup>3</sup>/min] = V<sub>c</sub> ∙ D<sub>c</sub> ∙ f<sub>n</sub> : 4 =</>
      case 'd36Tc':
        return <>T<sub>c</sub> [min] = l<sub>m</sub> : V<sub>f</sub> =</>
      case 'd37Pc':
        return <>P<sub>c</sub> [kW] = f<sub>n</sub> ∙ V<sub>c</sub> ∙ D<sub>c</sub> ∙ k<sub>c</sub> : 240 : 1000 =</>
      case 'd38Mc':
        return <>M<sub>c</sub> [Nm] = P<sub>c</sub> ∙ 30 ∙ 1000 : n : &#960; =</>
      default:
        return '';
    }
  };

  const variableDescriptions = {
    Dcap: {
      pl: () => <>D<sub>cap</sub> - średnica skrawania</>,
      en: () => <>D<sub>cap</sub> - cutting diameter</>,
    },
    n: {
      pl: () => <>n - prędkość obrotowa wrzeciona</>,
      en: () => <>n - spindle speed</>,
    },
    Vc: {
      pl: () => <>V<sub>c</sub> - prędkość skrawania</>,
      en: () => <>V<sub>c</sub> - cutting speed</>,
    },
    Vf: {
      pl: () => <>V<sub>f</sub> - prędkość posuwu</>,
      en: () => <>V<sub>f</sub> - feed rate</>,
    },
    zc: {
      pl: () => <>z<sub>c</sub> - liczba zębów skrawających</>,
      en: () => <>z<sub>c</sub> - number of cutting teeth</>,
    },
    ae: {
      pl: () => <>a<sub>e</sub> - szerokość skrawania</>,
      en: () => <>a<sub>e</sub> - width of cut</>,
    },
    ap: {
      pl: () => <>a<sub>p</sub> - głębokość skrawania</>,
      en: () => <>a<sub>p</sub> - depth of cut</>,
    },
    fz: {
      pl: () => <>f<sub>z</sub> - posuw na ostrze</>,
      en: () => <>f<sub>z</sub> - feed per tooth</>,
    },
    Pc: {
      pl: () => <>P<sub>c</sub> - moc skrawania</>,
      en: () => <>P<sub>c</sub> - cutting power</>,
    },
    kc: {
      pl: () => <>k<sub>c</sub> - współczynnik siły skrawania</>,
      en: () => <>k<sub>c</sub> - specific cutting force</>,
    },
    Dm: {
      pl: () => <>D<sub>m</sub> - średnica otworu</>,
      en: () => <>D<sub>m</sub> - machined diameter</>,
    },
    fn: {
      pl: () => <>f<sub>n</sub> - posuw na obrót</>,
      en: () => <>f<sub>n</sub> - feed per revolution</>,
    },
    lm: {
      pl: () => <>l<sub>m</sub> - długość obróbki</>,
      en: () => <>l<sub>m</sub> - machined length</>,
    },
    Dc: {
      pl: () => <>D<sub>c</sub> - średnica wiertła</>,
      en: () => <>D<sub>c</sub> - drill diameter</>,
    },
  };

  const isInputHidden = (variable) => {
    const { selectedEquation } = state;
    const equationVariables = {
      m11Vc: ['n', 'Dcap'],
      m12n: ['Vc', 'Dcap'],
      m13fz: ['Vf', 'n', 'zc'],
      m14Vf: ['fz', 'n', 'zc'],
      m15Q: ['Vf', 'ap', 'ae'],
      m16Mc: ['Pc', 'n'],
      m17Pc: ['Vf', 'kc', 'ap', 'ae'],
      b21Vc: ['n', 'Dm'],
      b22n: ['Dm', 'Vc'],
      b23Q: ['Vc', 'ap', 'fn'],
      b24Pc: ['Vc', 'ap', 'fn', 'kc'],
      b25Tc: ['lm', 'fn', 'n'],
      d31Vc: ['Dc', 'n'],
      d32n: ['Vc', 'Dc'],
      d33fn: ['Vf', 'n'],
      d34Vf: ['fn', 'n'],
      d35Q: ['Dc', 'fn', 'Vc'],
      d36Tc: ['lm', 'Vf'],
      d37Pc: ['fn', 'Vc', 'Dc', 'kc'],
      d38Mc: ['Pc', 'n'],
    };
    return !equationVariables[selectedEquation]?.includes(variable);
  };

  const handleOperationChange = (operation) => {
    dispatch({ type: ACTIONSMC.CHOOSE_OPERATION, payload: operation });
  };

  const handleEquationChange = (equation) => {
    dispatch({ type: ACTIONSMC.CHOOSE_EQUATION, payload: equation });
  };

  const handleValueChange = (field, value) => {
    dispatch({ type: ACTIONSMC.UPDATE_VALUE, payload: { field, value } });
  };

  const handleCalculate = () => {
    dispatch({ type: ACTIONSMC.CALCULATE });
  };

  const handleClear = () => {
    dispatch({ type: ACTIONSMC.CLEAR });
  };

  return (
    <div className='whole'>
      <div className='headline'>
        {language === 'pl' ? 'Kalkulator parametrów' : 'Machining calculator'}
      </div>
      <div className='mmenus'>
        <div >
          <select className='mmenu1' onChange={(e) => handleOperationChange(e.target.value)}>
            <option value=''>{language === 'pl' ? 'Operacja' : 'Operation'}</option>
            <option value="milling">{language === 'pl' ? 'Frezowanie' : 'Milling'}</option>
            <option value="boring">{language === 'pl' ? 'Toczenie' : 'Boring'}</option>
            <option value="drilling">{language === 'pl' ? 'Wiercenie' : 'Drilling'}</option>
          </select>
        </div>
        <div >
          <select className='mmenu2' onChange={(e) => handleEquationChange(e.target.value)}
          disabled={!state.selectedOperation}>
            <option value="">{language === 'pl' ? 'Parametr' : 'Parameter'}</option>
            {state.selectedOperation === 'milling' && (
              <>
                <option value="m11Vc">{language === 'pl' ? 'Prędkość skrawania' : 'Cutting speed'}</option>
                <option value="m12n">{language === 'pl' ? 'Prędkość obrotowa wrzeciona' : 'Spindle speed'}</option>
                <option value="m13fz">{language === 'pl' ? 'Posuw na ostrze' : 'Feed per tooth'}</option>
                <option value="m14Vf">{language === 'pl' ? 'Prędkość posuwu' : 'Feed rate'}</option>
                <option value="m15Q">{language === 'pl' ? 'Objętościowa wydajność skrawania' : 'Material removal rate'}</option>
                <option value="m16Mc">{language === 'pl' ? 'Moment obrotowy' : 'Torque'}</option>
                <option value="m17Pc">{language === 'pl' ? 'Moc skrawania netto' : 'Net cutting power'}</option>
              </>
            )}
            {state.selectedOperation === 'boring' && (
              <>
                <option value="b21Vc">{language === 'pl' ? 'Prędkość skrawania' : 'Cutting speed'}</option>
                <option value="b22n">{language === 'pl' ? 'Prędkość obrotowa wrzeciona' : 'Spindle speed'}</option>
                <option value="b23Q">{language === 'pl' ? 'Objętościowa wydajność skrawania' : 'Material removal rate'}</option>
                <option value="b24Pc">{language === 'pl' ? 'Moc skrawania netto' : 'Net cutting power'}</option>
                <option value="b25Tc">{language === 'pl' ? 'Czas jednego przejścia' : 'Single pass time'}</option>
              </>
            )}
            {state.selectedOperation === 'drilling' && (
              <>
                <option value="d31Vc">{language === 'pl' ? 'Prędkość skrawania' : 'Cutting speed'}</option>
                <option value="d32n">{language === 'pl' ? 'Prędkość obrotowa wrzeciona' : 'Spindle speed'}</option>
                <option value="d33fn">{language === 'pl' ? 'Posuw na obrót' : 'Feed per revolution'}</option>
                <option value="d34Vf">{language === 'pl' ? 'Prędkość posuwu' : 'Penetration rate'}</option>
                <option value="d35Q">{language === 'pl' ? 'Objętościowa wydajność skrawania' : 'Material removal rate'}</option>
                <option value="d36Tc">{language === 'pl' ? 'Czas obróbki' : 'Machining time'}</option>
                <option value="d37Pc">{language === 'pl' ? 'Moc skrawania netto' : 'Net cutting power'}</option>
                <option value="d38Mc">{language === 'pl' ? 'Moment obrotowy' : 'Torque'}</option>

              </>
            )}
          </select>
        </div>
      </div>
      <div className='moutput'>
        {state.selectedEquation && (
          <div className='result'>
            {getEquation()} {state.result}
          </div>
        )}
      </div>
      <div className='mbuttons'>
        <button className='mbutton' onClick={handleCalculate}>{language === 'pl' ? 'Oblicz' : 'Calculate'}</button>
        <button className='mbutton' onClick={handleClear}>{language === 'pl' ? 'Wyczyść' : 'Clear'}</button>
      </div>
      <div className='minputs'>
        <div>
          <input className='minput' type="text" placeholder={language === 'pl' ? 'Podaj wartość Dcap' : 'Enter value for Dcap'} value={state.Dcap}
          onChange={(e) => handleValueChange('Dcap', parseFloat(e.target.value))} hidden={isInputHidden("Dcap")}/>
          {!isInputHidden("Dcap") && <p className='minpute'>{variableDescriptions.Dcap[language]()}</p>}
        </div>
        <div>
          <input className='minput' type="text" placeholder={language === 'pl' ? 'Podaj wartość n' : 'Enter value for n'} value={state.n}
          onChange={(e) => handleValueChange('n', parseFloat(e.target.value))} hidden={isInputHidden("n")}/>
          {!isInputHidden("n") && <p className='minpute'>{variableDescriptions.n[language]()}</p>}
        </div>
        <div>
          <input className='minput' type="text" placeholder={language === 'pl' ? 'Podaj wartość Vc' : 'Enter value for Vc'} value={state.Vc}
          onChange={(e) => handleValueChange('Vc', parseFloat(e.target.value))} hidden={isInputHidden("Vc")}/>
          {!isInputHidden("Vc") && <p className='minpute'>{variableDescriptions.Vc[language]()}</p>}
        </div>
        <div>
          <input className='minput' type="text" placeholder={language === 'pl' ? 'Podaj wartość Vf' : 'Enter value for Vf'} value={state.Vf}
          onChange={(e) => handleValueChange('Vf', parseFloat(e.target.value))} hidden={isInputHidden("Vf")}/>
          {!isInputHidden("Vf") && <p className='minpute'>{variableDescriptions.Vf[language]()}</p>}
        </div>
        <div>
          <input className='minput' type="text" placeholder={language === 'pl' ? 'Podaj wartość zc' : 'Enter value for zc'} value={state.zc}
          onChange={(e) => handleValueChange('zc', parseFloat(e.target.value))} hidden={isInputHidden("zc")}/>
          {!isInputHidden("zc") && <p className='minpute'>{variableDescriptions.zc[language]()}</p>}
        </div>
        <div>
          <input className='minput' type="text" placeholder={language === 'pl' ? 'Podaj wartość ae' : 'Enter value for ae'} value={state.ae}
          onChange={(e) => handleValueChange('ae', parseFloat(e.target.value))} hidden={isInputHidden("ae")}/>
          {!isInputHidden("ae") && <p className='minpute'>{variableDescriptions.ae[language]()}</p>}
        </div>
        <div>
          <input className='minput' type="text" placeholder={language === 'pl' ? 'Podaj wartość ap' : 'Enter value for ap'} value={state.ap}
          onChange={(e) => handleValueChange('ap', parseFloat(e.target.value))} hidden={isInputHidden("ap")}/>
          {!isInputHidden("ap") && <p className='minpute'>{variableDescriptions.ap[language]()}</p>}
        </div>
        <div>
          <input className='minput' type="text" placeholder={language === 'pl' ? 'Podaj wartość fz' : 'Enter value for fz'} value={state.fz}
          onChange={(e) => handleValueChange('fz', parseFloat(e.target.value))} hidden={isInputHidden("fz")}/>
          {!isInputHidden("fz") && <p className='minpute'>{variableDescriptions.fz[language]()}</p>}
        </div>
        <div>
          <input className='minput' type="text" placeholder={language === 'pl' ? 'Podaj wartość Pc' : 'Enter value for Pc'} value={state.Pc}
          onChange={(e) => handleValueChange('Pc', parseFloat(e.target.value))} hidden={isInputHidden("Pc")}/>
          {!isInputHidden("Pc") && <p className='minpute'>{variableDescriptions.Pc[language]()}</p>}
        </div>
        <div>
          <input className='minput' type="text" placeholder={language === 'pl' ? 'Podaj wartość kc' : 'Enter value for kc'} value={state.kc}
          onChange={(e) => handleValueChange('kc', parseFloat(e.target.value))} hidden={isInputHidden("kc")}/>
          {!isInputHidden("kc") && <p className='minpute'>{variableDescriptions.kc[language]()}</p>}
        </div>
        <div>
          <input className='minput' type="text" placeholder={language === 'pl' ? 'Podaj wartość Dm' : 'Enter value for Dm'} value={state.Dm}
          onChange={(e) => handleValueChange('Dm', parseFloat(e.target.value))} hidden={isInputHidden("Dm")}/>
          {!isInputHidden("Dm") && <p className='minpute'>{variableDescriptions.Dm[language]()}</p>}
        </div>
        <div>
          <input className='minput' type="text" placeholder={language === 'pl' ? 'Podaj wartość fn' : 'Enter value for fn'} value={state.fn}
          onChange={(e) => handleValueChange('fn', parseFloat(e.target.value))} hidden={isInputHidden("fn")}/>
          {!isInputHidden("fn") && <p className='minpute'>{variableDescriptions.fn[language]()}</p>}
        </div>
        <div>
          <input className='minput' type="text" placeholder={language === 'pl' ? 'Podaj wartość lm' : 'Enter value for lm'} value={state.lm}
          onChange={(e) => handleValueChange('lm', parseFloat(e.target.value))} hidden={isInputHidden("lm")}/>
          {!isInputHidden("lm") && <p className='minpute'>{variableDescriptions.lm[language]()}</p>}
        </div>
        <div>
          <input className='minput' type="text" placeholder={language === 'pl' ? 'Podaj wartość Dc' : 'Enter value for Dc'} value={state.Dc}
          onChange={(e) => handleValueChange('Dc', parseFloat(e.target.value))} hidden={isInputHidden("Dc")}/>
          {!isInputHidden("Dc") && <p className='minpute'>{variableDescriptions.Dc[language]()}</p>}
        </div>
      </div>
    </div>
  );
};

export default MachiningCalculator;