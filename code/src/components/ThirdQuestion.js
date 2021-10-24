import React from 'react';
const ThirdQuestion = ({
    happiness,
    onHappinessChange, 
    onStepChange,
}) => {
    return (
        <form>
            <label>
                <input 
                    type="radio" 
                    value = "happy"
                    onChange = {() => onHappinessChange('happy')}
                    checked = {happiness === 'happy'}
               />
                 <span role="img" aria-label= "Crown">Oh YES! 👑
                </span>
        </label>

       <label>
                <input 
                type="radio" 
                value = "sad"
                onChange = {() => onHappinessChange('sad')}
                checked = {happiness === 'sad'}
               />        
                <span role="img" aria-label= "Sad face"> Well I guess Yess .. 🥺
                </span>
        </label>
        <button onClick ={onStepChange}>See Summary </button>
    </form>
    );
};
export default ThirdQuestion;