//In the Form component we have the state variables and functions to deal with changes in the form. Conditional rendering

import React, { useState } from 'react';
import FirstQuestion from './FirstQuestion';
import SecondQuestion from './SecondQuestion';
import Overview from './Overview';
import ThirdQuestion from './ThirdQuestion';

const Form = () => {
    const [nameInput, setNameInput] = useState('');
    const [surnameInput, setSurnameInput] = useState('');
    const [happiness, setHappiness]= useState('happy');
    const [step, setStep] = useState(1);



    const onNameInputChange = (event) => {
        setNameInput(event.target.value);
    };
    const onSurnameInputChange = (event) => {
        setSurnameInput(event.target.value);
    };

    const onHappinessChange =(feeling) => {
        setHappiness(feeling)
    }
    const onStepChange = () => {
        setStep(step + 1);
    };
    // v1
    return (
        <div>
                    {step === 1 && (
                             <FirstQuestion
                                     nameInput={nameInput}
                                     onNameInputChange={onNameInputChange}
                                     onStepChange={onStepChange}
                />
            )}
            {step === 2 && (
                            <SecondQuestion
                                surname={surnameInput}
                                onSurnameInputChange={onSurnameInputChange}
                                onStepChange={onStepChange}
                />
            )}

             {step === 3 && (
                            <ThirdQuestion
                                happiness={happiness}
                                onHappinessChange={onHappinessChange}
                                onStepChange={onStepChange}
                />
            )}

            {step === 4 && (
                        <Overview nameInput={nameInput} surnameInput={surnameInput} />
            )}
        </div>
    );
    
};
export default ThirdQuestion;