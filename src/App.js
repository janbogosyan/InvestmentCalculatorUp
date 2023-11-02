
import Header from './components/Header';
import Results from './components/Results';
import UserInput from './components/UserInput';

import { useState } from 'react';

function App() {

  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
});

function handleChange(inputIdentifier, newValue) {      
    setUserInput(prevUserInput => {
        return {
            ...prevUserInput,
            [inputIdentifier]: +newValue  // The key specified by inputIdentifier is updated in the new state object. обръщаме newValue да е число
        };                                // Finally, the new state object is returned, and it will be used by React to update the component's state,
                                          // re-render the component, and reflect the changes in the UI.
    });
};
//In summary, this function is designed to handle changes in user input fields and update the component's state accordingly,
//ensuring that the updated state contains the new value for the specified input field.
//This is a common pattern in React for handling form inputs.


  return (
    <>
     <Header />
     <UserInput userInput={userInput} onChange={handleChange}/>
     <Results input={userInput}/>
    </>
  );
}

export default App;
