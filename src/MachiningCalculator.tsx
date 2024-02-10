// // import React, { useReducer } from 'react';
// import TopBar from "./TopBar";
// import LanguageToggle from './languageToggle';
// import React, { useState, useReducer } from 'react';



// // Action types
// const ACTIONSMC = {
//   CHOOSE_OPERATION: 'choose-operation',
//   CHOOSE_EQUATION: 'choose-equation',
//   UPDATE_VALUE: 'update-value',
//   CALCULATE: 'calculate',
//   CLEAR: 'clear',
// };

// // Reducer function
// const MachiningCalculatorReducer = (state, action) => {
//   switch (action.type) {
//     case ACTIONSMC.CHOOSE_OPERATION:
//       return { ...state, selectedOperation: action.payload };
//     case ACTIONSMC.CHOOSE_EQUATION:
//       return { ...state, selectedEquation: action.payload };
//     case ACTIONSMC.UPDATE_VALUE:
//       return { ...state, [action.payload.field]: action.payload.value };
//     case ACTIONSMC.CALCULATE:
//       // Assuming you have a calculate function that returns the result
      
//       const calculatedResult = calculateFormula(state.selectedEquation, state);
      
//       return { ...state, result: calculatedResult };
//     case ACTIONSMC.CLEAR:
//       // Clear only input values
//       return { ...state, b: '', c: '', e: '', f: '', r: '', s: '', y: '', z: '', result: '' };
//     default:
//       return state;
//   }
// };

// // Calculate formula function
// const calculateFormula = (equation, values) => {
//   switch (equation) {
//     case 'formula1':
//       return values.b + values.c;
//     case 'formula2':
//       return values.e + values.f;
//     case 'formula3':
//       return values.r + values.s;
//     case 'formula4':
//       return values.y + values.z;
//     default:
//       return '';
//   }
// };



// // Component
// const MachiningCalculator: React.FC<{ goBack: () => void }> = ({ goBack }) => {

//   const [state, dispatch] = useReducer(MachiningCalculatorReducer, {
//     selectedOperation: '',
//     selectedEquation: '',
//     a: '',
//     b: '',
//     c: '',
//     d: '',
//     e: '',
//     f: '',
//     p: '',
//     r: '',
//     s: '',
//     x: '',
//     y: '',
//     z: '',
//     result: '',
//   });


//   const getEquation = () => {
//     const { selectedEquation } = state;

//     switch (selectedEquation) {
//       case 'formula1':
//         return 'v = RT/p =';
//       case 'formula2':
//         return 'R = pv/T =';
//       case 'formula3':
//         return 'T = pv/R =';
//       case 'formula4':
//         return 'p = RT/v =';
//       default:
//         return 'Choose';
//     }
//   };

//   const [language, setLanguage] = useState<'pl' | 'en'>('pl');

//   const toggleLanguage = () => {
//     setLanguage(prevLanguage => (prevLanguage === 'pl' ? 'en' : 'pl'));
//   };
  



//   // Function to determine whether the input field should be hidden
//   const isInputHidden = (variable) => {
    
//     const { selectedEquation } = state;

//     // You can customize this logic based on your requirements
//     // Here, I'm assuming an object "equationVariables" that maps equations to arrays of variables
//     const equationVariables = {
//       formula1: ['b', 'c'],
//       formula2: ['e', 'f'],
//       // Add more equations and associated variables as needed
//     };

//     // Return true if the variable is not part of the chosen equation
//     return !equationVariables[selectedEquation]?.includes(variable);
//   };

//   const handleOperationChange = (operation) => {
//     dispatch({ type: ACTIONSMC.CHOOSE_OPERATION, payload: operation });
//   };

//   const handleEquationChange = (equation) => {
//     dispatch({ type: ACTIONSMC.CHOOSE_EQUATION, payload: equation });
//   };

//   const handleValueChange = (field, value) => {
//     dispatch({ type: ACTIONSMC.UPDATE_VALUE, payload: { field, value } });
//   };

//   const handleCalculate = () => {
//     dispatch({ type: ACTIONSMC.CALCULATE });
//   };

//   const handleClear = () => {
//     dispatch({ type: ACTIONSMC.CLEAR });
//   };

//   const handletoggleLanguage = () => {
//     dispatch({ type: toggleLanguage });
//   };

//   const handleHelpClick = () => {
//     // Logic for help button click
//   };

  

//   return (
//     <div>


//       <div>
//         <TopBar
//           onLanguageToggle={handletoggleLanguage}
//           onHelpClick={handleHelpClick}
//           onGoBackClick={goBack}
//         />
//         {/* Rest of your Window1 content */}
//         <h1>{language === 'en' ? 'Machining calculator content' : 'blabla'}</h1>
//       </div>



//       {/* Dropdown for choosing operation */}
//       <select onChange={(e) => handleOperationChange(e.target.value)}>
//         <option value=''>Choose Operation</option>
//         <option value="operation1-2">Operation 1-2</option>
//         <option value="operation1-2">{language === 'en' ? 'Operation 1-2' : 'Operacja 1-2'}</option>
//         <option value="operation3-4">Operation 3-4</option>
//       </select>


//       {/* Dropdown for choosing equation */}
      
//       <select onChange={(e) => handleEquationChange(e.target.value)}
//       disabled={!state.selectedOperation}
//       >
//         <option value="">Choose Equation</option>
//         {state.selectedOperation === 'operation1-2' && (
//           <>
//             <option value="formula1">Formula 1</option>
//             <option value="formula2">Formula 2</option>
//           </>
//         )}
//         {state.selectedOperation === 'operation3-4' && (
//           <>
//             <option value="formula3">Formula 3</option>
//             <option value="formula4">Formula 4</option>
//           </>
//         )}
//       </select>
      

//       <div className="inputs">
//         <div>
//           <input
//           type="text"
//           placeholder="Enter value for b"
//           value={state.b}
//           onChange={(e) => handleValueChange('b', parseFloat(e.target.value))}
//           hidden={isInputHidden("b")}
//           />
//         </div>

//         <div>
//           <input
//           type="text"
//           placeholder="Enter value for c"
//           value={state.c}
//           onChange={(e) => handleValueChange('c', parseFloat(e.target.value))}
//           hidden={isInputHidden("c")}
//           />
//         </div>

//         <div>
//           <input
//           type="text"
//           placeholder="Enter value for e"
//           value={state.e}
//           onChange={(e) => handleValueChange('e', parseFloat(e.target.value))}
//           hidden={isInputHidden("e")}
//           />
//         </div>

//         <div>
//           <input
//           type="text"
//           placeholder="Enter value for f"
//           value={state.f}
//           onChange={(e) => handleValueChange('f', parseFloat(e.target.value))}
//           hidden={isInputHidden("f")}
//           />
//         </div>

//         <div>
//           <input
//           type="text"
//           placeholder="Enter value for z"
//           value={state.z}
//           onChange={(e) => handleValueChange('z', parseFloat(e.target.value))}
//           hidden={isInputHidden("z")}
//           />
//         </div>

//         <div>
//           <input
//           type="text"
//           placeholder="Enter value for y"
//           value={state.y}
//           onChange={(e) => handleValueChange('y', parseFloat(e.target.value))}
//           hidden={isInputHidden("y")}
//           />
//         </div>
//       </div>

//       {/* Buttons */}
//       <button onClick={handleCalculate}>Calculate</button>
//       <button onClick={handleClear}>Clear</button>

//       {/* Display chosen equation and result */}
//       {state.selectedEquation && (
//         <div>
//           <p>Chosen Equation: {getEquation()} {state.result}</p>
//           {/* <p>Result: {state.result}</p> */}
//         </div>
//       )}
//     </div>
//   );
// };

// export default MachiningCalculator;

export {};