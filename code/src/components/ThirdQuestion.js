import React from 'react';
const ThirdQuestion = ({
    happiness,
    onHappinessChange, 
    onStepChange,
}) => {
    return (
        <form>
        <h2>Do you like Logan Roy, the founder of Waystar Royco?</h2>
              <label>
                    <input 
                            type="radio" 
                            value = "happy"
                            onChange = {() => onHappinessChange('happy')}
                            checked = {happiness === 'happy'}
               />
                 
                 <span>Oh YES!</span>
        </label>

       <label>
                 <input 
                        className="radio-button"
                        type="radio" 
                        value = "sad"
                        onChange = {() => onHappinessChange('sad')}
                        checked = {happiness === 'sad'}
               />        
                <span> Well I guess Yes ..</span>
        </label>
        <button className="button" type= "submit" onClick ={onStepChange}>Next question</button>
    </form>
    );
};
export default ThirdQuestion;
