import React from 'react';

const SecondQuestion = ({
    surnameInput,
    onSurnameInputChange,
    onStepChange,
}) => {
    return (
        <form className ="inner-container">
              <label  className="label-text" htmlFor="surnameInput">Please type your surname</label>
            <input
                className="input-text"
                id="surnameInput"
                type="text"
                value={surnameInput}
                onChange={onSurnameInputChange}
            />
            <button className="button" type="submit" onClick={onStepChange}>Next question</button>
        </form>
    );
};
export default SecondQuestion;
